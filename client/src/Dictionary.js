import React, { Component } from 'react';
import API from "./utils/API";
import { Input, FormBtn } from "./components/Form";
import Button from "./components/Button";


class Dictionary extends Component {
   state = {
    word: "dictionary",
    searchedWord: "",
    definitions: [],
    loading: false,
  }

handleChange = (event) => {
  this.setState({word: event.target.value});
}

  componentDidMount(){
    this.WORDS1();
  }
 
     WORDS1 = (i) => {
                      if (i){
      i.preventDefault();
    }
      this.setState({loading: true, searchedWord: this.state.word, definitions: []})

    API.getDefinition(this.state.word)
      .then(res =>
        this.setState({ loading: false, word: res.data.word, definitions: res.data.definition })

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
      
      {(this.state.loading == true) ? (<div class="Word"><img height="30px" className ="loading" src="https://static.colorofchange.org/static/v3/images/loading-circle.gif"/></div>)
      :(      <div class="Word">
      <h3 className="theword">{this.state.searchedWord}</h3>
<div className="theresults">
   {this.state.definitions.map(definition => (
      <p className="each1">• {definition}</p>   
      ))}
       </div>

</div>)}
      </div>
    );

  }

}

export default Dictionary;