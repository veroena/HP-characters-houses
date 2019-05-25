import React, {Component} from 'react';
import {fetchCharacters} from './services/fetchCharacters';
import {Route, Switch} from 'react-router-dom';
import CharacterCard from './components/CharacterCard';
import Home from './components/Home';




//pasar getHouseCrest={this.getHouseCrest} a Home y CharacterCard si resuelvo lo de los parámetros




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
    // this.getHouseCrest = this.getHouseCrest.bind(this);
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


  // getHouseCrest(house) {
  //   if (house === 'Gryffindor') {
  //     return 'https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Griffyn_0.png?4kQC5RlG0.YTXTKSv2XFRPEQzudcKngf';
  //   }
  //   else if (house === 'Slytherin') {
  //     return 'https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Sly_0.png?SExUyce6x9j.xakVjrvhB0zXt1ZTwLxK';
  //   }
  //   else if (house === 'Hufflepuff') {
  //     return 'https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Huffle_0.png?lPf6cPdBB2rMbdHm9oZM0w0iJx07hoej';
  //   }
  //   else if (house === 'Ravenclaw') {
  //     return 'https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Raven_0.png?LTQM_J6raYLtZGfHVRb5lS_uCRqRTMIq';
  //   }
  //   else {
  //     return null;
  //   }
  // }


  render () {
    const {characterList, filterName, filterHouse} = this.state;
    return (
      <div className="App">
          <Switch>
            <Route exact path="/" render={() => (
              <Home characterList={characterList} filterName={filterName} filterHouse={filterHouse} changeValueName={this.changeValueName} changeValueHouse={this.changeValueHouse} resetNameOnClick={this.resetNameOnClick} resetHouseOnClick={this.resetHouseOnClick}  />
              )}
            />
            <Route path="/character/:id" render={potterProps => (
              <CharacterCard match={potterProps.match} characterList={characterList} resetFilter={this.resetFilter} />
              )}
            />
          </Switch>
      </div>
    );
  }
}

export default App;
