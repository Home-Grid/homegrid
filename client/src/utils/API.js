import axios from "axios";

export default {
  // Gets all the news
  scrape: function() {
    return axios.get("/api/scrape");
  },

  scrapeCnn: function(){
  	return axios.get("/api/scrape/cnn");
  },

  scrapeFox: function(){
  	return axios.get("/api/scrape/fox");
  },
  getWords: function(){
  	return axios.get("/api/words");
  }

};
