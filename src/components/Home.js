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
        <Filters filterName={filterName} changeValueName={changeValueName} resetNameOnClick={resetNameOnClick} filterHouse={filterHouse} changeValueHouse={changeValueHouse} resetHouseOnClick={resetHouseOnClick} />
        <CharacterList characterList={characterList} filterName={filterName} filterHouse={filterHouse}/>
      </Fragment>
    )
  }
}

export default Home;
