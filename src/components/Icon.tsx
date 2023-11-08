import React from 'react';
import Box, { BoxProps } from './Box';
export type IconProps = {
  icon: React.ReactNode;
} & BoxProps;

function Icon(props: IconProps) {
  const { icon, ...rest } = props;

  return (
    <Box {...rest} display="flex" justifyContent="center" alignItems="center ">
      {icon}
    </Box>
  );
}

export default Icon;
