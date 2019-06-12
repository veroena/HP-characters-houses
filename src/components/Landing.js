import React from 'react';
import {Link} from 'react-router-dom';

class Landing extends React.Component {
  render() {
    const shoeprint = 'http://www.clker.com/cliparts/i/A/h/U/6/P/shoe-print.svg';
    return(
      <Link to="./home">
        <div className="landing" style={{backgroundImage: `url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1c180f50-a62f-425f-83f8-ae59bbc4f1a7/d69tz1k-63184d80-aefe-4f00-ace1-63f7317a3509.jpg/v1/fill/w_1024,h_722,q_75,strp/the_back_of_the_marauders_map_by_littlefallingstar_d69tz1k-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIyIiwicGF0aCI6IlwvZlwvMWMxODBmNTAtYTYyZi00MjVmLTgzZjgtYWU1OWJiYzRmMWE3XC9kNjl0ejFrLTYzMTg0ZDgwLWFlZmUtNGYwMC1hY2UxLTYzZjczMTdhMzUwOS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.r2BPH7gEs9ZwqMOW6NVwCrFnHLYJ82u_6yFQBvItkLM)`}}>
          <div className="landing__steps1">
            <img src={shoeprint} alt="" className="foot right right__foot1 foot1"/>
            <img src={shoeprint} alt="" className="foot left left__foot1 foot2"/>
            <img src={shoeprint} alt="" className="foot right right__foot1 foot3"/>
            <img src={shoeprint} alt="" className="foot left left__foot1 foot4"/>
            <img src={shoeprint} alt="" className="foot right right__foot1 foot5"/>
            <img src={shoeprint} alt="" className="foot left left__foot1 foot6"/>
            <img src={shoeprint} alt="" className="foot right right__foot1 foot7"/>
            <img src={shoeprint} alt="" className="foot left left__foot1 foot8"/>
          </div>
          <div className="landing__steps2">
            <img src={shoeprint} alt="" className="foot right right__foot1 foot9"/>
            <img src={shoeprint} alt="" className="foot left left__foot1 foot10"/>
            <img src={shoeprint} alt="" className="foot right right__foot1 foot11"/>
            <img src={shoeprint} alt="" className="foot left left__foot1 foot12"/>
            <img src={shoeprint} alt="" className="foot right right__foot1 foot13"/>
            <img src={shoeprint} alt="" className="foot left left__foot1 foot14"/>
            <img src={shoeprint} alt="" className="foot right right__foot1 foot15"/>
            <img src={shoeprint} alt="" className="foot left left__foot1 foot16"/>
          </div>
          <div className="landing__steps3">
            <img src="" alt="" className="foot right right__foot3"/>
            <img src="" alt="" className="foot left left__foot3"/>
          </div>
          <div className="landing__wrapper" >
            <div className="landing__link" style={{backgroundImage: `url(https://images.fineartamerica.com/images/artworkimages/medium/1/i-solemnly-swear-wolfgang-robinson-transparent.png)`}}></div>
          </div>
        </div>
      </Link>
    )
  }
}

export default Landing;