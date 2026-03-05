import { useEffect, useRef, useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';

import { VideoPlayButton } from '../components/Video/VideoPlayButton';
import { VideoFrame } from '../components/Video/VideoFrame';
import type { VideoClickHandlerTypes } from '../types';

export const Route = createFileRoute('/video')({
  component: RouteComponent,
});

function RouteComponent() {
  const [playVideo, setPlayVideo] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const timeoutId = useRef<number>(0);

  const onClickHandler = (type: VideoClickHandlerTypes) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }

    if (type === 'open') {
      setPlayVideo(true);
    }
    if (type === 'close') {
      const buttonElement = buttonRef.current;
      buttonElement?.classList.remove('animate-button-down');
      timeoutId.current = setTimeout(() => {
        setPlayVideo(false);
      }, 500);
    }
  };

  useEffect(() => {
    if (playVideo) {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      const buttonElement = buttonRef.current;
      timeoutId.current = setTimeout(() => {
        buttonElement?.classList.add('animate-button-down');
      }, 500);
    }
    return () => {
      clearTimeout(timeoutId.current);
    };
  }, [playVideo]);

  return (
    <div className="page-container">
      <h1>Welcome to awsome Video!</h1>
      {!playVideo && <VideoPlayButton onClickHandler={onClickHandler} />}
      {playVideo && (
        <VideoFrame buttonRef={buttonRef} onClickHandler={onClickHandler} />
      )}
    </div>
  );
}
