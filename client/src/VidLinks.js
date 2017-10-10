import React, { Component } from 'react';
import API from "./utils/API";

class VidLinks extends Component {



  render() {
    return (
      <div className="links">
      <a target="_blank" href="https://www.netflix.com/"> <img className="weblinks" alt="Netflix"  id="netflix" height="60px" src="https://cdn.iconverticons.com/files/png/d893c93854b4532a_256x256.png"/></a>
      <a target="_blank" href="https://play.hbogo.com/"><img className="weblinks" alt="HBOGo"  id="hbonow" height="60px" src="https://services.tegrazone.com/sites/default/files/app-icon/hbogo_appicon.png"/></a>
      <a target="_blank" href="https://www.amazon.com/Amazon-Video/b?node=2858778011"><img className="weblinks" alt="AmazonVideo"  id="amazonvideo" height="60px" src="http://media.idownloadblog.com/wp-content/uploads/2013/06/Amazon-Instant-Video-for-iOS-app-icon-small.png"/></a>
     <a target="_blank" href="https://www.hulu.com/"><img className="weblinks" src="http://media.idownloadblog.com/wp-content/uploads/2014/10/hulu-plus-1.png" height="60px"/></a>
      <a target="_blank" href="https://play.google.com/store?hl=en"><img className="weblinks" src="http://icons.iconarchive.com/icons/alecive/flatwoken/512/Apps-Google-Play-icon.png" height="60px"/></a>
      <a target="_blank" href="https://www.youtube.com/"><img className="weblinks" src="https://cdn0.iconfinder.com/data/icons/social-flat-rounded-rects/512/youtube_v2-512.png" height="60px"/></a>
      <a target="_blank" href="https://go.twitch.tv/"><img className="weblinks" src="https://vignette3.wikia.nocookie.net/logopedia/images/8/83/Twitch_icon.svg/revision/latest?cb=20140727180700" height="60px"/></a>
      <a target="_blank" href="http://www.espn.com/watch/"><img className="weblinks" src="https://s3.amazonaws.com/piktochartv2-dev/v2/uploads/cb56a42f-ac5d-417d-ba5b-5e79eb5c013f/ada0dcf83ac3a3b81fdd8df44fa82b35cc244566_original.png" height="60px"/></a>
      </div>
    );
  }

}

export default VidLinks;
