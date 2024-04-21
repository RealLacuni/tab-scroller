import React from 'react';
import { SettingsContext } from '../SettingsContext';

type SliderProps = {
  minVal: number;
  maxVal: number;
  stepSize: number;
  fieldName: string;
};

const nameMap = new Map<string, string>([
  ['scale', 'Scale'],
  ['width', 'Width'],
  ['height', 'Height'],
  ['scrollSpeed', 'Speed'],
]);

const Slider = (props: SliderProps) => {
  const field = props.fieldName;
  const {settings, updateSettings } = React.useContext(SettingsContext);
  const [value, setValue] = React.useState<number>(settings[field as keyof typeof settings] as number);

  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
  };

  const propagateChanges = () =>  {
    updateSettings({ ...settings, [field]: value});
  };

  return (
    <div className={'flex flex-col items-start gap-2 rounded-lg'}>
      <label htmlFor="default-range" className=" text-xs leading-[8px]">
        {nameMap.get(field)}: {value}
      </label>
      <input
        type="range"
        min={props.minVal}
        max={props.maxVal}
        step={props.stepSize}
        defaultValue={value}
        className={'w-full h-1.5 rounded-lg cursor-pointer accent-indigo-600'}
        onChange={handleFieldChange}
        onMouseUp={propagateChanges}
      />
    </div>
  );
};

export default Slider;
