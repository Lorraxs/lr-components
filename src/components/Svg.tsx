import styled from 'styled-components';
import React from 'react';
import { BoxProps } from './Box';
import useReponsiveProps from '../hooks/useReponsiveProps';

export type SvgProps = {
  src: string;
  color?: string;
} & BoxProps;

const StyledSVG = styled.svg<{ src: string; color: string }>`
  background-color: ${props => props.color || 'red'};
  mask: url(${props => props.src}) no-repeat 50% 50%;
  mask-size: contain;
`;

const Svg = React.forwardRef<SVGSVGElement, SvgProps>((props, ref) => {
  const { src, color = 'red', ...rest } = props;
  const ratioStyle = useReponsiveProps(props);

  return (
    <StyledSVG
      src={src}
      color={color}
      ref={ref}
      style={{ ...ratioStyle, ...rest }}
    />
  );
});

export default Svg;
