import React from 'react';
import { BoxProps } from './Box';
import Text from './Text';
import moment from 'moment';

export type TimeRemainProps = {
  maxTime: number;
  elapsedTime: number;
  doneLabel?: string;
} & BoxProps;

const TimeRemain = React.forwardRef<HTMLDivElement, TimeRemainProps>(
  (props, _ref) => {
    const { maxTime, elapsedTime, doneLabel, ...rest } = props;

    return (
      <Text
        fontFamily="Work Sans"
        textTransform="uppercase"
        fontWeight={900}
        rFontSize={25}
        {...rest}
      >
        {elapsedTime >= maxTime
          ? doneLabel || 'Done'
          : moment(maxTime - elapsedTime, 's').format('H:mm:ss')}
      </Text>
    );
  }
);

export default TimeRemain;
