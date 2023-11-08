import React from 'react';
import Box from './Box';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import styled from 'styled-components';
import Text from './Text';

const BoxButton = styled(Box)`
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    background-color: #f2e307 !important;
  }
`;

export interface SelectRangeProps {
  rWidth?: number;
  rHeight?: number;
  backgroundColor?: string;
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
}

function SelectRange(props: SelectRangeProps) {
  const {
    rWidth,
    rHeight = 60,
    backgroundColor = '#ffffff47',
    value = 0,
    min = 0,
    max = 100,
  } = props;
  return (
    <Box
      width={'100%'}
      rWidth={rWidth}
      rHeight={rHeight}
      rBorderRadius={10}
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      rGap={2}
    >
      <BoxButton
        rHeight={rHeight}
        rWidth={rHeight}
        backgroundColor={backgroundColor}
        flexShrink={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
        rFontSize={20}
        onClick={() => {
          if (value > min) props.onChange?.(value - 1);
          else props.onChange?.(max);
        }}
      >
        <AiFillCaretLeft />
      </BoxButton>
      <Box
        rHeight={rHeight}
        width={'100%'}
        backgroundColor={backgroundColor}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text rFontSize={20}>{value}</Text>
      </Box>
      <BoxButton
        rHeight={rHeight}
        rWidth={rHeight}
        backgroundColor={backgroundColor}
        flexShrink={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
        rFontSize={20}
        onClick={() => {
          if (value < max) props.onChange?.(value + 1);
          else props.onChange?.(min);
        }}
      >
        <AiFillCaretRight />
      </BoxButton>
    </Box>
  );
}

export default SelectRange;
