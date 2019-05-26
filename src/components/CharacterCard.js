import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

class CharacterCard extends Component {

  constructor(props) {
    super(props);
    this.getHouseCrest = this.getHouseCrest.bind(this);
    this.getHouseColor = this.getHouseColor.bind(this);
    this.getCommonRoom = this.getCommonRoom.bind(this);
  }

  componentWillUnmount() {
    this.props.resetFilter();
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

  getCommonRoom(house) {
    if (house === 'Gryffindor') {
      return 'https://images.ctfassets.net/bxd3o8b291gf/6RvTzHvJn2eIeW6gcg6WsE/4e2cf595a8cb5369d1972e6fd2e31f0e/GryffindorCommonRoom_PM_B1C13M1_GryffindorCommonRoomFireplace_Moment.jpg?w=1100&q=85';
    }
    else if (house === 'Slytherin') {
      return 'https://images.ctfassets.net/bxd3o8b291gf/4b0NB6OQtGCmQqCMSKaigI/9b4af5ac5b5ee2d1af6febe97b4b8990/SlytherinCommonRoom.jpg?w=1100&q=85';
    }
    else if (house === 'Hufflepuff') {
      return 'https://images.ctfassets.net/bxd3o8b291gf/10V5UBcXXQQAY6qMYIeowK/49a9019566aebfcdb7541cbd53e5d847/HufflepuffCommonroom_PM_.jpg?w=550&h=550&fit=thumb&f=center&q=85';
    }
    else if (house === 'Ravenclaw') {
      return 'https://images.ctfassets.net/bxd3o8b291gf/7eVMhtL01GMG0WIsUcSEKg/aa31a61d431e6b0ce0e6d13ac171a55b/RavenclawCommonRoom.jpg?w=550&h=550&fit=thumb&f=center&q=85';
    }
    else {
      return 'https://images.ctfassets.net/bxd3o8b291gf/6rkjJeRn9YYqemm2cAmYYQ/a007f8054aebbb2987d1f26043459a48/HogwartsCastle_WB_F2_HogwartsCastleAndFlyingFordAnglia_Illust_100615_Land.jpg?w=1100&q=85';
    }
  }

  render() {
    const { characterList } = this.props;
    const characterId = parseInt(this.props.match.params.id);
    const item = characterList.find(item => item.id === characterId);
    return(
      <Fragment>
        <div className="character__card--container" style={{backgroundImage: `url(${this.getCommonRoom(item.house)})`}}>
          {characterList.length > 0 ?
            <div className={`character__card ${this.getHouseColor(item.house)}`}>
              <Link to='/characters'><i className="fas fa-chevron-circle-left"></i></Link>
              <div className="characters__card--image" style={{backgroundImage: `url(${item.image})`}}></div>
              <div className="character__card--content">
                <h2 className="characters__card--name">{item.name}</h2>
                <div className="character__card--content-detail">
                  <p className="characters__card--house card-text">House: {item.name === 'Kingsley Shacklebolt' ? 'unknown' : `${item.house}`} {item.name === 'Mrs Norris' ? `cats can't get sorted into Hogwarts` : null} {item.name === 'Argus Filch' ? `squibs can't enroll in Hogwarts` : null}</p>
                  <p className="characters__card--year card-text">Date of birth: {item.yearOfBirth ? `${item.yearOfBirth}` : 'unknown'}</p>
                  <p className="characters__card--patronus card-text">Patronus: {item.name === 'Draco Malfoy' || item.name === 'Cedric Diggory' || item.name === 'Neville Longbottom' || item.name === 'Horace Slughorn' || item.name === 'Vincent Crabbe' || item.name === 'Gregory Goyle' ? 'unknown' : `${item.patronus}`} {item.name === 'Rubeus Hagrid' ? `he can't produce one, it's a very difficult spell` : null } {item.name === 'Bellatrix Lestrange' || item.name === 'Lord Voldemort' || item.name === 'Lucius Malfoy' ? `Death Eaters can't produce a patronus` : null } {item.name === 'Mrs Norris' ? `cat's don't need a patronus` : null} {item.name === 'Argus Filch' ? 'squibs are non-magical' : null}</p>
                  <p className="characters__card--state card-text">State: {item.alive ? 'alive' : '💀'}</p>
                </div>
                <Link to={`/house/${item.house}`}>
                  <img className="characters__card--crest" src={this.getHouseCrest(item.house)} alt={item.house}/>
                </Link>
              </div>
            </div>
          :
            null
          }
        </div>
      </Fragment>
    )
  }
}

CharacterCard.propTypes = {
  characterList: PropTypes.array.isRequired,
  resetFilter: PropTypes.func.isRequired,
};

export default CharacterCard;