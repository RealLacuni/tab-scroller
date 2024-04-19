import React from 'react';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { SettingsContext } from '../SettingsContext';
import Slider from '../Components/Slider';


const SettingsComponent = () => {
  const {settings, updateSettings} = React.useContext(SettingsContext);
  const {pageLayout} = settings;

  const [isOpen, setIsOpen] = React.useState(false);

  const closeMenuTimeout = () => {
    setTimeout(() => {
      if (isOpen) setIsOpen(false);
    }, 10000);
  };

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
        <div className="absolute top-10 -left-2 bg-slate-300 min-h-48 min-w-36 border-2 border-slate-400 p-2 rounded-sm drop-shadow-lg ">
          {/* div take up full height */}
          <div className="flex flex-col gap-4">
            <Slider minVal={0} maxVal={4} stepSize={0.1} fieldName="scale" />
            <Slider minVal={0} maxVal={1600} stepSize={50} fieldName="width" />
            <Slider minVal={0} maxVal={1600} stepSize={50} fieldName="height" />

            <div className='flex flex-row'>
              <label htmlFor="page-layout" className="text-xs leading-3">
                Page Layout
              </label>
              <select
                id="page-layout"
                name="page-layout"
                className="rounded-lg cursor-pointer text-sm bg-slate-200"
                value={pageLayout}
                onChange={(e) => updateSettings({ ...settings, pageLayout: e.target.value as 'single' | 'double'})}
              >
                <option value="single">Single</option>
                <option value="double">Double</option>
              </select>
              </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default SettingsComponent;
