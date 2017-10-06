import React, { Component } from 'react';
import GiphySelect from 'react-giphy-select';
import 'react-giphy-select/lib/styles.css';
 
export default class Example extends Component {
  render() {
    return (
      <div id='giphy'>
      <GiphySelect  />
      </div>
    );
  }
}