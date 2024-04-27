import React from 'react';
import FileInputComponent from './FileInputComponent';
import SettingsComponent from './SettingsComponent';
import AutoScrollComponent from './AutoScrollComponent';
import TabList from './TabList';

const Toolbar = () => {
  return (
    <div className="flex flex-row bg-slate-200 border-b border-slate-800 gap-2 px-2 pt-1.5 h-12 items-center">
      {/* <div className="flex flex-row items-end col-start-1 gap-2 pb-0.5 w-20">
      </div> */}
      <FileInputComponent />
      <div className=" h-8 w-[0.5px] bg-slate-400 self-center"></div>
      <TabList />

      <AutoScrollComponent />
      <div className="ml-auto">
        <SettingsComponent />
      </div>
    </div>
  );
};

export default Toolbar;
