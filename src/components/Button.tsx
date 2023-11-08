import React from 'react';
import styled from 'styled-components';
import { CSS } from 'styled-components/dist/types';

import Text from './Text';
import useReponsiveProps, { WithRatioProps } from '../hooks/useReponsiveProps';

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onBlur?: React.FocusEventHandler<HTMLButtonElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseOver?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  label?: string;
  icon?: React.ReactNode;
  iconAlign?: 'left' | 'right' | 'center';
} & CSS.Properties &
  WithRatioProps;

const StyledButton = styled.button<{ justifyContent: string }>`
  width: 200px;
  height: 50px;
  padding: 0 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: black;
  display: flex;
  justify-content: ${p => p.justifyContent};
  align-items: center;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

function Button(props: ButtonProps) {
  const {
    children,
    className,
    onClick,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onMouseOver,
    color,
    label,
    iconAlign = 'left',
    icon,
    type,
    ...rest
  } = props;
  const ratioStyle = useReponsiveProps(props);
  return (
    <StyledButton
      className={className}
      style={{ ...ratioStyle, ...rest }}
      onClick={onClick}
      onBlur={onBlur}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
      type={type}
      justifyContent={icon && label ? 'space-between' : 'center'}
    >
      {icon}
      {label && <Text color={color}>{label}</Text>}
      <div></div>
    </StyledButton>
  );
}

export default Button;
