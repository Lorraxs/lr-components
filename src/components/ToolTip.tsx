import React, { useState } from 'react';

export type ToolTipProps = {
  delay?: number;
  direction?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  content: React.ReactNode;
};

function ToolTip(props: ToolTipProps) {
  const [active, setActive] = useState(false);

  const showTip = () => {
    setActive(true);
  };

  const hideTip = () => {
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      // When to show the tooltip
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {active && (
        <div className={`Tooltip-Tip ${props.direction || 'top'}`}>
          {/* Content */}
          {props.content}
        </div>
      )}
    </div>
  );
}

export default ToolTip;
