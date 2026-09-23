import React from 'react';
import { BoxProps } from './Box';
import useReponsiveProps from '../hooks/useReponsiveProps';
import { omitResponsiveProps } from '../utils/props';

const Tr = React.forwardRef<HTMLTableRowElement, BoxProps>((props, ref) => {
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
    style,
    ...rest
  } = props;
  const ratioStyle = useReponsiveProps(props);
  const restStyle = omitResponsiveProps(rest);
  return (
    <tr
      className={className}
      style={{ ...style, ...ratioStyle, ...restStyle }}
      onClick={onClick}
      onBlur={onBlur}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
      onContextMenu={onContextMenu}
      onWheel={onWheel}
    >
      {children}
    </tr>
  );
});

export default Tr;
