import React, { Component } from 'react';
import API from "./utils/API";
import { Input, FormBtn } from "./components/Form";
import Button from "./components/Button";


class Dictionary extends Component {
   state = {
    word: "",
    definitions: []
  }

handleChange = (event) => {
  this.setState({word: event.target.value});
}
 
     WORDS1 = (i) => {
      i.preventDefault();
      console.log("button clicked");
    API.getDefinition(this.state.word)
      .then(res =>
        this.setState({ word: res.data.word, definitions: res.data.definition })
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
    
      <div className="App">
      <div className="t-nav1">
      <h1 className="title">Dictionary</h1>
      <form>
              <Input className="thesaurussearch"
               value={this.state.word} placeholder="Word" onChange={this.handleChange}
              />
                <Button className="searchbutton"
                onClick={this.WORDS1}
              >
              <p className="search">GO</p>
              </Button>
              </form>
              </div>
      <div id="Word">
      <h3 className="theword">{this.state.word}</h3>
<div className="theresults">
   {this.state.definitions.map(definition => (
      <p className="each1">• {definition}</p>   
      ))}
       </div>

</div>
      </div>
    );

  }

}

export default Dictionary;