import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';
import {hogwartsData} from '../services/hogwartsData';

class HouseCard extends Component {

  constructor(props){
    super(props);
    this.getHouseColor = this.getHouseColor.bind(this)
  }

  getHouseColor(house) {
    if (house === 'Gryffindor') {
      return 'gryffindor';
    }
    else if (house === 'Slytherin') {
      return 'slytherin';
    }
    else if (house === 'Hufflepuff') {
      return 'hufflepuff';
    }
    else if (house === 'Ravenclaw') {
      return 'ravenclaw';
    }
    else {
      return 'no-house';
    }
  }

  render() {
    const houseName = this.props.match.params.house;
    const item = hogwartsData.find(item => item.house === houseName);
    return(
      <div className="house__container">
        <header className={`house__header ${this.getHouseColor(item.house)}`}>
          <h1 className="house__name">{item.house}</h1>
          <h2 className="house__values">{item.values}</h2>
        </header>
        <div className="house__middle">
          <p className="house__quote"><em>{item.quote}</em></p>
          <img src={item.crest} alt={item.house} className="house__crest"/>
        </div>
        <div className={`house__end ${this.getHouseColor(item.house)}`}>
          <img className="house__common-room" src={item.commonRoomPic} alt={`${item.house} Common Room`}/>
          <div className="house__end--info">
            <p className="house__founder">Founder: {item.founder}</p>
            <p className="house__ghost">Ghost: {item.ghost}</p>
            <p className="house__head"> Head of the House: {item.headOfHouse}</p>
          </div>
        </div>
      </div>
    )
  }
}

// HouseCard.propTypes = {

// };

export default HouseCard;