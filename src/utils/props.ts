import { WithRatioProps } from '../hooks/useReponsiveProps';

const nonStylePropKeys = new Set<string>([
  'rWidth',
  'rMinWidth',
  'rMaxWidth',
  'rHeight',
  'rMinHeight',
  'rMaxHeight',
  'rTop',
  'rLeft',
  'rRight',
  'rBottom',
  'rMargin',
  'rPadding',
  'rBorder',
  'rBorderRadius',
  'rFontSize',
  'rLineHeight',
  'rLetterSpacing',
  'rGap',
  'rGridGap',
  'rColumnGap',
  'rRowGap',
  'rGridTemplateColumns',
  'rGridTemplateRows',
  'rGridAutoRows',
  'rBorderSpacing',
  'rBoderSpacing',
  'style',
  'hover',
]);

export const omitResponsiveProps = <T extends object>(
  props: T
): Omit<T, keyof WithRatioProps | 'style' | 'hover'> => {
  const next: Record<string, unknown> = {};
  const entries = props as Record<string, unknown>;
  for (const key of Object.keys(entries)) {
    if (!nonStylePropKeys.has(key)) {
      next[key] = entries[key];
    }
  }
  return next as Omit<T, keyof WithRatioProps | 'style' | 'hover'>;
};
