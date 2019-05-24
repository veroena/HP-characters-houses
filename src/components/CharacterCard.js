import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

class CharacterCard extends Component {

  componentWillUnmount() {
    this.props.resetFilter();
  }

  render() {
    const { charactersList } = this.props;
    const characterId = parseInt(this.props.match.params.id);
    const item = charactersList.find(item => item.id === characterId);
    return(
      <Fragment>
        <div className="character__card--container">
          {charactersList.length > 0 ?
            <div className="character__card">
              <Link to='/'><i className="fas fa-chevron-circle-left"></i></Link>
              <div className="characters__card--image-bg" style={{backgroundImage: `url(${item.image})`}}></div>
              <div className="character__card--content">
                <h2 className="characters__card--name">{item.name}</h2>
                <div className="character__card--content-detail">
                  <p className="characters__card--house card-text">House: {item.name === 'Kingsley Shacklebolt' ? 'unknown' : `${item.house}`} {item.name === 'Mrs Norris' ? `cats can't get sorted into Hogwarts` : null} {item.name === 'Argus Filch' ? `squibs can't enroll in Hogwarts` : null}</p>
                  <p className="characters__card--year card-text">Date of birth: {item.yearOfBirth ? `${item.yearOfBirth}` : 'unknown'}</p>
                  <p className="characters__card--patronus card-text">Patronus: {item.name === 'Draco Malfoy' || item.name === 'Cedric Diggory' || item.name === 'Neville Longbottom' || item.name === 'Horace Slughorn' || item.name === 'Vincent Crabbe' || item.name === 'Gregory Goyle' ? 'unknown' : `${item.patronus}`} {item.name === 'Rubeus Hagrid' ? `he can't produce one, it's a very difficult spell` : null } {item.name === 'Bellatrix Lestrange' || item.name === 'Lord Voldemort' || item.name === 'Lucius Malfoy' ? `Death Eaters can't produce a patronus` : null } {item.name === 'Mrs Norris' ? `cat's don't need a patronus` : null} {item.name === 'Argus Filch' ? 'squibs are non-magical' : null}</p>
                  <p className="characters__card--state card-text">State: {item.alive ? 'alive' : '💀'}</p>
                </div>
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

export default CharacterCard;