import React, { Component } from 'react';
import API from "./utils/API";

class News extends Component {
   state = {
    articles:[]
  }

      CNN = res => {
        this.setState({ articles: res.data })}
    scrapeCNN = () => {
    API.scrapeCnn()
      .then(res =>{this.CNN(res)})

      .catch(err => console.log(err));
  }

        FOX = res => {
        this.setState({ articles: res.data })}
    scrapeFOX = () => {
    API.scrapeFox()
      .then(res =>{this.FOX(res)})

      .catch(err => console.log(err));
  }

   componentDidMount() {
    this.scrapeCNN();
  }
   

  NY = res => {
        this.setState({ articles: res.data })}
    scrapeNews = () => {
    API.scrape()
      .then(res =>{this.NY(res)})

      .catch(err => console.log(err));
  }


  render() {
    return (
      <div className="App">
      <div className="nav">
      <h3 id="newstitle">NEWS</h3>
       <img onClick={() => this.scrapeCNN()} id="cnnlogo" height="18px" src="https://nppa.org/sites/default/files/CNN%20LOGO%20new.png"/>
      <img onClick={() => this.scrapeNews()} id="nylogo" height="20px" src="https://www.insidehighered.com/sites/default/server_files/media/nyt-t-logo.png"/>
      <img onClick={() => this.scrapeFOX()} id="foxlogo" height="21px" src="https://lh3.googleusercontent.com/l8woCU1YmtyKlkNOh2TNvQJj8P78Rm56JljLDUj-83YzD3OU6UCvqM-vzqpBOkOrW2Q=w300"/>
      </div>
      <div id="scrapedarticles">
  
     {this.state.articles.map(article => (
                      
                        <p class="articles">◉<a class="articletext" href={article.link}> {article.title}</a></p> 
                     
                ))}
</div>
      </div>
    );
  }

}

export default News;
