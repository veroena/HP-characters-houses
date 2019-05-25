import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CharacterList extends Component {

  constructor(props) {
    super(props);
    this.getHouseCrest = this.getHouseCrest.bind(this);
  }


  getHouseCrest(house) {
    if (house === 'Gryffindor') {
      return 'https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Griffyn_0.png?4kQC5RlG0.YTXTKSv2XFRPEQzudcKngf';
    }
    else if (house === 'Slytherin') {
      return 'https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Sly_0.png?SExUyce6x9j.xakVjrvhB0zXt1ZTwLxK';
    }
    else if (house === 'Hufflepuff') {
      return 'https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Huffle_0.png?lPf6cPdBB2rMbdHm9oZM0w0iJx07hoej';
    }
    else if (house === 'Ravenclaw') {
      return 'https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Raven_0.png?LTQM_J6raYLtZGfHVRb5lS_uCRqRTMIq';
    }
    else {
      return null;
    }
  }


  render() {
    const {characterList, filterName, filterHouse} = this.props;
    
    return(
      <div className="character__list--container">
        <ul className="character__list">
          {characterList
            .filter(item => item.name.toLowerCase().includes(filterName.toLowerCase()))
            .filter(item => item.house.toLowerCase().includes(filterHouse.toLowerCase()))
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
                <img className="character__list--house" src={this.getHouseCrest(item.house)} alt={item.house} />
              </li>
            )
          }
        </ul>
      </div>
    )
  }
}

export default CharacterList;
