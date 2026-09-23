import styled from 'styled-components';
import React from 'react';
import { BoxProps } from './Box';
import useReponsiveProps from '../hooks/useReponsiveProps';
import { omitResponsiveProps } from '../utils/props';

export type SvgProps = {
  src: string;
  color?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  onBlur?: React.FocusEventHandler<SVGSVGElement>;
  onMouseEnter?: React.MouseEventHandler<SVGSVGElement>;
  onMouseLeave?: React.MouseEventHandler<SVGSVGElement>;
  onMouseOver?: React.MouseEventHandler<SVGSVGElement>;
  onContextMenu?: React.MouseEventHandler<SVGSVGElement>;
  onWheel?: React.WheelEventHandler<SVGSVGElement>;
} & Omit<
  BoxProps,
  | 'onClick'
  | 'onBlur'
  | 'onMouseEnter'
  | 'onMouseLeave'
  | 'onMouseOver'
  | 'onContextMenu'
  | 'onWheel'
>;

const StyledSVG = styled.svg<{ src: string; color: string }>`
  background-color: ${props => props.color || 'red'};
  mask: url(${props => props.src}) no-repeat 50% 50%;
  mask-size: contain;
`;

const Svg = React.forwardRef<SVGSVGElement, SvgProps>((props, ref) => {
  const {
    src,
    color = 'red',
    className,
    style,
    onClick,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onMouseOver,
    onContextMenu,
    onWheel,
    ...rest
  } = props;
  const ratioStyle = useReponsiveProps(props);
  const restStyle = omitResponsiveProps(rest);

  return (
    <StyledSVG
      src={src}
      color={color}
      ref={ref}
      className={className}
      style={{ ...style, ...ratioStyle, ...restStyle }}
      onClick={onClick}
      onBlur={onBlur}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
      onContextMenu={onContextMenu}
      onWheel={onWheel}
    />
  );
});

export default Svg;
