import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const {filterName, filterHouse, changeValueName, changeValueHouse, resetNameOnClick, resetHouseOnClick} = this.props;
    return (
      <form className="filters" >
        <fieldset className="fieldset filters__name">
          <label htmlFor="character">Search by name</label>
          <input id="characters" name="character" type="text" value={filterName} onChange={changeValueName} onFocus={resetNameOnClick} className="filters__input" />
        </fieldset>
        <fieldset className="fieldset filters__house">
          <label htmlFor="house">Search by house</label>
          <input id="houses" name="house" type="text" value={filterHouse} onChange={changeValueHouse} onClick={resetHouseOnClick} className="filters__input" />
        </fieldset>
      </form>
    )
  }
}

Filters.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterHouse: PropTypes.string.isRequired,
  changeValueName: PropTypes.func.isRequired,
  changeValueHouse: PropTypes.func.isRequired,
  resetNameOnClick: PropTypes.func.isRequired,
  resetHouseOnClick: PropTypes.func.isRequired
}

export default Filters;
