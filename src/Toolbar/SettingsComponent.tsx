import React from 'react';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { SettingsContext } from '../SettingsContext';


const SettingsComponent = () => {
  const {settings, updateSettings} = React.useContext(SettingsContext);
  const {scale, width, height, scrollSpeed, pageLayout} = settings;

  const [isOpen, setIsOpen] = React.useState(false);

  const closeMenuTimeout = () => {
    setTimeout(() => {
      if (isOpen) setIsOpen(false);
    }, 10000);
  }


  const handleClick = () => {
    //TODO: settings modal or dialog
    setIsOpen(!isOpen);
    closeMenuTimeout();
    console.log('settings clicked');
  };

  return (
    <div className="relative">
      <AdjustmentsHorizontalIcon
        className={
          'w-8 h-8 border border-slate-400 cursor-pointer text-slate-600 bg-slate-300 rounded-sm p-0.5 hover:text-white' +
          (isOpen ? ' bg-slate-400' : '')
        }
        onClick={handleClick}
      />

      {/* popout small settings box anchored to the bottom left below the button */}
      {isOpen && (
        <div className="absolute top-8 -left-2 bg-slate-400 min-h-48 min-w-36 border border-slate-400 p-2 rounded-sm">
          {/* div take up full height */}
          <div className="flex flex-col gap-2">
            <label htmlFor="scale" className="text-xs leading-[8px]">
              Scale: {scale}
            </label>
            <input
              type="range"
              min={0}
              max={200}
              step={1}
              defaultValue={scale}
              className="w-full h-1.5 rounded-lg cursor-pointer accent-indigo-600"
              onChange={(e) => updateSettings({...settings, scale: parseInt(e.target.value)})}
            />

            <label htmlFor="width" className="text-xs leading-[8px]">
              Width: {width}
            </label>
            <input
              type="range"
              min={0}
              max={200}
              step={1}
              defaultValue={width}
              className="w-full h-1.5 rounded-lg cursor-pointer accent-indigo-600"
              onChange={(e) => updateSettings({...settings, width: parseInt(e.target.value)})}
            />

            <label htmlFor="height" className="text-xs leading-[8px]">
              Height: {height}
            </label>
            <input
              type="range"
              min={0}
              max={200}
              step={1}
              defaultValue={height}
              className="w-full h-1.5 rounded-lg cursor-pointer accent-indigo-600"
              onChange={(e) => updateSettings({...settings, height: parseInt(e.target.value)})}
            />
            

          
            </div>
        </div>
      )}
    </div>
  );
};

export default SettingsComponent;
