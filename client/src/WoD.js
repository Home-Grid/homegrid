import React, { Component } from 'react';
import API from "./utils/API";

class WoD extends Component {
   state = {
    words:[]
  }



  WOD = res => {
    this.setState({ words: res.data })}
    getWords = () => {
    API.getWords()
      .then(res =>{this.WOD(res)})
      .catch(err => console.log(err));
  }

   componentDidMount() {
    this.getWords();
  }




  render() {
    return (
      <div className="App">
        <div className="nav">
          <h3 id="wodtitle">Word of the Day</h3>
          <img onClick={() => this.getWords()} id="redbutton" height="18px" src="https://images-na.ssl-images-amazon.com/images/I/6186VfIYnPL.png"/>
        </div>

        <div id="scrapedarticles">

        {this.state.words.map(word => (
          <p className="articles"><div className="articletext"> {word.word}<br/>{word.definition}</div></p>
        ))}

        </div>
      </div>
    );
  }

}

export default WoD;
