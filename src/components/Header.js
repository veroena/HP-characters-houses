import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header__container" style={{backgroundImage: `url(https://ak4.picdn.net/shutterstock/videos/9459434/thumb/1.jpg)`}}>
        <img src="https://1000logos.net/wp-content/uploads/2017/02/Harry-Potter-Logo.png" alt="Harry Potter" className="header__logo"/>
      </header>
    )
  }
}

export default Header;