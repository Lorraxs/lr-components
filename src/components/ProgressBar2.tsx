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
  const resolvedWidth = width ?? '100%';
  const containerProps =
    typeof resolvedWidth === 'number'
      ? { rWidth: resolvedWidth }
      : { width: resolvedWidth };

  return (
    <Box display="flex" rGap={2} {...containerProps}>
      {new Array(separator).fill(0).map((_, i) => {
        const percentPerSeparator = 100 / separator;
        const startPercent = percentPerSeparator * i;
        const realPercent =
          percent - startPercent > percentPerSeparator
            ? 100
            : ((percent - startPercent) / percentPerSeparator) * 100;
        return (
          <Box width="100%" key={`segment-${i}`}>
            <WeightBar percent={realPercent} height={height} />
          </Box>
        );
      })}
    </Box>
  );
};
export default WeightBar;
