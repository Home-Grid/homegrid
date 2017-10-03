import axios from "axios";

export default {
  // Gets all the news
  scrape: function() {
    return axios.get("/api/scrape");
  }
};
