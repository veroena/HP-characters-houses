import React from 'react';

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

export default Filters;

// style={{backgroundImage: `url(https://res.cloudinary.com/dkr52htco/image/upload/v1536173269/fog-2.png)`}}