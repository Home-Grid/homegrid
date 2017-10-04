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

     {this.state.businesses.map(article => (
                        <p className="articlesYelp">◉<p className="articletextYelp">{article.name} {article.id}</p></p>
                ))}
</div>
      </div>
    );
  }






}

export default Yelp;
