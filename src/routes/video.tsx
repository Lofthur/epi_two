import { useEffect, useRef, useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';

import posterImage from '../assets/carpenter_brut_poster.png';
import playIcon from '../assets/red_play_button.png';
import closeIcon from '../assets/close.svg';

export const Route = createFileRoute('/video')({
  component: RouteComponent,
});

function RouteComponent() {
  const [playVideo, setPlayVideo] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const timeoutId = useRef<number>(0);

  const onClickHandler = (type: 'open' | 'close') => {
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
      {!playVideo && (
        <div className="video-container box-shadow">
          <button
            className="video-cover"
            onClick={() => onClickHandler('open')}
          >
            <img
              className="video-poster"
              src={posterImage}
              alt="Carpenter brut poster image"
            />
            <img
              className="video-play-icon"
              src={playIcon}
              alt="play button icon"
            />
          </button>
        </div>
      )}
      {playVideo && (
        <div className="video-frame">
          <iframe
            className="video-frame box-shadow"
            src="https://www.youtube.com/embed/9Eqf973nbAQ?si=G8shpv-AO6pJuyHd&amp;controls=0&autoplay=1&frameborder=0"
            title="YouTube video player"
            allow="autoplay; encrypted-media;"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="video-frame-background" />
          <button
            ref={buttonRef}
            className="outline-button close-button"
            onClick={() => onClickHandler('close')}
          >
            <img src={closeIcon} alt="close icon" />
          </button>
        </div>
      )}
    </div>
  );
}
