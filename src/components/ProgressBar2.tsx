import React from 'react';
import Box from './Box';

const WeightBar: React.FC<{
  percent: number;
  durability?: boolean;
  separator?: number;
  width?: number | string;
  color1?: string;
  color2?: string;
  height?: string;
}> = ({
  percent,
  durability,
  separator,
  width,
  color1 = 'rgba(143,76,254,1)',
  color2 = 'rgba(0, 0, 0, 0.5)',
  height,
}) => {
  if (!separator)
    return (
      <div
        style={{
          width: '100%',
          background: color2,
          height: height ? height : '0.4vh',
          overflow: 'hidden',
          border: durability ? 'none' : '1px inset rgba(0, 0, 0, 0.1)',
          borderRadius: durability ? '0' : '4px',
        }}
      >
        <div
          style={{
            visibility: percent > 0 ? 'visible' : 'hidden',
            height: '100%',
            width: `${percent}%`,
            background: color1,
            transition: `background ${0.3}s ease, width ${0.3}s ease`,
            borderRadius: '3px',
          }}
        ></div>
      </div>
    );
  if (width === undefined) width = '100%';
  if (typeof width === 'number') {
    return (
      <Box display="flex" rGap={2} rWidth={width}>
        {new Array(separator).fill(0).map((_, i) => {
          const percentPerSeperator = 100 / separator;
          const startPercent = percentPerSeperator * i;
          const realPercent =
            percent - startPercent > percentPerSeperator
              ? 100
              : ((percent - startPercent) / percentPerSeperator) * 100;
          console.log(realPercent);
          return (
            <Box width={'100%'}>
              <WeightBar percent={realPercent} height={height} />
            </Box>
          );
        })}
      </Box>
    );
  } else {
    return (
      <Box display="flex" rGap={2} width={width}>
        {new Array(separator).fill(0).map((_, i) => {
          const percentPerSeperator = 100 / separator;
          const startPercent = percentPerSeperator * i;
          const realPercent =
            percent - startPercent > percentPerSeperator
              ? 100
              : ((percent - startPercent) / percentPerSeperator) * 100;
          console.log(realPercent);
          return (
            <Box width={'100%'}>
              <WeightBar percent={realPercent} height={height} />
            </Box>
          );
        })}
      </Box>
    );
  }
};
export default WeightBar;
