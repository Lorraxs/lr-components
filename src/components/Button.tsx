import React from 'react';
import styled from 'styled-components';
import { CSS } from 'styled-components/dist/types';

import Text from './Text';
import useReponsiveProps, { WithRatioProps } from '../hooks/useReponsiveProps';
import { omitResponsiveProps } from '../utils/props';

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
  style?: CSS.Properties;
  hover?: CSS.Properties;
} & Partial<CSS.Properties> &
  WithRatioProps;

const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  padding: 0 20px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: black;
  display: flex;
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
    style,
    hover = {},
    ...rest
  } = props;
  const ratioStyle = useReponsiveProps(props);
  const restStyle = omitResponsiveProps(rest);
  const [isHover, setIsHover] = React.useState(false);
  const baseStyle = {
    ...style,
    ...ratioStyle,
    ...restStyle,
    justifyContent: icon && label ? 'space-between' : 'center',
  };

  return (
    <StyledButton
      className={className}
      style={isHover ? { ...baseStyle, ...hover } : baseStyle}
      onClick={onClick}
      onBlur={onBlur}
      onMouseEnter={e => {
        setIsHover(true);
        if (onMouseEnter) onMouseEnter(e);
      }}
      onMouseLeave={e => {
        setIsHover(false);
        if (onMouseLeave) onMouseLeave(e);
      }}
      onMouseOver={onMouseOver}
      type={type}
    >
      {icon}
      {label && <Text color={color}>{label}</Text>}
      <div>{children}</div>
    </StyledButton>
  );
}

export default Button;
