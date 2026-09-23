import { useRef, useState } from 'react';

export interface QueueMethods<T> {
  add: (item: T) => void;
  remove: () => void;
  first: T;
  last: T;
  values: T[];
  size: number;
}

const useQueue = <T>(initialValue: T[] = []): QueueMethods<T> => {
  const [state, set] = useState(initialValue);
  const stateRef = useRef(state);
  stateRef.current = state;

  const setQueue = (next: T[]) => {
    stateRef.current = next;
    set(next);
  };
  return {
    add: value => {
      setQueue([...stateRef.current, value]);
    },
    remove: () => {
      const [first, ...rest] = stateRef.current;
      setQueue(rest);
      return first;
    },
    get values() {
      return state;
    },
    get first() {
      return state[0];
    },
    get last() {
      return state[state.length - 1];
    },
    get size() {
      return state.length;
    },
  };
};

export default useQueue;
