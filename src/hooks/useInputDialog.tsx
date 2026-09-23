import React, { useCallback, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Box from '../components/Box';
import Button from '../components/Button';
import Input from '../components/Input';
import Text from '../components/Text';
import { Sleep } from '../utils/misc';

interface IField {
  name: string;
  label: string;
  type: 'text' | 'password' | 'select';
  options?: ({ value: string; label: string } & Record<string, unknown>)[];
}

function useInputDialog<T = Record<string, unknown>>(props: {
  field: IField[];
  title: string;
}) {
  const [fields, setFields] = useState<IField[]>(props.field);
  const [title, setTitle] = useState(props.title);
  const [show, setShow] = useState(false);
  const ref = useRef<{
    submitted: boolean;
    canceled: boolean;
    formData: Record<string, unknown>;
  }>({
    submitted: false,
    canceled: false,
    formData: {},
  });
  const formRef = useRef<HTMLFormElement>(null);
  const [fieldData, setFieldData] = useState<Record<string, unknown>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setShow(false);
    ref.current.submitted = true;
  };

  const getInputData = useCallback(async (): Promise<T | undefined> => {
    setShow(true);
    while (!ref.current.submitted && !ref.current.canceled) {
      await Sleep(100);
    }
    if (ref.current.canceled) {
      ref.current.canceled = false;
      ref.current.submitted = false;
      return undefined;
    }
    ref.current.canceled = false;
    ref.current.submitted = false;
    return ref.current.formData as T;
  }, []);

  const setField = useCallback((name: string, value: unknown) => {
    setFieldData(current => ({ ...current, [name]: value }));
    ref.current.formData = { ...ref.current.formData, [name]: value };
  }, []);

  const resetFields = useCallback(() => {
    setFieldData({});
    ref.current.formData = {};
  }, []);

  const cancel = useCallback(() => {
    setShow(false);
    ref.current.canceled = true;
  }, []);

  return {
    dialogElement:
      show &&
      createPortal(
        <Box
          width={'100%'}
          height={'100%'}
          backgroundColor="#1f1f1fb7"
          position="absolute"
          left={0}
          top={0}
          zIndex={999}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            rPadding={20}
            backgroundColor="#18181b"
            borderRadius={8}
            boxShadow="0 20px 45px rgba(0, 0, 0, 0.35)"
          >
            <form onSubmit={onSubmit} ref={formRef}>
              <Box display="flex" flexDirection="column" rWidth={400} rGap={10}>
                <Text
                  textTransform="uppercase"
                  fontWeight={900}
                  rLineHeight={25}
                  rFontSize={25}
                  rMargin={[0, 0, 10, 0]}
                >
                  {title}
                </Text>
                {fields.map(item => {
                  switch (item.type) {
                    case 'select':
                      return item.options ? (
                        <select
                          key={item.name}
                          name={item.name}
                          value={String(fieldData[item.name] ?? '')}
                          onChange={e => setField(item.name, e.target.value)}
                          style={{
                            width: '100%',
                            height: 42,
                            padding: '0 10px',
                            borderRadius: 10,
                            border: 'none',
                            backgroundColor: '#ffffff11',
                            color: '#ffffff',
                            outline: 'none',
                          }}
                        >
                          <option value="" disabled>
                            {item.label}
                          </option>
                          {item.options.map(option => (
                            <option
                              key={option.value}
                              value={option.value}
                              style={{ color: '#111827' }}
                            >
                              {option.label}
                            </option>
                          ))}
                        </select>
                      ) : null;
                    default:
                      return (
                        <Input
                          type={item.type}
                          placeholder={item.label}
                          key={item.name}
                          value={String(fieldData[item.name] ?? '')}
                          onChange={e => setField(item.name, e.target.value)}
                          width="100%"
                          rHeight={42}
                        />
                      );
                  }
                })}
                <Box rMargin={[10, 0, 0, 0]} display="flex" rGap={10}>
                  <Button
                    label="Xác nhận"
                    color="#111827"
                    backgroundColor="#84cc16"
                    fontWeight={700}
                    rWidth={120}
                    rHeight={40}
                    type="submit"
                  />
                  <Button
                    label="Hủy"
                    color="#ffffff"
                    backgroundColor="#dc2626"
                    fontWeight={700}
                    rWidth={80}
                    rHeight={40}
                    onClick={cancel}
                    type="button"
                  />
                </Box>
              </Box>
            </form>
          </Box>
        </Box>,
        document.body
      ),
    getInputData,
    setFields,
    setTitle,
    setField,
    resetFields,
  };
}

export default useInputDialog;
