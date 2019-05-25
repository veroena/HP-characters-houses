import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header__container">
        {/* <div className="header__logo"></div> */}
        <img src="https://1000logos.net/wp-content/uploads/2017/02/Harry-Potter-Logo.png" alt="Harry Potter" className="header__logo"/>
      </header>
    )
  }
}

export default Header;