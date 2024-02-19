import React from 'react';
import { BoxProps } from './Box';
import useReponsiveProps from '../hooks/useReponsiveProps';

const Table = React.forwardRef<HTMLTableElement, BoxProps>((props, ref) => {
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
    <table
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
    </table>
  );
});

export default Table;
