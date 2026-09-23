import React from 'react';
import styled from 'styled-components';
import useReponsiveProps, { WithRatioProps } from '../hooks/useReponsiveProps';
import { omitResponsiveProps } from '../utils/props';

export type ImageProps = {
  fallbackSrc?: string;
} & WithRatioProps &
  React.ImgHTMLAttributes<HTMLImageElement>;

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-position: center;
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
`;

const Image = React.forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
  const {
    style,
    fallbackSrc = './assets/no-picture.png',
    onError,
    ...rest
  } = props;
  const ratioStyle = useReponsiveProps(props);
  const restProps = omitResponsiveProps(rest);

  return (
    <StyledImg
      ref={ref}
      onError={event => {
        onError?.(event);
        const { currentTarget } = event;
        currentTarget.onerror = null; // prevents looping
        currentTarget.src = fallbackSrc;
      }}
      style={{
        ...style,
        ...ratioStyle,
      }}
      {...restProps}
    />
  );
});

export default Image;
