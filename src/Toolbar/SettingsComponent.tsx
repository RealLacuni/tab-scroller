import React from 'react'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

const SettingsComponent = () => {

    const handleClick = () => {
        //TODO: settings modal or dialog
        console.log('settings clicked');
      };
      return (
        <div className="">
          <AdjustmentsHorizontalIcon className="w-8 h-8 cursor-pointer text-slate-600 bg-slate-300 rounded-sm p-0.5 hover:text-white" onClick={handleClick} />
        </div>
      );
}

export default SettingsComponent