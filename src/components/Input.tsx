import React from 'react';
import styled from 'styled-components';

import { CSS } from 'styled-components/dist/types';
import useReponsiveProps, { WithRatioProps } from '../hooks/useReponsiveProps';

const StyledInput = styled.input`
  width: 200px;
  height: 50px;
  padding: 0 10px;
  border-radius: 10px;
  border: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  background-color: #ffffff11;
  color: #fff;
  outline: none;
  box-sizing: border-box;
`;

export type InputProps = {
  className?: string;
  onMouseEnter?: React.MouseEventHandler<HTMLInputElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLInputElement>;
  onMouseOver?: React.MouseEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  type?: 'text' | 'password' | 'number';
  value?: string | number;
  placeholder?: string;
} & CSS.Properties &
  WithRatioProps;

function Input(props: InputProps) {
  const {
    className,
    onMouseEnter,
    onMouseLeave,
    onMouseOver,
    type = 'text',
    value = '',
    onChange,
    placeholder,
    ...rest
  } = props;
  const ratioStyle = useReponsiveProps(props);
  return (
    <StyledInput
      placeholder={placeholder}
      style={{ ...ratioStyle, ...rest }}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
