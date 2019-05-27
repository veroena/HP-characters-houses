import React, {Component, Fragment} from 'react';
// import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

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



  render() {
    const { isModalVisible, sortingHouse, getHouseColor } = this.props;
    // const sortValue = this.props.match.params.house;
    // const item = hogwartsData.find(item => item.house === houseName);

    return(
      <Fragment>
        <Header sortingHouse={sortingHouse} getHouseColor={getHouseColor} />
        <h2 className="sorting__title">Sorting Hat</h2>
        <img src="" alt="" className="sorting__image"/>
        <p className="sorting__info"></p>
        <form action="" className="sorting__form">
          <fieldset className="sorting__form--fieldset">
            <label htmlFor="1" className="sorting__label">Which of these Dumbledore quotes speaks to you?</label>
              <input onChange={this.sendValueToConstructor1} type="radio" className="sorting__input" name="1" id="1" value="4"/> "Pity the living, and above all, those who live without love."
              <input onChange={this.sendValueToConstructor1} type="radio" className="sorting__input" name="1" id="1" value="3"/> "Words are, in my not-so-humble opinion, our most inexhaustible source of magic."
              <input onChange={this.sendValueToConstructor1} type="radio" className="sorting__input" name="1" id="1" value="1"/> "It matters not what someone is born, but what they grow to be."
              <input onChange={this.sendValueToConstructor1} type="radio" className="sorting__input" name="1" id="1" value="2"/> "It does not do to dwell on dreams and forget to live."
          </fieldset>
          <label htmlFor="2" className="sorting__label">Which of your skills are you most proud of?</label>
            <input onChange={this.sendValueToConstructor2} type="radio" className="sorting__input" name="2" id="2" value="3"/> My ability to absorb new information.
            <input onChange={this.sendValueToConstructor2} type="radio" className="sorting__input" name="2" id="2" value="4"/> My ability to make new friends.
            <input onChange={this.sendValueToConstructor2} type="radio" className="sorting__input" name="2" id="2" value="1"/> My ability to get what I want.
            <input onChange={this.sendValueToConstructor2} type="radio" className="sorting__input" name="2" id="2" value="2"/> My ability to keep secrets.
          <label htmlFor="3" className="sorting__label">The first Quidditch match of the season is approaching, and you can't wait to get involved. What role are you playing?</label>
            <input onChange={this.sendValueToConstructor3} type="radio" className="sorting__input" name="3" id="3" value="1"/> Seeker. I want the glory!
            <input onChange={this.sendValueToConstructor3} type="radio" className="sorting__input" name="3" id="3" value="3"/> Chaser. I like to be involved, and work as part of the team.
            <input onChange={this.sendValueToConstructor3} type="radio" className="sorting__input" name="3" id="3" value="2"/> Beater. I like having all that power.
            <input onChange={this.sendValueToConstructor3} type="radio" className="sorting__input" name="3" id="3" value="4"/> I'll be in the crowd, making sure supporter morale is high!
          <label htmlFor="4" className="sorting__label">What would you see in the Mirror of Erised?</label>
            <input onChange={this.sendValueToConstructor4} type="radio" className="sorting__input" name="4" id="4" value="2"/> Myself, surrounded by riches.
            <input onChange={this.sendValueToConstructor4} type="radio" className="sorting__input" name="4" id="4" value="4"/> Myself, surrounded by my loving family and friends.
            <input onChange={this.sendValueToConstructor4} type="radio" className="sorting__input" name="4" id="4" value="3"/> Myself, knowledgable above all.
            <input onChange={this.sendValueToConstructor4} type="radio" className="sorting__input" name="4" id="4" value="1"/> Myself, experiencing a marvellous adventure.
          <label htmlFor="5" className="sorting__label">You're locked in a duel with a skilled opponent. They fire an unknown spell at you, and you shout…</label>
            <input onChange={this.sendValueToConstructor5} type="radio" className="sorting__input" name="5" id="5" value="1"/> Expelliarmus!
            <input onChange={this.sendValueToConstructor5} type="radio" className="sorting__input" name="5" id="5" value="4"/> Protego!
            <input onChange={this.sendValueToConstructor5} type="radio" className="sorting__input" name="5" id="5" value="3"/> Stupefy!
            <input onChange={this.sendValueToConstructor5} type="radio" className="sorting__input" name="5" id="5" value="2"/> Crucio!

          <button onClick={this.getResultSorting} className="form__button" type="submit">click</button>
          {isModalVisible && <div className="sorting__result">{sortingHouse}</div>}
        </form>
        <Footer />
      </Fragment>
    )
  }
}

// Sorting.propTypes = {

// };

export default Sorting;