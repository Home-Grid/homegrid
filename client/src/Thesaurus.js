import React, { Component } from 'react';
import API from "./utils/API";
import { Input, FormBtn } from "./components/Form";
import Button from "./components/Button";


class Thesaurus extends Component {
   state = {
    word: "",
    synonyms: []
  }

handleChange = (event) => {
  this.setState({word: event.target.value});
}
 
     WORDS = (i) => {
      i.preventDefault();
      console.log("button clicked");
    API.getWord(this.state.word)
      .then(res =>
        this.setState({ word: res.data.word, synonyms: res.data.synonyms })
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
    
      <div className="App">
      <div className="t-nav">
      <h1 className="title">Thesaurus</h1>
      <form>
              <Input className="thesaurussearch"
               value={this.state.word} placeholder="Word" onChange={this.handleChange}
              />
                <Button className="searchbutton"
                onClick={this.WORDS}
              >
              <p className="search">GO</p>
              </Button>
              </form>
              </div>
      <div id="Word">
      <h3 className="theword">{this.state.word}</h3>
<div className="theresults">
       {this.state.synonyms.map(synonym => (
      <p className="each">{synonym}</p>   
      ))}
       </div>

</div>
      </div>
    );

  }

}

export default Thesaurus;