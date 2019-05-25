import React, {Component, Fragment} from 'react';
import Filters from './Filters';
import CharacterList from './CharacterList';
import Header from './Header';
import Footer from './Footer';
import PropTypes from 'prop-types';

class Home extends Component {
  render() {
    const {characterList, filterName, filterHouse, changeValueName, changeValueHouse, resetNameOnClick, resetHouseOnClick} = this.props;
    return(
      <Fragment>
        <Header />
        <main>
          <Filters filterName={filterName} changeValueName={changeValueName} resetNameOnClick={resetNameOnClick} filterHouse={filterHouse} changeValueHouse={changeValueHouse} resetHouseOnClick={resetHouseOnClick} />
          <CharacterList characterList={characterList} filterName={filterName} filterHouse={filterHouse}/>
        </main>
        <Footer />
      </Fragment>
    )
  }
}

Home.propTypes = {
  characterList: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterName: PropTypes.string.isRequired,
  filterHouse: PropTypes.string.isRequired,
  changeValueName: PropTypes.func.isRequired,
  changeValueHouse: PropTypes.func.isRequired,
  resetNameOnClick: PropTypes.func.isRequired,
  resetHouseOnClick: PropTypes.func.isRequired
}

export default Home;
