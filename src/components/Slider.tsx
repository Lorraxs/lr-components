import React from 'react';
import styled from 'styled-components';
import ReactSlider from 'react-slider';

/* interface HTMLPropsWithRefCallback<T> extends HTMLProps<T> {
  ref: RefCallback<T>;
} */

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledThumb = styled.div`
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  background-color: #fff;
  color: #fff;
  border-radius: 50%;
  cursor: grab;
  border: none;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

const StyledTrack = styled.div<{ index: number }>`
  top: 0;
  bottom: 0;
  background: #ddd;
  border-radius: 999px;
`;

interface SliderProps {
  trackHeight?: number;
  value?: number;
  onChange?: (value: number) => void;
  min?: number;
  max?: number;
}

function Slider(props: SliderProps) {
  const { value, onChange, min, max } = props;
  return (
    <StyledSlider
      className="horizontal-slider"
      renderTrack={(props, state) => (
        <StyledTrack {...props} index={state.index} />
      )}
      renderThumb={(props, _state) => <StyledThumb {...props}></StyledThumb>}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      step={min !== undefined && max !== undefined ? (max - min) / 100 : 1}
    />
  );
}

export default Slider;
