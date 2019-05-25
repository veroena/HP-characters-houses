import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="potter__footer">
        <div className="footer__contact--container">
          <p className="footer__name">Verónica Enamorado</p>
          <div className="footer__icons">
            <a href="https://github.com/veroena"><i className="fab fa-github"></i></a>
            <a href="https://twitter.com/vero_ena"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com/in/veronicaenamorado/"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div className="footer__date">&copy; 2019</div>
      </footer>
    )
  }
}

export default Footer;