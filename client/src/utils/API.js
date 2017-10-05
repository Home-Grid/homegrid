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
  },
  getYelps: function(){
    return axios.get("/api/yelps");
  },
  getYelpSearch: function(userinputTerm,userinputCity){
    return axios.get("/api/yelps/"+userinputTerm+"/"+userinputCity);
  },

  getWord: function(userinput){
    var config = {
    headers: {'X-Mashape-Key': 'XDgzApQJeUmshVnoSPfjk0G13aOXp14JCJTjsnh8wZRVUxezbf',
            'Accept': 'application/json'}
          }
    return axios.get("https://wordsapiv1.p.mashape.com/words/" + userinput + "/synonyms", config);
  },

  getDefinition: function(userinput){
    var config = {
    headers: {'X-Mashape-Key': 'XDgzApQJeUmshVnoSPfjk0G13aOXp14JCJTjsnh8wZRVUxezbf',
            'Accept': 'application/json'}
}
    return axios.get("https://wordsapiv1.p.mashape.com/words/" + userinput + "/definition", config);

  },

  getWeather: function(userinput){
    return axios.get("https://api.openweathermap.org/data/2.5/weather?q=" + userinput + "&units=imperial&APPID=e0bcadb175fe4fad12041d2069d72cca")
  }
};
