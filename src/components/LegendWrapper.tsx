import React from 'react';
import Box, { BoxProps } from './Box';
import Text from './Text';

export type LegendWrapperProps = {
  children?: React.ReactNode;
  topRightLabel?: string | JSX.Element;
  bottomCenterLabel?: string | JSX.Element;
  bottomLeftLabel?: string | JSX.Element;
} & BoxProps;

function LegendWrapper(props: LegendWrapperProps) {
  const {
    children,
    topRightLabel,
    bottomCenterLabel,
    bottomLeftLabel,
    color,
    borderImage,
    borderWidth,
    ...rest
  } = props;

  return (
    <Box
      {...rest}
      borderWidth={borderWidth || '2px'}
      borderStyle="solid"
      borderImage={
        borderImage ||
        'linear-gradient(135deg, #ffffff81, transparent 15%, transparent 85%, #ffffff81)1'
      }
      height={'100%'}
      position="relative"
      boxSizing="border-box"
    >
      {topRightLabel && typeof topRightLabel === 'string' ? (
        <Text
          color={color || 'var(--primary-color)'}
          position="absolute"
          rTop={0}
          rRight={10}
          rLineHeight={0}
          rFontSize={25}
          fontFamily="Roboto Condensed"
        >
          {topRightLabel}
        </Text>
      ) : (
        <Box
          position="absolute"
          rTop={0}
          rRight={10}
          transform=" translateY(-50%)"
          textAlign="right"
        >
          {topRightLabel}
        </Box>
      )}
      {bottomCenterLabel && typeof bottomCenterLabel === 'string' ? (
        <Text
          color={color || 'var(--primary-color)'}
          position="absolute"
          rBottom={0}
          rLeft={0}
          rRight={0}
          rLineHeight={0}
          rFontSize={25}
          fontFamily="Roboto Condensed"
          textAlign="center"
        >
          {bottomCenterLabel}
        </Text>
      ) : (
        <Box
          position="absolute"
          rBottom={0}
          left={'50%'}
          transform="translateX(-50%) translateY(50%)"
          rRight={0}
          textAlign="center"
        >
          {bottomCenterLabel}
        </Box>
      )}
      {bottomLeftLabel && typeof bottomLeftLabel === 'string' ? (
        <Text
          color={color || 'var(--primary-color)'}
          position="absolute"
          rBottom={0}
          rLeft={10}
          rLineHeight={0}
          rFontSize={25}
          fontFamily="Roboto Condensed"
        >
          {bottomLeftLabel}
        </Text>
      ) : (
        <Box
          position="absolute"
          rBottom={0}
          rLeft={10}
          transform=" translateY(50%)"
          textAlign="left"
        >
          {bottomLeftLabel}
        </Box>
      )}
      {children}
    </Box>
  );
}

export default LegendWrapper;
