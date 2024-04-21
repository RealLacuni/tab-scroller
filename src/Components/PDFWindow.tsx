import React, { useContext, useEffect } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { FilesContext } from '../FilesContext';
import { SettingsContext } from '../SettingsContext';
import { AutoScrollContext } from '../AutoscrollContext';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PDFWindow = () => {
  const [numPages, setNumPages] = React.useState(0);
  const file = useContext(FilesContext).currentFile;
  const { isPlaying, setIsPlaying, containerRef } = useContext(AutoScrollContext);
  const { scrollSpeed, width, height } = useContext(SettingsContext).settings;

  console.log(scrollSpeed);
  
  useEffect(() => {
    let animationFrameId: number | null = null;
  
    function scrollPage(speed: number, lastTime: number) {
      if (!containerRef) return;
      const container = containerRef.current;
      if (!container) return;
  
      if (container.scrollHeight - container.scrollTop <= container.clientHeight) {
        setIsPlaying(false);
        return;
      }
  
      const currentTime = performance.now();
      const elapsedTime = currentTime - lastTime;
  
      if (elapsedTime > speed) {
        const prevPosition = container.scrollTop;
        container.scrollBy(0, 1);
        const newPosition = container.scrollTop;
        // manual way of stopping the scroll at the bottom of the file
        if (prevPosition === newPosition) {
          setIsPlaying(false);
          return;
        }
        scrollPage(speed, currentTime);
      } else {
        animationFrameId = window.requestAnimationFrame(() => scrollPage(speed, lastTime));
      }
    }
  
    function animateScroll(speed: number, lastTime: number) {
      if (!isPlaying) return;
  
      animationFrameId = window.requestAnimationFrame(() => {
        scrollPage(speed, lastTime);
      });
    }
  
    if (isPlaying) {
      animateScroll(scrollSpeed, performance.now());
    } else if (animationFrameId !== null) {
      window.cancelAnimationFrame(animationFrameId);
    }
  
    return () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPlaying, scrollSpeed, setIsPlaying]);

  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const extractFileInfo = (pdf: any) => {
    setNumPages(pdf._pdfInfo.numPages);
  };

  if (!file) {
    return (
      <div className="flex flex-col flex-1 bg-slate-50 ">
        <div className="flex items-center justify-center flex-1">
          <div className="text-2xl text-ebony-500">No file selected</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 overflow-y-auto" id="window" ref={containerRef}>
      <Document
        file={file}
        onLoadSuccess={extractFileInfo}
        // styling for 2-page layout like in Adobe Reader or Word, without overlapping pages
        className={'grid grid-cols-2 gap-4'}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={1} width={width} height={height} />
        ))}
      </Document>
    </div>
  );
};

export default PDFWindow;
