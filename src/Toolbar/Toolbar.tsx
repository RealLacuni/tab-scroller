import React from 'react';
import FileInputComponent from './FileInputComponent';
import SettingsComponent from './SettingsComponent';
import TabList from './TabList';

const Toolbar = () => {
  return (
    <div className="flex flex-row bg-slate-200 border-b border-slate-800 gap-4 pt-2">
      <div className="flex flex-row items-start col-start-1 gap-2 pb-0.5 w-20">
        <SettingsComponent />
        <FileInputComponent />
        <AutoScrollComponent />
      </div>
      <TabList />
    </div>
  );
};

export default Toolbar;
