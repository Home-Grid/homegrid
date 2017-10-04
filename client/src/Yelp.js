import React, { Component } from 'react';
import API from "./utils/API";

class Yelp extends Component {
   state = {
    businesses:[]
  }



  YELP = res => {
    this.setState({ businesses: res.data })}
    getBusinesses = () => {
    API.getYelps()
      .then(res =>{this.YELP(res)})
      .catch(err => console.log(err));
  }

   componentDidMount() {
    this.getBusinesses();

  }


  render() {
    return (
      <div className="App">
      <div className="yelptitlebox">
      <h3 id="titleYelp">Yelp</h3>
       </div>
      <div id="scrapedarticles">

     {this.state.businesses.map(business => (
                        <a className="articlesYelp" href={business.url}>

                        <p className="articletextYelp">{business.name},  Rating:{business.rating}</p>

                        <img id="yelpimage" height="30px" width="30px" src={business.imgurl}/>

                        </a>
                ))}
</div>
      </div>
    );
  }






}

export default Yelp;
