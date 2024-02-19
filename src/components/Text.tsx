import React, { useMemo } from 'react';
import { BoxProps } from './Box';
import styled from 'styled-components';
import useReponsiveProps from '../hooks/useReponsiveProps';

export type TextProps = {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
  shadow?: boolean;
} & BoxProps;

const H1 = styled.h1``;
const H2 = styled.h2``;
const H3 = styled.h3``;
const H4 = styled.h4``;
const H5 = styled.h5``;
const P = styled.p``;
const DIV = styled.div``;
const SPAN = styled.span``;

const Text = React.forwardRef<any, TextProps>((props, ref) => {
  const {
    children,
    className,
    onClick,
    onBlur,
    variant,
    shadow,
    position,
    textShadow,
    fontFamily,
    ...rest
  } = props;
  const ratioStyle = useReponsiveProps(props);
  const Element = useMemo(() => {
    switch (variant) {
      case 'h1':
        return H1;
      case 'h2':
        return H2;
      case 'h3':
        return H3;
      case 'h4':
        return H4;
      case 'h5':
        return H5;
      case 'p':
        return P;
      case 'span':
        return SPAN;
      default:
        return DIV;
    }
  }, [variant]);
  return (
    <Element
      className={className}
      style={{
        fontFamily: fontFamily,
        ...rest,
        ...ratioStyle,
        position: position || 'relative',
        textShadow: textShadow,
      }}
      onClick={onClick}
      onBlur={onBlur}
      ref={ref}
    >
      {shadow && (
        <Element
          style={{
            fontFamily: fontFamily,
            ...rest,
            ...ratioStyle,
            position: 'absolute',
            transform: 'translateX(3px) translateY(-3px)',
            opacity: '0.2',
          }}
        >
          {children}
        </Element>
      )}
      {children}
    </Element>
  );
});

export default Text;
