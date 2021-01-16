import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useRef, useEffect, useState } from "react"
import logo from "../assets/images/logo.png";
import { HeaderStyles } from "../styles/headerStyles";

const Header = ({ onClick, isOpen }) => {
  let $menuBtn = useRef(null);
  const [url, setUrl] = useState('');
  const pagesWithInvertedLogo = ['who-we-are', 'contact', 'references',];
  const [inverted, setInverted] = useState(false);

  useEffect(() => {
    setUrl(typeof window !== 'undefined' ? window.location.pathname : '');
    setInverted(pagesWithInvertedLogo.includes(url.replace(`/`, ``)));
  }, [pagesWithInvertedLogo, url])

  return (
    <HeaderStyles>
      <header className={ `page__header` }>
        <Link to='/'>
          <img className={inverted ? 'inverted' : ''} src={logo} alt='Tribe Events' />
        </Link>
        <button 
          className={`menu ${isOpen ? 'opened' : ''}`} 
          ref={$menuBtn} 
          onClick={onClick} 
          aria-label="Main Menu" 
          aria-expanded={isOpen}>
          <svg width="50" height="50" viewBox="0 0 100 100">
            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path className="line line2" d="M 20,50 H 80" />
            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
          </svg>
        </button>
      </header>
      <div className={`page__nav__wrapper ${isOpen ? 'opened' : ''}`}>
        <nav className="page__nav">
          <li className={`home${url === '/' ? ' active' : ''}`}>
            <Link to='/'>Home</Link>
          </li>
          <li className={`who-we-are${url === '/who-we-are' || url === '/who-we-are/' ? ' active' : ''}`}>
            <Link to='/who-we-are'>Who are we?</Link>
          </li>
          <li className={`references${url === '/references' || url === '/references/' ? ' active' : ''}`}>
            <Link to='/references'>References</Link>
          </li>
          <li className={`contact${url === '/contact' || url === '/contact/' ? ' active' : ''}`}>
            <Link to='/contact'>Contact</Link>
          </li>
        </nav>
      </div>
    </HeaderStyles>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
