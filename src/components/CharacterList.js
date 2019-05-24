import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CharacterList extends Component {
  render() {
    const {characterList, filterName, filterHouse} = this.props;
    return(
      <div className="character__list--container">
        <ul className="character__list">
          {characterList
            .filter(item => item.name.toLowerCase().includes(filterName.toLowerCase()))
            .filter(item => item.house.toLowerCase().includes(filterHouse.toLowerCase()))
            .map(item => 
              <Link to={`/character/${item.id}`} key={item.id} className="character__list--link">
                <li className="character__list--item">
                  <h2 className="character__list--name" >{item.name}</h2>
                  <div className="character__list--image-bg" style={{backgroundImage: `url(${item.image})`}}></div>
                  <div className="character__list--house-container" style={{backgroundImage: `url(https://sitejerk.com/images/banner-transparent-png-1.png)`}}><h3 className="character__list--house">{item.house}</h3></div>
                </li>
              </Link>
            )
          }
        </ul>
      </div>

    )
  }
}

export default CharacterList;