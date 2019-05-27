import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
// import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';

class Home extends Component {
  render() {
    const { sortingHouse, getHouseColor } = this.props;
    return(
      <div className="home__great-hall">
        <Header sortingHouse={sortingHouse} getHouseColor={getHouseColor} />
        <main className="home__main">
          <div className="home__main--pic" style={{backgroundImage: `url(https://images.pottermore.com/bxd3o8b291gf/3hollgS5QIcaUmoAWMsMEC/0ab7c45e0842488acdce82a76f6a7123/Hogwarts_PM_B4C37M1_GreatHallMourningCedricsDeath_Moment.jpg?w=1100&q=85)`}}></div>
        </main>
        <Footer />
      </div>
    )
  }
}

// HouseCard.propTypes = {

// };

export default Home;