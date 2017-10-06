import React, { Component } from 'react';
import API from "./utils/API";
import { Input, FormBtn } from "./components/Form";
import Button from "./components/Button";


class Gif extends Component {
   state = {
   srcs: [],
   userinput: "gif"
  }


handleChange = (event) => {
  this.setState({userinput: event.target.value});
}

  componentDidMount(){
    this.GIF();
  }

     GIF = (i) => {
         if (i){
      i.preventDefault();
    }
  
      console.log("button clicked");
      console.log(this.state.srcs)
    API.getGifs(this.state.userinput)
      .then(res =>
        this.setState({ srcs: res.data.data})
      
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
    
      <div className="App">
       <div className="t-nav2">
      <h1 className="title3">Search Gifs</h1>
      <form>
      <Input className="gifsearch"
               value={this.state.userinput} placeholder="Gif" onChange={this.handleChange}
              />
                <Button className="searchbutton1"
                onClick={this.GIF}
              >
              <p className="search">GO</p>
              </Button>
              </form>
      </div>

                {this.state.srcs.map((src) => (
                  <div className ="allGifs">
   <a href={src.url} target="_blank"> <img className="gifs" height="80px" src={src.images.downsized.url}/>   </a></div>
      ))}

      </div>
    );

  }

}

export default Gif;