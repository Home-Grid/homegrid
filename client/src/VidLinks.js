import React, { Component } from 'react';
import API from "./utils/API";

class VidLinks extends Component {



  render() {
    return (
      <div className="App">
      <div className="nav">
      <h5 id="webtvtitle">Web TV</h5>
       </div>
       <img alt="Netflix"  id="netflix" height="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIBFD1RslWDAShV8mMbNDd3UrlZIHN8y5hY9bR0HalnGxVu4UV"/>
       <br/>
      <img alt="HBOGo"  id="hbonow" height="35px" src="https://services.tegrazone.com/sites/default/files/app-icon/hbogo_appicon.png"/>
      <br/>
      <img  alt="AmazonVideo"  id="amazonvideo" height="55px" src="https://pbs.twimg.com/profile_images/786074448663306240/aSttiFzC.jpg"/>

      <div id="scrapedarticles">


</div>
      </div>
    );
  }

}

export default VidLinks;
