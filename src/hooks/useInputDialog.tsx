/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useCallback, useRef, useState } from 'react';
import { Button, Card, Input, Select, SelectItem } from '@nextui-org/react';
import { Sleep } from '../utils/misc';
import Box from '../components/Box';
import Text from '../components/Text';

interface IField {
  name: string;
  label: string;
  type: 'text' | 'password' | 'select';
  options?: { [key: string]: any } & { value: string; label: string }[];
}

function useInputDialog<T = any>(props: { field: IField[]; title: string }) {
  const [fields, setFields] = useState<IField[]>(props.field);
  const [title, setTitle] = useState(props.title);
  const [show, setShow] = useState(false);
  const ref = useRef<{
    submitted: boolean;
    canceled: boolean;
    formData: { [key: string]: any };
  }>({
    submitted: false,
    canceled: false,
    formData: {},
  });
  const formRef = useRef<HTMLFormElement>(null);
  const [fieldData, setFieldData] = useState<{ [key: string]: any }>({});

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
    console.log(ref.current);
    if (ref.current.canceled) {
      ref.current.canceled = false;
      ref.current.submitted = false;
      return undefined;
    }
    ref.current.canceled = false;
    ref.current.submitted = false;
    return ref.current.formData as T;
  }, []);

  const setField = useCallback(
    (name: string, value: any) => {
      setFieldData({ ...fieldData, [name]: value });
      ref.current.formData[name] = value;
    },
    [fieldData, setFieldData]
  );

  const resetFields = useCallback(() => {
    setFieldData({});
    ref.current.formData = {};
  }, [setFieldData]);

  return {
    dialogElement: show && (
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
        <Card className="p-5">
          <form onSubmit={onSubmit} ref={formRef}>
            <Box display="flex" flexDirection="column" rWidth={400}>
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
                      <Select
                        name={item.name}
                        key={item.name}
                        className="max-w-xs dark"
                      >
                        {item.options.map(option => (
                          <SelectItem
                            key={option.value}
                            value={option.value}
                            className="dark text-black"
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </Select>
                    ) : null;
                  default:
                    return (
                      <Input
                        type={item.type}
                        label={item.label}
                        name={item.name}
                        key={item.name}
                        className="mt-2"
                        value={fieldData[item.name]}
                        onChange={e => {
                          setFieldData({
                            ...fieldData,
                            [item.name]: e.target.value,
                          });
                          ref.current.formData[item.name] = e.target.value;
                        }}
                      />
                    );
                }
              })}
              <Box
                rMargin={[10, 0, 0, 0]}
                display="flex"
                rGap={10}
                className="mt-5"
              >
                <Button color="success" type="submit">
                  Xác nhận
                </Button>
                <Button
                  color="danger"
                  onClick={() => {
                    setShow(false);
                    ref.current.canceled = true;
                  }}
                >
                  Hủy
                </Button>
              </Box>
            </Box>
          </form>
        </Card>
      </Box>
    ),
    getInputData,
    setFields,
    setTitle,
    setField: setField,
    resetFields,
  };
}

export default useInputDialog;
