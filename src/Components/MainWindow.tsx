import React, { useContext, useEffect } from 'react';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { FilesContext } from '../FilesContext';
import { SettingsContext } from '../SettingsContext';
import { AutoScrollContext } from '../AutoscrollContext';
import PDFWindow from './PDFWindow';
import ImageWindow from './ImageWindow';
import TextWindow from './TextWindow';

const MainWindow = () => {
  const file = useContext(FilesContext).currentFile;
  const { isPlaying, setIsPlaying, containerRef } = useContext(AutoScrollContext);
  const { scrollSpeed, width, scale, doublePage } = useContext(SettingsContext).settings;

  useEffect(() => {
    let animationFrameId: number | null = null;
    let lastTime: number = performance.now();

    function scrollPage() {
      if (!containerRef) return;
      const container = containerRef.current;
      if (!container) return;

      if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        setIsPlaying(false);
        return;
      }

      const currentTime = performance.now();
      const elapsedTime = currentTime - lastTime;

      if (elapsedTime > 100 - scrollSpeed) {
        container.scrollBy(0, 1);
        lastTime = currentTime;
      }
      animationFrameId = window.requestAnimationFrame(scrollPage);
    }

    function animateScroll() {
      if (!isPlaying) return;
      animationFrameId = window.requestAnimationFrame(scrollPage);
    }

    if (isPlaying) {
      animateScroll();
    } else if (animationFrameId !== null) {
      window.cancelAnimationFrame(animationFrameId);
    }

    return () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPlaying, setIsPlaying, scrollSpeed, containerRef]);

  //if .pdf return <PDFWindow />
  if (!file) {
    return (
      <div>
        <h1>No file selected</h1>
      </div>
    );
  } else if (file && file.type === 'application/pdf') {
    return <PDFWindow width={width} scale={scale} doublePage={doublePage} file={file} containerRef={containerRef} />;
  } else if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
    return <ImageWindow file={file} width={width} containerRef={containerRef} scale={scale} doublePage={doublePage} />;
  } else if (file && file.type === 'text/plain') {
    return <TextWindow file={file} width={width} containerRef={containerRef} scale={scale} doublePage={doublePage} />;
  } else {
    return (
      <div>
        <h1>File not supported</h1>
      </div>
    );
  }
};

export default MainWindow;
