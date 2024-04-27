import React, { useContext } from 'react';

import { PlayIcon, PauseIcon, BarsArrowUpIcon } from '@heroicons/react/24/outline';
import { AutoScrollContext } from '../AutoscrollContext';
import Slider from '../Components/Slider';

const AutoScrollComponent = () => {
  const { isPlaying, setIsPlaying, containerRef } = useContext(AutoScrollContext);
  const [showToolTip, setShowToolTip] = React.useState(false);

  const playFunction = () => {
    setIsPlaying(!isPlaying);
  };
  const backToTopFunction = () => {
    if (!containerRef) return;
    const container = containerRef.current;
    if (!container) return;
    container.scrollTo(0, 0);
  };
  let timeoutId = null as NodeJS.Timeout | null;

  const toolTipEnter = () => {
    timeoutId = setTimeout(() => {
      setShowToolTip(true);
    }, 1000);
  }

  const toolTipLeave = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    setShowToolTip(false);
  }

  return (
    <div className="flex flex-row items-center gap-1 text-slate-600">
      <Slider minVal={1} maxVal={100} stepSize={1} fieldName="scrollSpeed" />
      {!isPlaying ? (
        <PlayIcon
          className="w-6 h-6 cursor-pointer border border-slate-400 text-slate-600 rounded-lg p-0.5 hover:text-white"
          onClick={playFunction}
        />
      ) : (
        <PauseIcon
          className="w-6 h-6 cursor-pointer border border-slate-400 text-slate-600  rounded-lg p-0.5 hover:text-white"
          onClick={playFunction}
        />
      )}
      <div>

      <BarsArrowUpIcon
        className="w-6 h-6 cursor-pointer border border-slate-400 text-slate-600 rounded-lg p-0.5 hover:text-white"
        onClick={backToTopFunction}
        onMouseEnter={toolTipEnter}
        onMouseLeave={toolTipLeave}
        />
        {showToolTip && <p className="absolute text-xs bg-slate-300 mt-2 rounded-md p-1">Back to top</p>}
        </div>
    </div>
  );
};

export default AutoScrollComponent;
