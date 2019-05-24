import React, {Component, Fragment} from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';

class Home extends Component {
  render() {
    const {characterList, filterName, filterHouse, changeValueName, changeValueHouse, resetNameOnClick, resetHouseOnClick} = this.props;
    return(
      <Fragment>
        <header className="header">
          <h1 className="header__title">HP Characters' List</h1>
        </header>
        <Filters filterName={filterName} changeValueName={changeValueName} resetNameOnClick={resetNameOnClick} filterHouse={filterHouse} changeValueHouse={changeValueHouse} resetHouseOnClick={resetHouseOnClick} />
        <CharacterList characterList={characterList} filterName={filterName} filterHouse={filterHouse}/>
      </Fragment>
    )
  }
}

export default Home;
