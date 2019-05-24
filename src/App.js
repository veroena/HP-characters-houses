import React, {Component} from 'react';
import {fetchCharacters} from './services/fetchCharacters';
import {Route, Switch} from 'react-router-dom';
import CharacterCard from './components/CharacterCard';
import Home from './components/Home';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterList: JSON.parse(localStorage.getItem('charactersArray')) || [],
      filterName: '',
      filterHouse: ''
    }
    this.changeValueName = this.changeValueName.bind(this);
    this.changeValueHouse = this.changeValueHouse.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.resetNameOnClick = this.resetNameOnClick.bind(this);
    this.resetHouseOnClick = this.resetHouseOnClick.bind(this);
  }

  componentDidMount() {
    if (this.state.characterList.length === 0) {
      fetchCharacters().then(data => {
        const newData = data.map((item, index) => {
          return {...item, id:index}
        });
        localStorage.setItem('charactersArray', JSON.stringify(newData));
        this.setState({characterList: newData});
      });
    }
  }

  changeValueName(event) {
    const inputValueName = event.currentTarget.value;
    this.setState({filterName : inputValueName});
  }

  changeValueHouse(event) {
    const inputValueHouse = event.currentTarget.value;
    this.setState({filterHouse : inputValueHouse});
  }

  resetFilter(){
    this.setState({filterName : '', filterHouse: ''})
  }

  resetNameOnClick() {
    this.setState({filterName : ''})
  }

  resetHouseOnClick() {
    this.setState({filterHouse: ''})
  }

  render () {
    const {characterList, filterName, filterHouse} = this.state;
    return (
      <div className="App">
          <Switch>
            <Route exact path="/" render={() => (
              <Home characterList={characterList} filterName={filterName} filterHouse={filterHouse} changeValueName={this.changeValueName} changeValueHouse={this.changeValueHouse} resetNameOnClick={this.resetNameOnClick} resetHouseOnClick={this.resetHouseOnClick} />
              )}
            />
            <Route path="/character/:id" render={potterProps => (
              <CharacterCard match={potterProps.match} charactersList={characterList} resetFilter={this.resetFilter} />
              )}
            />
          </Switch>
      </div>
    );
  }
}

export default App;
