import React from 'react';
import Box, { BoxProps } from './Box';
import Text from './Text';

export type TagProps = {
  label: JSX.Element | string;
  color?: string;
} & BoxProps;

const Tag = React.forwardRef<any, TagProps>((props, ref) => {
  const {
    children,
    className,
    onClick,
    onBlur,
    label,
    backgroundColor,
    color,
    rPadding,
    rBorderRadius,
    rFontSize,
    fontFamily,
    ...rest
  } = props;

  return (
    <Box
      className={className}
      onClick={onClick}
      onBlur={onBlur}
      ref={ref}
      backgroundColor={backgroundColor || '#ff9741'}
      color={color || '#1f1f1f'}
      fontFamily={fontFamily || 'Roboto Condensed'}
      textTransform="uppercase"
      display="flex"
      alignItems="center"
      justifyContent="center"
      rBorderRadius={rBorderRadius || 5}
      rMargin={[0, 8]}
      rPadding={rPadding || [0, 5]}
      {...rest}
    >
      {typeof label === 'string' ? (
        <Text
          fontWeight={600}
          rFontSize={rFontSize || 15}
          rLineHeight={(rFontSize || 15) * 2}
        >
          {label}
        </Text>
      ) : (
        label
      )}

      {children}
    </Box>
  );
});

export default Tag;
