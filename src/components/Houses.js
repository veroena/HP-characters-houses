import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';

class Houses extends Component {
  render() {
    const {sortingHouse, getHouseColor} = this.props;
    return(
      <div className="houses__container">
        <Header sortingHouse={sortingHouse} getHouseColor={getHouseColor} />
        <main>
          <ul className="houses__list">
            <li className="houses__list--item">
              <Link to="/house/Gryffindor">
                <img src="https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Griffyn_0.png?4kQC5RlG0.YTXTKSv2XFRPEQzudcKngf" alt="Gryffindor Crest" className="houses__list--image"/>
              </Link>
            </li>
            <li className="houses__list--item">
              <Link to="/house/Slytherin">
                <img src="https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Sly_0.png?SExUyce6x9j.xakVjrvhB0zXt1ZTwLxK" alt="Slytherin Crest" className="houses__list--image"/>
              </Link>
            </li>
            <li className="houses__list--item">
              <Link to="/house/Ravenclaw">
                <img src="https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Raven_0.png?LTQM_J6raYLtZGfHVRb5lS_uCRqRTMIq" alt="Ravenclaw Crest" className="houses__list--image"/>
              </Link>
            </li>
            <li className="houses__list--item">
              <Link to="/house/Hufflepuff">
                <img src="https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Huffle_0.png?lPf6cPdBB2rMbdHm9oZM0w0iJx07hoej" alt="Hufflepuff Crest" className="houses__list--image"/>
              </Link>
            </li>
          </ul>
        </main>
        <Footer />
      </div>
    )
  }
}

// Houses.propTypes = {

// }

export default Houses;
