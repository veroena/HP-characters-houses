import React, {Component, Fragment} from 'react';
// import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

class Sorting extends Component {

  render() {
    const { getSortingValue, sumSortingValue, isModalVisible, sortingHouse } = this.props;
    // const sortValue = this.props.match.params.house;
    // const item = hogwartsData.find(item => item.house === houseName);

    return(
      <Fragment>
        <Header />
        <h2 className="sorting__title">Sorting Hat</h2>
        <img src="" alt="" className="sorting__image"/>
        <p className="sorting__info"></p>
        <form action="" className="sorting__form">
          <fieldset className="sorting__form--fieldset">
            <label htmlFor="1" className="sorting__label">Which of these Dumbledore quotes speaks to you?</label>
              <input onChange={getSortingValue} type="radio" className="sorting__input" name="1" id="1" value="4"/> "Pity the living, and above all, those who live without love."
              <input onChange={getSortingValue} type="radio" className="sorting__input" name="1" id="1" value="3"/> "Words are, in my not-so-humble opinion, our most inexhaustible source of magic."
              <input onChange={getSortingValue} type="radio" className="sorting__input" name="1" id="1" value="1"/> "It matters not what someone is born, but what they grow to be."
              <input onChange={getSortingValue} type="radio" className="sorting__input" name="1" id="1" value="2"/> "It does not do to dwell on dreams and forget to live."
          </fieldset>
          <label htmlFor="2" className="sorting__label">Which of your skills are you most proud of?</label>
            <input onChange={getSortingValue} type="radio" className="sorting__input" name="2" id="2" value="3"/> My ability to absorb new information.
            <input onChange={getSortingValue} type="radio" className="sorting__input" name="2" id="2" value="4"/> My ability to make new friends.
            <input onChange={getSortingValue} type="radio" className="sorting__input" name="2" id="2" value="1"/> My ability to get what I want.
            <input onChange={getSortingValue} type="radio" className="sorting__input" name="2" id="2" value="2"/> My ability to keep secrets.
          <label htmlFor="3" className="sorting__label">The first Quidditch match of the season is approaching, and you can't wait to get involved. What role are you playing?</label>
            <input onChange={getSortingValue} type="radio" className="sorting__input" name="3" id="3" value="1"/> Seeker. I want the glory!
            <input onChange={getSortingValue} type="radio" className="sorting__input" name="3" id="3" value="3"/> Chaser. I like to be involved, and work as part of the team.
            <input onChange={getSortingValue} type="radio" className="sorting__input" name="3" id="3" value="2"/> Beater. I like having all that power.
            <input onChange={getSortingValue} type="radio" className="sorting__input" name="3" id="3" value="4"/> I'll be in the crowd, making sure supporter morale is high!
          <label htmlFor="4" className="sorting__label">What would you see in the Mirror of Erised?</label>
            <input onChange={getSortingValue} type="radio" className="sorting__input" name="4" id="4" value="2"/> Myself, surrounded by riches.
            <input onChange={getSortingValue} type="radio" className="sorting__input" name="4" id="4" value="4"/> Myself, surrounded by my loving family and friends.
            <input onChange={getSortingValue} type="radio" className="sorting__input" name="4" id="4" value="3"/> Myself, knowledgable above all.
            <input onChange={getSortingValue} type="radio" className="sorting__input" name="4" id="4" value="1"/> Myself, experiencing a marvellous adventure.
          <label htmlFor="5" className="sorting__label">You're locked in a duel with a skilled opponent. They fire an unknown spell at you, and you shout…</label>
            <input onChange={getSortingValue} type="radio" className="sorting__input" name="5" id="5" value="1"/> Expelliarmus!
            <input onChange={getSortingValue} type="radio" className="sorting__input" name="5" id="5" value="4"/> Protego!
            <input onChange={getSortingValue} type="radio" className="sorting__input" name="5" id="5" value="3"/> Stupefy!
            <input onChange={getSortingValue} type="radio" className="sorting__input" name="5" id="5" value="2"/> Crucio!

          <button onClick={sumSortingValue} className="form__button" type="submit">click</button>
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