import React, { Component } from 'react';
import API from "./utils/API";

class Yelp extends Component {
   state = {
    businesses:[]
  }



  Yelp = res => {
    this.setState({ words: res.data })}
    getBusinesses = () => {
    API.getYelps()
      .then(res =>{this.Yelp(res)})
      .catch(err => console.log(err));
  }

   componentDidMount() {
    this.getBusinesses();
  }




  render() {
    return (
      <div className="App">
        <div className="nav">
          <h3 id="wodtitle">Word of the Day</h3>
          <img onClick={() => this.getBusinesses()} id="redbutton" height="18px" src="https://images-na.ssl-images-amazon.com/images/I/6186VfIYnPL.png"/>
        </div>

        <div id="scrapedarticles">

        {this.state.businesses.map(business => (
          <p className="articles"><div className="articletext"> {business.id}</div></p>
        ))}

        </div>
      </div>
    );
  }

}

export default Yelp;
