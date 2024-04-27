import React from 'react';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { SettingsContext } from '../SettingsContext';
import Slider from '../Components/Slider';

const SettingsComponent = () => {
  const { settings, updateSettings } = React.useContext(SettingsContext);
  const { doublePage } = settings;

  const [isOpen, setIsOpen] = React.useState(false);

  const closeMenuTimeout = () => {
    setTimeout(() => {
      if (isOpen) setIsOpen(false);
    }, 1000000);
  };

  const handleClick = () => {
    //TODO: settings modal or dialog
    setIsOpen(!isOpen);
    closeMenuTimeout();
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
        <div className="absolute top-10 -right-2 bg-slate-300 min-h-48 min-w-36 border-2 border-slate-400 p-2 rounded-sm drop-shadow-lg z-30 flex flex-col gap-4 justify-around">
          {/* div take up full height */}
            <Slider minVal={0} maxVal={2} stepSize={0.1} fieldName="scale" />
            <Slider minVal={0} maxVal={100} stepSize={1} fieldName="width" />

            <div className="flex flex-row pb-1 items-center">
              <label htmlFor="page-layout" className="text-xs leading-3">
                Double Page 
              </label>
              <input
                type="checkbox"
                id="page-layout"
                checked={doublePage}
                className='w-4 h-4 border border-slate-400 rounded-sm cursor-pointer ml-2 bg-pink-200'
                onChange={(e) => {
                  updateSettings({ ...settings, doublePage: e.target.checked });
                }}
              />
            </div>
        </div>
      )}
    </div>
  );
};

export default SettingsComponent;
