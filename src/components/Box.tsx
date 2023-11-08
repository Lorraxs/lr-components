import React from 'react';
import * as CSS from 'csstype';
import useReponsiveProps, { WithRatioProps } from '../hooks/useReponsiveProps';

export type BoxProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onBlur?: React.FocusEventHandler<HTMLDivElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  onMouseOver?: React.MouseEventHandler<HTMLDivElement>;
} & CSS.Properties &
  WithRatioProps;

const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const {
    children,
    className,
    onClick,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onMouseOver,
    ...rest
  } = props;
  const ratioStyle = useReponsiveProps(props);

  return (
    <div
      className={className}
      style={{ ...ratioStyle, ...rest }}
      onClick={onClick}
      onBlur={onBlur}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
    >
      {children}
    </div>
  );
});

export default Box;
