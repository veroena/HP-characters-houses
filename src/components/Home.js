import React, {Component, Fragment} from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';
import Header from './Header';

class Home extends Component {
  render() {
    const {characterList, filterName, filterHouse, changeValueName, changeValueHouse, resetNameOnClick, resetHouseOnClick} = this.props;
    return(
      <Fragment>
        <Header />
        <div className="animation__container" style={{backgroundImage: `url(https://res.cloudinary.com/dkr52htco/image/upload/v1536173269/fog-2.png)`}}>
          <Filters filterName={filterName} changeValueName={changeValueName} resetNameOnClick={resetNameOnClick} filterHouse={filterHouse} changeValueHouse={changeValueHouse} resetHouseOnClick={resetHouseOnClick} />
          <div className="animation__sliding" style={{backgroundImage: `url(https://res.cloudinary.com/dkr52htco/image/upload/v1536173269/fog-1.png)`}}></div>
          <CharacterList characterList={characterList} filterName={filterName} filterHouse={filterHouse}/>
        </div>
      </Fragment>
    )
  }
}

export default Home;
