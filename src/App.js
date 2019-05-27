import React, {Component} from 'react';
import {fetchCharacters} from './services/fetchCharacters';
import {Route, Switch, Redirect} from 'react-router-dom';
import CharacterCard from './components/CharacterCard';
import HouseCard from './components/HouseCard';
import Home from './components/Home';
import Characters from './components/Characters';
import Landing from './components/Landing';
import Houses from './components/Houses';
import Sorting from './components/Sorting';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characterList: JSON.parse(localStorage.getItem('charactersArray')) || [],
      filterName: '',
      filterHouse: '',
      // sortingArray : [],
      // sortingId: [],
      sortingResult: 0,
      isModalVisible: false,
      sortingHouse: ''
    }
    this.changeValueName = this.changeValueName.bind(this);
    this.changeValueHouse = this.changeValueHouse.bind(this);
    this.resetFilter = this.resetFilter.bind(this);
    this.resetNameOnClick = this.resetNameOnClick.bind(this);
    this.resetHouseOnClick = this.resetHouseOnClick.bind(this);
    this.getHouseCrest = this.getHouseCrest.bind(this);
    this.getHouseColor = this.getHouseColor.bind(this);
    this.getCosas = this.getCosas.bind(this);
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


  getHouseCrest(house) {
    if (house === 'Gryffindor') {
      return 'https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Griffyn_0.png?4kQC5RlG0.YTXTKSv2XFRPEQzudcKngf';
    }
    else if (house === 'Slytherin') {
      return 'https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Sly_0.png?SExUyce6x9j.xakVjrvhB0zXt1ZTwLxK';
    }
    else if (house === 'Hufflepuff') {
      return 'https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Huffle_0.png?lPf6cPdBB2rMbdHm9oZM0w0iJx07hoej';
    }
    else if (house === 'Ravenclaw') {
      return 'https://d1v224g40dbxxy.cloudfront.net/s3fs-public/gallery-images/Raven_0.png?LTQM_J6raYLtZGfHVRb5lS_uCRqRTMIq';
    }
    else {
      return null;
    }
  }

  getHouseColor(house) {
    if (house === 'Gryffindor') {
      return 'gryffindor';
    }
    else if (house === 'Slytherin') {
      return 'slytherin';
    }
    else if (house === 'Hufflepuff') {
      return 'hufflepuff';
    }
    else if (house === 'Ravenclaw') {
      return 'ravenclaw';
    }
    else {
      return 'no-house';
    }
  }


  getCosas(number) {
    this.setState ({sortingResult : number, isModalVisible : true});

    if (number <= 8) {
      this.setState({sortingHouse : 'gryffindor'})
    } else if (number >= 9 && number <= 12) {
      this.setState({sortingHouse : 'slytherin'})
    } else if (number >=13 && number <= 16 ) {
      this.setState({sortingHouse : 'ravenclaw'})
    } else if (number => 17) {
      this.setState({sortingHouse : 'hufflepuff'})
    } else {
      this.setState({sortingHouse : ''})
    }
  }


  render () {
    const {characterList, filterName, filterHouse, sortingHouse} = this.state;
    return (
      <div className="App">
          <Switch>
            <Route path="/landing" component={Landing}/>
            <Route path="/home" component={Home}/>
            <Route exact path="/characters" render={() => (
              <Characters characterList={characterList} filterName={filterName} filterHouse={filterHouse} changeValueName={this.changeValueName} changeValueHouse={this.changeValueHouse} resetNameOnClick={this.resetNameOnClick} resetHouseOnClick={this.resetHouseOnClick} handleFilterHouse={this.handleFilterHouse} getHouseCrest={this.getHouseCrest}  />
              )}
            />
            <Route path="/character/:id" render={potterProps => (
              <CharacterCard match={potterProps.match} characterList={characterList} resetFilter={this.resetFilter} getHouseCrest={this.getHouseCrest} getHouseColor={this.getHouseColor} />
              )}
            />
            <Route path="/houses" component={Houses}/>
            <Route path="/house/:house" render={houseProps => (
              <HouseCard match={houseProps.match} getHouseColor={this.getHouseColor} />
              )}
            />
            <Route path="/sorting" render={sortingProps => (
              <Sorting match={sortingProps.match} getSortingValue={this.getSortingValue} sumSortingValue={this.sumSortingValue} isModalVisible={this.state.isModalVisible} sortingHouse={sortingHouse} getCosas={this.getCosas} />
              )}
              />
            <Redirect from='/' to='/landing' />
          </Switch>
      </div>
    );
  }
}

export default App;
