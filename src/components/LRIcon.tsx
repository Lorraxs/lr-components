import React from 'react';
import { BoxProps } from './Box';
import useReponsiveProps from '../hooks/useReponsiveProps';
import { IconsId } from '../icons/icons';
import { omitResponsiveProps } from '../utils/props';
export type IconProps = {
  icon: IconsId;
} & BoxProps;

function LRIcon(props: IconProps) {
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
        if (onMouseEnter) onMouseEnter(e as any);
      }}
      onMouseLeave={e => {
        setIsHover(false);
        if (onMouseLeave) onMouseLeave(e as any);
      }}
      onMouseOver={onMouseOver}
      onContextMenu={onContextMenu}
      onWheel={onWheel}
    >
      {children}
    </i>
  );
}

export default LRIcon;
