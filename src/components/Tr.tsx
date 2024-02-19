import React from 'react';
import { BoxProps } from './Box';
import useReponsiveProps from '../hooks/useReponsiveProps';

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
    ...rest
  } = props;
  const ratioStyle = useReponsiveProps(props);
  return (
    <tr
      className={className}
      style={{ ...ratioStyle, ...rest }}
      onClick={onClick}
      onBlur={onBlur}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
      onContextMenu={onContextMenu}
    >
      {children}
    </tr>
  );
});

export default Tr;
