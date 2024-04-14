import React from 'react';
import { AutoScrollContext } from '../AutoscrollContext';

type SliderProps = {
  minVal: number;
  maxVal: number;
  stepSize: number;
};
const Slider = (props: SliderProps) => {
  const { speed, handleSpeedChange } = React.useContext(AutoScrollContext);

  return (
    <div
      className={
        'flex flex-col items-start align-middle gap-1 border-2 px-1.5 py-2 rounded-lg border-slate-400 text-slate-600 bg-slate-300'
      }
    >
      <input
        type="range"
        min={props.minVal}
        max={props.maxVal}
        step={props.stepSize}
        defaultValue={speed}
        className={'w-full h-1.5 rounded-lg cursor-pointer accent-indigo-600'}
        onChange={handleSpeedChange}
      />
      <label htmlFor="default-range" className="self-end text-xs leading-[12px]">
        Speed: {speed ? speed : 'OFF'}
      </label>
    </div>
  );
};

export default Slider;
