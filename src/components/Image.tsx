import React from 'react';
import styled from 'styled-components';
import Box, { BoxProps } from './Box';

export type ImageProps = {
  src: string;
  alt?: string;
} & BoxProps;

const StyledImg = styled.img`
  object-fit: contain;
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
  const { src, alt, ...rest } = props;

  return (
    <Box {...rest}>
      <StyledImg
        src={src}
        ref={ref}
        alt={alt || src}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = './images/no-picture.png';
        }}
      />
    </Box>
  );
});

export default Image;
