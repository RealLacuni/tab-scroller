import React from 'react';
import { SettingsContext } from '../SettingsContext';

type SliderProps = {
  minVal: number;
  maxVal: number;
  stepSize: number;
};
const Slider = (props: SliderProps) => {
  const { settings, updateSettings } = React.useContext(SettingsContext);
  const [speed, setSpeed] = React.useState(settings.scrollSpeed);

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(parseInt(e.target.value));
  };

  const propagateChanges = () => {
    updateSettings({ ...settings, scrollSpeed: speed });
  };

  return (
    <div className={'flex flex-col items-start gap-2 rounded-lg text-slate-600'}>
      <label htmlFor="default-range" className=" text-xs leading-[8px]">
        Speed: {speed ? speed : 'OFF'}
      </label>
      <input
        type="range"
        min={props.minVal}
        max={props.maxVal}
        step={props.stepSize}
        defaultValue={speed}
        className={'w-full h-1.5 rounded-lg cursor-pointer accent-indigo-600'}
        onChange={handleSpeedChange}
        onMouseUp={propagateChanges}
      />
    </div>
  );
};

export default Slider;
