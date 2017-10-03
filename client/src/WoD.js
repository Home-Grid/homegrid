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
          <h3 id="newstitle">Word of the Day</h3>
          <img onClick={() => this.getWords()} id="cnnlogo" height="18px" src="https://nppa.org/sites/default/files/CNN%20LOGO%20new.png"/>
        </div>

        <div id="scrapedarticles">

        {this.state.words.map(word => (
          <p className="articles"><a className="articletext" href={word.word}> {word.definition}</a></p>
        ))}

        </div>
      </div>
    );
  }

}

export default WoD;
