import React, { Component } from 'react';
import API from "./utils/API";

class News extends Component {
   state = {
    title: "",
    link: ""
  }
   componentDidMount() {
    this.scrapeNews();
  }
  Poop = res => {
        console.log(res.data);
        console.log("poop");
        this.setState({ title: res.data[0].title, link: res.data[0].link  })}
    scrapeNews = () => {
    API.scrape()
      .then(res =>{this.Poop(res)})

      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
      <ul>
      <li>
      <p><a href={this.state.link}>
        {this.state.title}
        </a>
        </p>
      </li>
      </ul>

      </div>
    );
  }
}

export default News;
