import React from 'react';

class Filters extends React.Component {
  render() {
    const {filterName, filterHouse, changeValueName, changeValueHouse, resetNameOnClick, resetHouseOnClick} = this.props;
    return (
      <div className="filters">
        <label htmlFor="character">Search by name</label>
        <input id="characters" name="character" type="text" value={filterName} onChange={changeValueName} onFocus={resetNameOnClick} />
        <label htmlFor="house">Search by house</label>
        <input id="houses" name="house" type="text" value={filterHouse} onChange={changeValueHouse} onClick={resetHouseOnClick} />
      </div>
    )
  }
}

export default Filters;

