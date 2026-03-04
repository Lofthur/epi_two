import { Link } from '@tanstack/react-router';
import photo from '../assets/hallway.svg';
import gps from '../assets/gps.svg';
import movie from '../assets/movie.svg';

export const HeaderMenu = () => {
  return (
    <header className="menu-header">
      <Link
        to="/"
        className="outline-button"
        activeProps={{
          className: 'link-button-active',
        }}
      >
        <img src={photo} alt="photo icon" />
      </Link>
      <Link
        to="/gps"
        className="outline-button"
        activeProps={{
          className: 'link-button-active',
        }}
      >
        <img src={gps} alt="photo icon" />
      </Link>
      <Link
        to="/video"
        className="outline-button"
        activeProps={{
          className: 'link-button-active',
        }}
      >
        <img src={movie} alt="photo icon" />
      </Link>
    </header>
  );
};
