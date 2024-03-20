import { Button, Card } from '@nextui-org/react';
import { useCallback, useRef, useState } from 'react';
import Box from '../components/Box';
import React from 'react';
import Text from '../components/Text';
import { Sleep } from '../utils/misc';

interface Props {
  title: string;
  desc: string;
}

function useConfirmDialog(props: Props) {
  const [title, setTitle] = useState(props.title);
  const [desc, setDesc] = useState(props.desc);
  const [show, setShow] = useState(false);
  const ref = useRef<boolean | null>(null);

  const setConfirmDialogData = (title: string, desc: string) => {
    setTitle(title);
    setDesc(desc);
  };

  const confirm = useCallback(async (): Promise<boolean> => {
    ref.current = null;
    setShow(true);
    while (ref.current === null) await Sleep(100);
    const data = ref.current;
    return data;
  }, [ref, setShow]);

  const accept = useCallback(() => {
    setShow(false);
    ref.current = true;
  }, [ref, setShow]);

  const cancel = useCallback(() => {
    setShow(false);
    ref.current = false;
  }, [ref, setShow]);

  return {
    confirm,
    title,
    setTitle,
    desc,
    setDesc,
    setConfirmDialogData,
    confirmDialogElement: show && (
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
            <Text
              fontWeight={300}
              rLineHeight={18}
              rFontSize={15}
              rMargin={[0, 0, 10, 0]}
            >
              {desc}
            </Text>
            <Box
              display="flex"
              justifyContent="flex-end"
              rMargin={[10, 0, 0, 0]}
              rGap={10}
            >
              <Button color="success" onClick={accept}>
                Xác nhận
              </Button>
              <Button color="danger" onClick={cancel}>
                Hủy
              </Button>
            </Box>
          </Box>
        </Card>
      </Box>
    ),
  };
}

export default useConfirmDialog;
