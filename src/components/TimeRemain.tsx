import React from 'react';
import { BoxProps } from './Box';
import Text from './Text';
import moment from 'moment';

export type TimeRemainProps = {
  maxTime: number;
  elapsedTime: number;
  doneLabel?: string;
  fontSize?: number;
  fontWeight?: number;
  fontFamily?: string;
} & BoxProps;

const TimeRemain = React.forwardRef<HTMLDivElement, TimeRemainProps>(
  (props, _ref) => {
    const {
      maxTime,
      elapsedTime,
      doneLabel,
      fontSize = 18,
      fontWeight = 900,
      fontFamily = 'Goldman',
      ...rest
    } = props;

    return (
      <Text
        fontFamily={fontFamily}
        textTransform="uppercase"
        fontWeight={fontWeight}
        rFontSize={fontSize}
        {...rest}
      >
        {elapsedTime >= maxTime
          ? doneLabel || 'Done'
          : moment.utc((maxTime - elapsedTime) * 1000).format('H:mm:ss')}
      </Text>
    );
  }
);

export default TimeRemain;
