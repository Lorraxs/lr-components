import React from 'react';
import Box, { BoxProps } from './Box';
import useReponsiveProps from '../hooks/useReponsiveProps';
import { omitResponsiveProps } from '../utils/props';
export type IconProps = {
  icon: React.ReactNode | string;
} & BoxProps;

function Icon(props: IconProps) {
  const {
    children,
    className,
    onClick,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onMouseOver,
    onContextMenu,
    onWheel,
    icon,
    style,
    hover = {},
    ...rest
  } = props;
  const ratioStyle = useReponsiveProps(props);
  const restStyle = omitResponsiveProps(rest);
  const [isHover, setIsHover] = React.useState(false);
  if (typeof icon === 'string') {
    const combinedClassName = className
      ? `${className} icon-${icon}`
      : `icon-${icon}`;
    return (
      <i
        className={combinedClassName}
        style={{
          ...style,
          ...ratioStyle,
          ...restStyle,
          ...(isHover ? hover : {}),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
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
        onContextMenu={onContextMenu}
        onWheel={onWheel}
      >
        {children}
      </i>
    );
  }
  return (
    <Box
      {...rest}
      className={className}
      display="flex"
      justifyContent="center"
      alignItems="center"
      onClick={onClick}
      onBlur={onBlur}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
      onContextMenu={onContextMenu}
      onWheel={onWheel}
      style={style}
      hover={hover}
    >
      {icon}
    </Box>
  );
}

export default Icon;
