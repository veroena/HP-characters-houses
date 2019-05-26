import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';
import {hogwartsData} from '../services/hogwartsData';

class HouseCard extends Component {

  render() {
    const { getHouseColor } = this.props;
    const houseName = this.props.match.params.house;
    const item = hogwartsData.find(item => item.house === houseName);
    
    return(
      <div className="house__container">
        <header className={`house__header ${getHouseColor(item.house)}`}>
          <h1 className="house__name">{item.house}</h1>
          <h2 className="house__values">{item.values}</h2>
        </header>
        <div className="house__middle">
          <img src={item.crest} alt={item.house} className="house__crest"/>
          <p className="house__quote"><em>{item.quote}</em></p>
        </div>
        <div className={`house__end ${getHouseColor(item.house)}`}>
          <div className="house__common-room--container">
            <img className="house__common-room" src={item.commonRoomPic} alt={`${item.house} Common Room`}/>
          </div>
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