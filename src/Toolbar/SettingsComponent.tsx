import React from 'react';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import Slider from '../Components/Slider';
import { SettingsContextProvider } from '../SettingsContext';

const SettingsComponent = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClick = () => {
    //TODO: settings modal or dialog
    setIsOpen(!isOpen);
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
            <SettingsContextProvider>
            <Slider minVal={0} maxVal={100} stepSize={1} />
            </SettingsContextProvider>
            </div>
        </div>
      )}
    </div>
  );
};

export default SettingsComponent;
