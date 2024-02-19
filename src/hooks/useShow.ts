import { useEffect, useState } from 'react';
import { fetchNui } from '../utils/fetchNui';

interface UseShowProps {
  name: string;
}

function useShow(props: UseShowProps) {
  const { name } = props;
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
    if (!show) {
      fetchNui('onOpen', name);
    } else {
      fetchNui('onClose', name);
    }
  };
  useEffect(() => {
    if (show === true) {
      const KeyHandler = (e: KeyboardEvent) => {
        if (e.code === 'Escape') {
          setShow(false);
          fetchNui('onClose', name);
        }
      };
      const MessageHandler = (event: MessageEvent) => {
        const { action, data } = event.data;
        if (action === 'show' && data === name) {
          setShow(true);
          fetchNui('onOpen', name);
        } else if (action === 'hide' && data === name) {
          setShow(false);
          fetchNui('onClose', name);
        }
      };
      window.addEventListener('message', MessageHandler);
      window.addEventListener('keyup', KeyHandler);
      return () => {
        window.removeEventListener('keyup', KeyHandler);
        window.removeEventListener('message', MessageHandler);
      };
    } else {
      const MessageHandler = (event: MessageEvent) => {
        const { action, data } = event.data;
        if (action === 'show' && data === name) {
          setShow(true);
          fetchNui('onOpen', name);
        } else if (action === 'hide' && data === name) {
          setShow(false);
          fetchNui('onClose', name);
        }
      };
      window.addEventListener('message', MessageHandler);
      return () => window.removeEventListener('message', MessageHandler);
    }
  }, [name, show]);

  return { show, toggle };
}

export default useShow;
