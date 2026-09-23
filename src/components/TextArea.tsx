import React from 'react';
import useReponsiveProps, { WithRatioProps } from '../hooks/useReponsiveProps';
import { omitResponsiveProps } from '../utils/props';

const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & WithRatioProps
>((props, ref) => {
  const { className, style, ...rest } = props;
  const ratioStyle = useReponsiveProps(props);
  const restProps = omitResponsiveProps(rest);

  return (
    <textarea
      ref={ref}
      style={{ ...style, ...ratioStyle }}
      className={className}
      {...restProps}
    />
  );
});

export default TextArea;
