import React from 'react';
import FileInputComponent from './FileInputComponent';
import SettingsComponent from './SettingsComponent';
import TabList from './TabList';

const Toolbar = () => {
  return (
    <div className="grid grid-cols-12 bg-slate-200 border-b border-slate-800 py-0.5">
      <div className="flex flex-row items-start col-start-1 gap-1">
        <FileInputComponent/>
        <SettingsComponent />
      </div>
      <TabList />
    </div>
  );
};

export default Toolbar;
