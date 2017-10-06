import React, { Component } from 'react';
import API from "./utils/API";
import { Input, FormBtn } from "./components/Form";
import Button from "./components/Button";


class Thesaurus extends Component {
   state = {
    word: "thesaurus",
    searchedWord:"",
    synonyms: [],
    loading: false
  }

handleChange = (event) => {
  this.setState({word: event.target.value});
}

  componentDidMount(){
    this.WORDS();
  }
 
     WORDS = (i) => {
                      if (i){
      i.preventDefault();
    }
      this.setState({loading: true, searchedWord: this.state.word, synonyms: []})
      console.log("button clicked");
    API.getWord(this.state.word)
      .then(res =>
        this.setState({loading: false, word: res.data.word, synonyms: res.data.synonyms })
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
              
      {(this.state.loading == true) ? (<div class="Word"><img height="30px" className ="loading" src="https://static.colorofchange.org/static/v3/images/loading-circle.gif"/></div>) :(
    <div id="Word">
     <h3 className="theword">{this.state.searchedWord}</h3>
     <br/>
     <br/>
<div className="theresults">
       {this.state.synonyms.map(synonym => (
      <p className="each">{synonym},</p>   
      ))}
       </div>

</div>)}
      </div>
    );

  }

}

export default Thesaurus;