import React, { useEffect, useState } from 'react';

type TextWindowProps = {
  containerRef: React.RefObject<HTMLDivElement> | null;
  file: File;
  width: number;
  scale: number;
  doublePage: boolean;
};

const TextWindow = (props: TextWindowProps) => {
  const { containerRef, file, width, doublePage, scale } = props;
  const [content, setContent] = useState<string>('');
  
  useEffect(() => {
    const reader = new FileReader();
    reader.onload = () => {
      setContent(reader.result as string);
    };
    reader.readAsText(file);
  }, [file]);

  useEffect(() => {
    const container = containerRef?.current;
    if (container) {
      container.style.width = `${20*width * scale }px`;
    }
  }, [width, scale, containerRef]);


  return (
    <div className={`flex flex-col flex-1 overflow-y-auto items-center bg-slate-400 min-w-full`} id="window" ref={containerRef}>
      <div className={` grid bg-white px-2 ${doublePage ? 'grid-cols-2 gap-4' : 'grid-cols-1'}`} ref={containerRef}>
        {doublePage ? (
          <>
            <div className="break-words whitespace-pre-wrap">{content.slice(0, content.length / 2)}</div>
            <div className="break-words whitespace-pre-wrap">{content.slice(content.length / 2)}</div>
          </>
        ) : (
          <div className="break-words whitespace-pre-wrap">{content}</div>
        )}
      </div>
    </div>
  );
};

export default TextWindow;
