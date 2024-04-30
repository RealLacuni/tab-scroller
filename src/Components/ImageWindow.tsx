import React, { useEffect, useState } from 'react';

type ImageWindowProps = {
  containerRef: React.RefObject<HTMLDivElement> | null;
  file: File;
  width: number;
  scale: number;
  doublePage: boolean;
};
const ImageWindow = (props: ImageWindowProps) => {
  const { containerRef, file } = props;
  const [imageDataURL, setImageDataURL] = useState<string | null>(null);
  
  useEffect(() => {
    console.log('in use effect');
    
    const readFile = async () => {
      window.Main.readImageFile(file.path).then((data) => {
        setImageDataURL(data);
      });
    }

    readFile();
  
  }, [file]);


  return (
    <div ref={containerRef} className={`flex flex-col flex-1 overflow-y-auto items-center bg-slate-400`} id="window">
      {imageDataURL ? <img src={`data:image/jpg;base64,${imageDataURL}`} alt="file" className="max-w-full max-h-full" /> : <h1>Loading...</h1>}
    </div>
  );
};

export default ImageWindow;
