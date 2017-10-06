import React, { Component } from 'react';
import API from "./utils/API";
import Button from "./components/Button";


class WoD extends Component {
   state = {
    words:[]

  }



  WOD = res => {
    this.setState({ words: res.data,
     })}
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
        <div className="wodtitlebox">
          <h3 id="wodtitle" className= "center-block">
          Vocabulary Builder
          </h3>
          <Button onClick={this.getWords}
            type="warning"
            className="input-sm center-block"

            >
            New Word
          </Button>
        </div>


        <div id="wordbody">

        {this.state.words.map(word => (
          <p className="word">
          <h4>{word.word}</h4><h6>{word.definition}</h6>
          </p>
        ))}

        </div>
      </div>
    );
  }

}

export default WoD;
