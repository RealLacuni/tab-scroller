import React, { useContext } from 'react';
import { FilesContext } from '../FilesContext';
import { XMarkIcon } from '@heroicons/react/24/outline';
const TabList = () => {
  const tabs = useContext(FilesContext).openFiles;
  const currentFile = useContext(FilesContext).currentFile;
  const [openIndex, setOpenIndex] = React.useState<number>(currentFile ? tabs.indexOf(currentFile as File) : 0);
  const setCurrentFile = useContext(FilesContext).setCurrentFile;
  const setFiles = useContext(FilesContext).setFiles;

  console.log("tablist: ", tabs);
  
  if (tabs.length === 0) {
    return <p className="self-bottom py-1"> &larr; Open a file and start playing! </p>;
  }

  const setActiveTab = (idx: number) => {
    setCurrentFile(tabs[idx]);
    setOpenIndex(idx);
  };

  const closeTab = (e: React.MouseEvent<SVGSVGElement>) => {
    // get closed tab through event target
    const tab = e.currentTarget.parentElement;
    if (!tab) return;
    const idx = Array.from(tab.parentElement?.children as HTMLCollection).indexOf(tab);

    const newTabs = tabs.filter((_, i) => i !== idx);
    setFiles(newTabs);
    if (idx === openIndex) {
      const nextIndex = Math.max(idx - 1, 0); // Select the next lowest index or 0 if no lower index
      setActiveTab(nextIndex);
    }
  };

  return (
    <div className="flex flex-row gap-[0.075rem] ">
      {tabs.map((file, idx) => (
        <div
          key={idx}
          className={`relative px-2.5 py-1 flex items-center cursor-pointer rounded-tl-md rounded-tr-md text-xs whitespace-nowrap align-bottom border-slate-400 ${
            idx === openIndex
              ? ' bg-slate-400 text-slate-900 -mt-0.5 transition border'
              : ' bg-slate-300 text-slate-700 border hover:bg-slate-200 hover:text-slate-900 transition'
          }`}
          onClick={() => setActiveTab(idx)}
        >
          <p>{file.name.length > 12 ? file.name.slice(0, 24) + '...' : file.name}</p>

          <XMarkIcon
            className="w-3.5 h-3.5 absolute top-0 right-0 text-slate-900 cursor-pointer hover:text-white"
            onClick={closeTab}
          />
        </div>
      ))}
    </div>
  );
};

export default TabList;
