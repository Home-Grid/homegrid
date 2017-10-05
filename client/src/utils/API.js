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

  getWord: function(userinput){
    var config = {
    headers: {'X-Mashape-Key': 'XDgzApQJeUmshVnoSPfjk0G13aOXp14JCJTjsnh8wZRVUxezbf',
            'Accept': 'application/json'}
}
    return axios.get("https://wordsapiv1.p.mashape.com/words/" + userinput + "/synonyms", config);
  }
};
