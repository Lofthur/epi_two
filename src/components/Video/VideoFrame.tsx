import closeIcon from '../../assets/close.svg';
import type { VideoClickHandlerTypes } from '../../types';

type VideoFrameProps = {
  buttonRef: React.RefObject<HTMLButtonElement | null>;
  onClickHandler: (type: VideoClickHandlerTypes) => void;
};

export const VideoFrame = ({ buttonRef, onClickHandler }: VideoFrameProps) => {
  return (
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
  );
};
