import React, { CSSProperties } from 'react';
import useReponsiveProps, { WithRatioProps } from '../hooks/useReponsiveProps';
import { omitResponsiveProps } from '../utils/props';

export type BoxProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  onBlur?: React.FocusEventHandler<HTMLElement>;
  onMouseEnter?: React.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLElement>;
  onMouseOver?: React.MouseEventHandler<HTMLElement>;
  onContextMenu?: React.MouseEventHandler<HTMLElement>;
  onWheel?: React.WheelEventHandler<HTMLElement>;
  style?: CSSProperties;
  hover?: CSSProperties;
} & Partial<Omit<CSSProperties, 'transition'>> &
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
    onContextMenu,
    onWheel,
    style,
    hover = {},
    ...rest
  } = props;
  const ratioStyle = useReponsiveProps(props);
  const restStyle = omitResponsiveProps(rest);
  const [isHover, setIsHover] = React.useState(false);
  return (
    <div
      className={className}
      style={
        isHover
          ? { ...style, ...ratioStyle, ...restStyle, ...hover }
          : { ...style, ...ratioStyle, ...restStyle }
      }
      onClick={onClick}
      onBlur={onBlur}
      ref={ref}
      onMouseEnter={(...args) => {
        setIsHover(true);
        if (onMouseEnter) onMouseEnter(...args);
      }}
      onMouseLeave={(...args) => {
        setIsHover(false);
        if (onMouseLeave) onMouseLeave(...args);
      }}
      onMouseOver={onMouseOver}
      onContextMenu={onContextMenu}
      onWheel={onWheel}
    >
      {children}
    </div>
  );
});

export default Box;
