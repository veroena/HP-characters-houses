import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class CharacterList extends Component {

  render() {
    const {characterList, filterName, filterHouse, getHouseCrest, filterDead} = this.props;
    
    return(
      <div className="character__list--container-all" style={{backgroundImage: `url(https://res.cloudinary.com/dkr52htco/image/upload/v1536173269/fog-2.png)`}}>
        <div className="character__list--animation" style={{backgroundImage: `url(https://res.cloudinary.com/dkr52htco/image/upload/v1536173269/fog-1.png)`}}></div>
          <div className="character__list--container">
            <ul className="character__list">
              {characterList
                .filter(item => item.name.toLowerCase().includes(filterName.toLowerCase()))
                .filter(item => item.house.toLowerCase().includes(filterHouse.toLowerCase()))
                .filter(item => {
                  if (filterDead === 'all') {
                    return item;
                  } else if (filterDead === 'alive') {
                    return item.alive === true;
                  } else {
                    return item.alive === false;
                  }
                })
                .map(item => 
                  <li className="character__list--item" key={item.id}>
                    <div className="character__list--name-container" style={{backgroundImage: `url(https://sitejerk.com/images/banner-transparent-png-1.png)`}}>
                      <Link to={`/character/${item.id}`} className="character__list--link">
                        <h2 className="character__list--name" >{item.name}</h2>
                      </Link>
                    </div>
                    <Link to={`/character/${item.id}`} className="character__list--link">
                      <div className="character__list--image-bg" style={{backgroundImage: `url(${item.image})`}}></div>
                    </Link>
                    <img className="character__list--house" src={getHouseCrest(item.house)} alt={item.house} />
                  </li>
                )
              }
            </ul>
          </div>
      </div>
    )
  }
}

CharacterList.propTypes = {
  characterList: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterName: PropTypes.string.isRequired,
   filterHouse: PropTypes.string.isRequired
};

export default CharacterList;
