import React, {Component, Fragment} from 'react';
// import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';
import Modal from './Modal';
import {Link} from 'react-router-dom';


class Sorting extends Component {

  constructor(props) {
    super(props);
    this.data1 = 0;
    this.data2 = 0;
    this.data3 = 0;
    this.data4 = 0;
    this.data5 = 0

    this.sendValueToConstructor1 = this.sendValueToConstructor1.bind(this);
    this.sendValueToConstructor2 = this.sendValueToConstructor2.bind(this);
    this.sendValueToConstructor3 = this.sendValueToConstructor3.bind(this);
    this.sendValueToConstructor4 = this.sendValueToConstructor4.bind(this);
    this.sendValueToConstructor5 = this.sendValueToConstructor5.bind(this);
    this.getResultSorting = this.getResultSorting.bind(this);
    this.getHouseBackground = this.getHouseBackground.bind(this);
  }


  getResultSorting(event) {
    event.preventDefault();
    const result = this.data1 + this.data2 + this.data3 + this.data4 + this.data5;
    this.props.getSortingHouse(result)
  }

  sendValueToConstructor1(event) {
    const radioValue = event.currentTarget.value;
    this.data1 = parseInt(radioValue);
  }
  sendValueToConstructor2(event) {
    const radioValue = event.currentTarget.value;
    this.data2 = parseInt(radioValue);
  }
  sendValueToConstructor3(event) {
    const radioValue = event.currentTarget.value;
    this.data3 = parseInt(radioValue);
  }
  sendValueToConstructor4(event) {
    const radioValue = event.currentTarget.value;
    this.data4 = parseInt(radioValue);
  }
  sendValueToConstructor5(event) {
    const radioValue = event.currentTarget.value;
    this.data5 = parseInt(radioValue);
  }

  getHouseBackground(house) {
     if (house === 'Gryffindor') {
      return 'https://wallpapermemory.com/uploads/556/gryffindor-wallpaper-laptop-463365.jpg';
    }
    else if (house === 'Slytherin') {
      return 'https://img1.goodfon.com/wallpaper/nbig/f/1d/slizerin-slytherin-zmeya.jpg';
    }
    else if (house === 'Hufflepuff') {
      return 'https://images7.alphacoders.com/556/thumb-1920-556260.jpg';
    }
    else if (house === 'Ravenclaw') {
      return 'https://images.alphacoders.com/556/556535.jpg';
    }
  }

