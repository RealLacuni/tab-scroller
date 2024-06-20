import React, { useContext, useEffect } from 'react';
import { FilesContext } from '../FilesContext';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { AutoScrollContext } from '../AutoscrollContext';

const TabList = () => {
  const {openFiles, currentFile, updateCurrentFile, updateOpenFiles} = useContext(FilesContext);
  const {setIsPlaying} = useContext(AutoScrollContext);
  const [openIndex, setOpenIndex] = React.useState<number>(currentFile ? openFiles.indexOf(currentFile as File) : 0);

  useEffect(() => {
    if (currentFile) {
      setOpenIndex(openFiles.indexOf(currentFile as File));
    }
  }, [currentFile]);

  if (openFiles.length === 0) {
    return <></>
  }

  const setActiveTab = (idx: number) => {
    updateCurrentFile(openFiles[idx]);
    setOpenIndex(idx);
  };

  const getFileName = (fName: string) => {
    try {
      return fName.split('.')[0];
    } catch {
      return fName;
    }
  };

  const closeTab = (e: React.MouseEvent<SVGSVGElement>, idx: number) => {
      e.stopPropagation();
      const newOpenFiles = [...openFiles];
      newOpenFiles.splice(idx, 1);
      updateOpenFiles(newOpenFiles);
      
      if (idx === openIndex) {
        setIsPlaying(false);
        if (newOpenFiles.length > 0) {
          updateCurrentFile(newOpenFiles[idx === 0 ? 0 : idx - 1]);
        } else {
          updateCurrentFile(null);
          console.log('No openFiles left, set current file to null');
        }
      }
    }

  return (
    <div className="flex flex-row gap-[0.075rem] overflow-x-clip">
      {openFiles.map((file, idx) => (
        <div
          key={idx}
          className={`relative px-2.5 py-1 flex items-center cursor-pointer rounded-tl-md rounded-tr-md text-xs whitespace-nowrap align-bottom border-slate-400 ${
            idx === openIndex
              ? ' bg-slate-400 text-slate-900 -mt-0.5 transition border'
              : ' bg-slate-300 text-slate-700 border hover:bg-slate-200 hover:text-slate-900 transition'
          }`}
          onClick={() => setActiveTab(idx)}
        >
          <p>{file.name.length > 12 ? getFileName(file.name).slice(0, 12) + '...' : getFileName(file.name)}</p>

          <XMarkIcon
            className="w-3.5 h-3.5 absolute top-0 right-0 text-slate-900 cursor-pointer hover:text-white"
            onClick={(e) => closeTab(e, idx)}
          />
        </div>
      ))}
      <div className="h-8 w-[0.5px] bg-slate-400 self-center"></div>
    </div>
  );
};

export default TabList;
