import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header__container" style={{backgroundImage: `url(https://ak4.picdn.net/shutterstock/videos/9459434/thumb/1.jpg)`}}>
        <Link to="./home">
          <img src="https://1000logos.net/wp-content/uploads/2017/02/Harry-Potter-Logo.png" alt="Harry Potter" className="header__logo"/>
        </Link>
        <nav className="header__nav">
          <ul className="header__nav--list">
            <li className="header__nav--list-item">
              <Link className="header__link" to="./characters">Characters</Link>
            </li>
            <li className="header__nav--list-item">
              <Link className="header__link" to="./houses">Houses</Link>
            </li>
            <li className="header__nav--list-item">
              <Link className="header__link" to="./sorting">Sorting</Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header;