import posterImage from '../../assets/carpenter_brut_poster.png';
import playIcon from '../../assets/red_play_button.png';
import type { VideoClickHandlerTypes } from '../../types';

type VideoPlayButtonProps = {
  onClickHandler: (type: VideoClickHandlerTypes) => void;
};

export const VideoPlayButton = ({ onClickHandler }: VideoPlayButtonProps) => {
  return (
    <div className="video-container box-shadow">
      <button className="video-cover" onClick={() => onClickHandler('open')}>
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
  );
};
