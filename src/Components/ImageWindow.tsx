import React from 'react';

type ImageWindowProps = {
  containerRef: React.RefObject<HTMLDivElement> | null;
  file: File;
  width: number;
  scale: number;
  doublePage: boolean;
};
const ImageWindow = (props: ImageWindowProps) => {
  const { containerRef, file } = props;

  return (
    <div ref={containerRef} className={`flex flex-col flex-1 overflow-y-auto items-center bg-slate-400`} id="window">
      <img src={file.webkitRelativePath} alt="file" className="max-w-full max-h-full" />
    </div>
  );
};

export default ImageWindow;
