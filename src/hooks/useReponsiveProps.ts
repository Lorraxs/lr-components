import * as CSS from 'csstype';
import useWindowSize from './useWindowSize';

export type WithRatioProps = {
  rWidth?: number;
  rHeight?: number;
  rTop?: number;
  rLeft?: number;
  rRight?: number;
  rBottom?: number;
  rMargin?: number | number[];
  rPadding?: number | number[];
  rBorder?: number | number[];
  rBorderRadius?: number | number[];
  rFontSize?: number;
  rLineHeight?: number;
  rLetterSpacing?: number;
  rGap?: number;
  rGridGap?: number;
  rColumnGap?: number;
  rRowGap?: number;
  rGridTemplateColumns?: [number, number];
  rGridTemplateRows?: [number, number];
  rGridAutoRows?: number;
};

const useReponsiveProps = (props: WithRatioProps): CSS.Properties => {
  const { ratioWidth } = useWindowSize();
  const returnProps: CSS.Properties = {};

  if (props.rWidth !== undefined) {
    returnProps.width = props.rWidth * ratioWidth + 'px';
  }
  if (props.rHeight !== undefined) {
    returnProps.height = props.rHeight * ratioWidth + 'px';
  }
  if (props.rTop !== undefined) {
    returnProps.top = props.rTop * ratioWidth + 'px';
  }
  if (props.rLeft !== undefined) {
    returnProps.left = props.rLeft * ratioWidth + 'px';
  }
  if (props.rRight !== undefined) {
    returnProps.right = props.rRight * ratioWidth + 'px';
  }
  if (props.rBottom !== undefined) {
    returnProps.bottom = props.rBottom * ratioWidth + 'px';
  }
  if (props.rMargin !== undefined) {
    if (typeof props.rMargin === 'number') {
      returnProps.margin = props.rMargin * ratioWidth + 'px';
    } else {
      returnProps.margin = props.rMargin
        .map(margin => margin * ratioWidth + 'px')
        .join(' ');
    }
  }
  if (props.rPadding) {
    if (typeof props.rPadding === 'number') {
      returnProps.padding = props.rPadding * ratioWidth + 'px';
    } else {
      returnProps.padding = props.rPadding
        .map(padding => padding * ratioWidth + 'px')
        .join(' ');
    }
  }
  if (props.rBorder) {
    if (typeof props.rBorder === 'number') {
      returnProps.border = props.rBorder * ratioWidth + 'px';
    } else {
      returnProps.border = props.rBorder
        .map(border => border * ratioWidth + 'px')
        .join(' ');
    }
  }
  /* if (props.rBorderRadius !== undefined) {
    returnProps.borderRadius = props.rBorderRadius * ratioWidth + "px";
  } */
  if (props.rBorderRadius !== undefined) {
    if (typeof props.rBorderRadius === 'number') {
      returnProps.borderRadius = props.rBorderRadius * ratioWidth + 'px';
    } else {
      returnProps.borderRadius = props.rBorderRadius
        .map(borderRadius => borderRadius * ratioWidth + 'px')
        .join(' ');
    }
  }
  if (props.rFontSize !== undefined) {
    returnProps.fontSize = props.rFontSize * ratioWidth + 'px';
  }
  if (props.rLineHeight !== undefined) {
    returnProps.lineHeight = props.rLineHeight * ratioWidth + 'px';
  }
  if (props.rLetterSpacing !== undefined) {
    returnProps.letterSpacing = props.rLetterSpacing * ratioWidth + 'px';
  }
  if (props.rGap !== undefined) {
    returnProps.gap = props.rGap * ratioWidth + 'px';
  }
  if (props.rGridGap !== undefined) {
    returnProps.columnGap = props.rGridGap * ratioWidth + 'px';
    returnProps.rowGap = props.rGridGap * ratioWidth + 'px';
  }
  if (props.rColumnGap !== undefined) {
    returnProps.columnGap = props.rColumnGap * ratioWidth + 'px';
  }
  if (props.rRowGap !== undefined) {
    returnProps.rowGap = props.rRowGap * ratioWidth + 'px';
  }
  if (props.rGridTemplateColumns !== undefined) {
    returnProps.gridTemplateColumns = `repeat(${
      props.rGridTemplateColumns[0]
    }, ${props.rGridTemplateColumns[1] * ratioWidth}px)`;
  }
  if (props.rGridTemplateRows !== undefined) {
    returnProps.gridTemplateRows = `repeat(${
      props.rGridTemplateRows[0]
    }, ${props.rGridTemplateRows[1] * ratioWidth}px)`;
  }
  if (props.rGridAutoRows !== undefined) {
    returnProps.gridAutoRows = props.rGridAutoRows * ratioWidth + 'px';
  }

  return returnProps;
};

export default useReponsiveProps;
