import React, { Component } from 'react';
import API from "./utils/API";
import { Input, FormBtn } from "./components/Form";
import Button from "./components/Button";

class Yelp extends Component {
   state = {
    businesses:[],
    searchTerm:"",
    searchCity:""
  }

  handleChangeTerm = (event) => {
    this.setState({searchTerm: event.target.value});
  }
  handleChangeCity = (event) => {
    this.setState({searchCity: event.target.value});

  }

  YELP = res => {
    this.setState({ businesses: res.data })}
    getBusinesses = () => {
    API.getYelps()
      .then(res =>{this.YELP(res)})
      .catch(err => console.log(err));
  }

    RETRIEVE = (i) => {
     i.preventDefault();
     console.log("button clicked");
   API.getYelpSearch(this.state.searchTerm,this.state.searchCity)
     .then(res =>
       this.setState({ businesses: res.data})
     )
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
       <form>
               <Input className="thesaurussearch"
                value={this.state.searchTerm} placeholder="Coffee" onChange={this.handleChangeTerm}
               />
               <Input className="thesaurussearch"
              value={this.state.searchCity} placeholder="Newport Beach" onChange={this.handleChangeCity}
               />

                 <Button id="yelpBTN"
                 onClick={this.RETRIEVE}
               >
               <p>!</p>
               </Button>
       </form>
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
