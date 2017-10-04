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
        </div>

        <div id="wordbody">

        {this.state.words.map(word => (
          <p className="word">{word.word}<br/>{word.definition}</p>
        ))}

        </div>
      </div>
    );
  }

}

export default WoD;
