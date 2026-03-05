import { Link } from '@tanstack/react-router';
import photo from '../assets/hallway.svg';
import gps from '../assets/gps.svg';
import movie from '../assets/movie.svg';
import logo from '../assets/qvack_logo.png';

export const HeaderMenu = () => {
  return (
    <header className="menu-header">
      <img src={logo} alt="qvack logo" className="logo" />
      <nav className="nav-container">
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
      </nav>
    </header>
  );
};
