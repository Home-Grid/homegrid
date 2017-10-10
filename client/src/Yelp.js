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
      <img height="60px" width="100px" className="yelptitle" src="https://s3-media3.fl.yelpcdn.com/assets/srv0/styleguide/24e1fe240f00/assets/img/brand_guidelines/yelp_fullcolor_outline.png"/>


       </div>
       <form id="formborder">
               <Input className="thesaurussearch"
                value={this.state.searchTerm} placeholder="Coffee" onChange={this.handleChangeTerm}
               />
               <Input className="thesaurussearch"
              value={this.state.searchCity} placeholder="Newport Beach" onChange={this.handleChangeCity}
               />

                 <Button className="yelpBTN"
                 onClick={this.RETRIEVE}
               >
               <img id='yelpbutton' height="18px" width="18px" src='http://rosegarciabeauty.com/wp-content/uploads/2013/09/HIRES-Yelp.png'/>
               </Button>
       </form>
      <div id="yelp">

     {this.state.businesses.map(business => (
      <div className="eachresult">
       <a target="_blank" className="articlesYelp yelplink" href={business.url}>

       <img class ="yelppics " id={business.name} height="50px" width="50px" src={business.imgurl}/>

                        <p className="articletextYelp yelplink">{business.name}</p>
                         <p className="articletextYelp2 yelplink">  Rating: {business.rating}</p>
                        </a>
                        </div>
                ))}
</div>
      </div>
    );
  }


}

export default Yelp;