  render() {
    const { isModalVisible, sortingHouse, getHouseColor, getHouseCrest, closeModal } = this.props;

    return(
      <Fragment>
        {sortingHouse === '' ?
          <Fragment>
            <Header sortingHouse={sortingHouse} getHouseColor={getHouseColor} getHouseCrest={getHouseCrest} />
            <div className="sorting">
              <div className="sorting__hat">
                <h2 className="sorting__title">The Sorting Hat</h2>
                <img src="https://caseydemo.github.io/images/sorting-hat.png" alt="" className="sorting__image"/>
              </div>
              <p className="sorting__info"></p>
              <form action="" className="sorting__form">
                <fieldset className="sorting__form--fieldset">
                  <legend className="sorting__form--legend">Which of these Dumbledore quotes speaks to you?</legend>
                    <label htmlFor="1" className="sorting__label">
                      <input onChange={this.sendValueToConstructor1} type="radio" className="sorting__input" name="1" id="1" value="4" defaultChecked/> 
                      "Pity the living, and above all, those who live without love."
                    </label>
                    <label htmlFor="2" className="sorting__label">
                      <input onChange={this.sendValueToConstructor1} type="radio" className="sorting__input" name="1" id="2" value="3"/> 
                      "Words are, in my not-so-humble opinion, our most inexhaustible source of magic."
                    </label>
                    <label htmlFor="3" className="sorting__label">
                      <input onChange={this.sendValueToConstructor1} type="radio" className="sorting__input" name="1" id="3" value="1"/> 
                      "It matters not what someone is born, but what they grow to be."</label>
                    <label htmlFor="4" className="sorting__label">
                      <input onChange={this.sendValueToConstructor1} type="radio" className="sorting__input" name="1" id="4" value="2"/>
                      "It does not do to dwell on dreams and forget to live."
                    </label>
                </fieldset>
                <fieldset className="sorting__form--fieldset">
                  <legend className="sorting__form--legend">Which of your skills are you most proud of?</legend>
                    <label htmlFor="5" className="sorting__label">
                      <input onChange={this.sendValueToConstructor2} type="radio" className="sorting__input" name="2" id="5" value="3" defaultChecked/>
                      My ability to absorb new information.
                    </label>
                    <label htmlFor="6" className="sorting__label">
                      <input onChange={this.sendValueToConstructor2} type="radio" className="sorting__input" name="2" id="6" value="4"/>
                      My ability to make new friends.
                    </label>
                    <label htmlFor="7" className="sorting__label">
                      <input onChange={this.sendValueToConstructor2} type="radio" className="sorting__input" name="2" id="7" value="1"/>
                      My ability to get what I want.
                    </label>
                    <label htmlFor="8" className="sorting__label">
                      <input onChange={this.sendValueToConstructor2} type="radio" className="sorting__input" name="2" id="8" value="2"/>
                      My ability to keep secrets.
                    </label>
                </fieldset>
                <fieldset className="sorting__form--fieldset">
                  <legend className="sorting__form--legend">The first Quidditch match of the season is approaching, and you can't wait to get involved. What role are you playing?</legend>
                    <label htmlFor="9" className="sorting__label">
                      <input onChange={this.sendValueToConstructor3} type="radio" className="sorting__input" name="3" id="9" value="1" defaultChecked/>
                      Seeker. I want the glory!
                    </label>
                    <label htmlFor="10" className="sorting__label">
                      <input onChange={this.sendValueToConstructor3} type="radio" className="sorting__input" name="3" id="10" value="3"/>
                      Chaser. I like to be involved, and work as part of the team.
                    </label>
                    <label htmlFor="11" className="sorting__label">
                      <input onChange={this.sendValueToConstructor3} type="radio" className="sorting__input" name="3" id="11" value="2"/>
                      Beater. I like having all that power.
                    </label>
                    <label htmlFor="12" className="sorting__label">
                      <input onChange={this.sendValueToConstructor3} type="radio" className="sorting__input" name="3" id="12" value="4"/>
                      I'll be in the crowd, making sure supporter morale is high!
                    </label>
                </fieldset>
                <fieldset className="sorting__form--fieldset">
                  <legend className="sorting__form--legend">What would you see in the Mirror of Erised?</legend>  
                    <label htmlFor="13" className="sorting__label">
                      <input onChange={this.sendValueToConstructor4} type="radio" className="sorting__input" name="4" id="13" value="2" defaultChecked/>
                      Myself, surrounded by riches.
                    </label>
                    <label htmlFor="14" className="sorting__label">
                      <input onChange={this.sendValueToConstructor4} type="radio" className="sorting__input" name="4" id="14" value="4"/>
                      Myself, surrounded by my loving family and friends.
                    </label>
                    <label htmlFor="15" className="sorting__label">
                      <input onChange={this.sendValueToConstructor4} type="radio" className="sorting__input" name="4" id="15" value="3"/>
                      Myself, knowledgable above all.
                    </label>
                    <label htmlFor="16" className="sorting__label">
                      <input onChange={this.sendValueToConstructor4} type="radio" className="sorting__input" name="4" id="16" value="1"/>
                      Myself, experiencing a marvellous adventure.
                    </label>
                  </fieldset>
                  <fieldset className="sorting__form--fieldset">
                    <legend className="sorting__form--legend">You're locked in a duel with a skilled opponent. They fire an unknown spell at you, and you shout…</legend> 
                      <label htmlFor="17" className="sorting__label">
                        <input onChange={this.sendValueToConstructor5} type="radio" className="sorting__input" name="5" id="17" value="1" defaultChecked/>
                        Expelliarmus!
                      </label>
                      <label htmlFor="18" className="sorting__label">
                        <input onChange={this.sendValueToConstructor5} type="radio" className="sorting__input" name="5" id="18" value="4"/>
                        Protego!
                      </label>
                      <label htmlFor="19" className="sorting__label">
                        <input onChange={this.sendValueToConstructor5} type="radio" className="sorting__input" name="5" id="19" value="3"/>
                        Stupefy!
                      </label>
                      <label htmlFor="20" className="sorting__label">
                        <input onChange={this.sendValueToConstructor5} type="radio" className="sorting__input" name="5" id="20" value="2"/>
                        Crucio!
                      </label>
                  </fieldset>
                <button onClick={this.getResultSorting} className="form__button" type="submit">click</button>
              </form>
              <Footer />
            </div>
          </Fragment>
        :
          <div className="welcome__container">
            {isModalVisible && <Modal closeModal={closeModal} sortingHouse={sortingHouse} getHouseColor={getHouseColor} getHouseCrest={getHouseCrest} />}
            <Header sortingHouse={sortingHouse} getHouseColor={getHouseColor} getHouseCrest={getHouseCrest} />
            <div className="welcome" style={{backgroundImage : `url(${this.getHouseBackground(sortingHouse)})`}}>
              <h2 className="welcome__title">Welcome to house {sortingHouse}</h2>
              <p className="welcome__info"><Link to={`/house/${sortingHouse}`} className="welcome__info--link">If you want to know more about your house, click here!</Link></p>
            </div>
            <Footer />
          </div>
        }
      </Fragment>
    )
  }
}

// Sorting.propTypes = {

// };

export default Sorting;