import React from "react";
import Box, { BoxProps } from "./Box";
import styled from "styled-components";
import Text from "./Text";
import Icon from "./Icon";

export type ProgressBarProps = {
  value?: number;
  max?: number;
  min?: number;
  trailColor?: string;
  pathColor?: string;
  showValue?: boolean;
  pathHeight?: number;
  icon?: React.ReactNode;
} & BoxProps;

const Path = styled(Box)`
  clip-path: polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0% 100%);
`;

function ProgressBar(props: ProgressBarProps) {
  const { value = 30, max = 100, min = 0, trailColor = "var(---primary-color)", pathColor = "rgba(0, 0, 0, 0.5)", showValue = false, pathHeight = 10, icon, ...rest } = props;
  return (
    <Box {...rest} position="relative" display="flex" rGap={4}>
      {icon && (
        <Icon
          icon={icon}
          rWidth={30}
          rHeight={30}
          backgroundColor="rgba(0, 0, 0, 0.5)"
          clipPath="polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))"
          color="var(---primary-color)"
        />
      )}
      <Box width={"100%"}>
        {showValue && (
          <Box display="flex" justifyContent="space-between">
            <Text rFontSize={12} fontFamily="Chakra Petch" color="var(---primary-color)">
              [{value.toLocaleString()}]
            </Text>
            <Text rFontSize={12} fontFamily="Chakra Petch">
              [{max.toLocaleString()}]
            </Text>
          </Box>
        )}
        <Path rHeight={pathHeight} backgroundColor={pathColor} position="relative">
          <Path rHeight={pathHeight} backgroundColor={trailColor} position="absolute" width={(value / (max - min)) * 100 + "%"} top={0} left={0}></Path>
        </Path>
      </Box>
    </Box>
  );
}

export default ProgressBar;
