import React from 'react';
import Box, { BoxProps } from './Box';
import useReponsiveProps from '../hooks/useReponsiveProps';
export type IconProps = {
  icon: React.ReactNode | string;
} & BoxProps;

function Icon(props: IconProps) {
  const {
    children,
    onClick,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onMouseOver,
    onContextMenu,
    icon,
    ...rest
  } = props;
  const ratioStyle = useReponsiveProps(props);
  if (typeof icon === 'string') {
    return (
      <i
        className={`icon-${icon}`}
        style={{
          ...ratioStyle,
          ...rest,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={onClick}
        onBlur={onBlur}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseOver={onMouseOver}
        onContextMenu={onContextMenu}
      >
        {children}
      </i>
    );
  }
  return (
    <Box
      {...rest}
      display="flex"
      justifyContent="center"
      alignItems="center "
      onClick={onClick}
      onBlur={onBlur}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
      onContextMenu={onContextMenu}
    >
      {icon}
    </Box>
  );
}

export default Icon;
