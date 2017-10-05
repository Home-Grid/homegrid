import React, { Component } from 'react';
import API from "./utils/API";
import { Input, FormBtn } from "./components/Form";
import Button from "./components/Button";


class Weather extends Component {
   state = {
    userinput: "",
    city: "",
    temp: "",
    high: "",
    low: "",
    description: "",
    icon: ""
  }

handleChange = (event) => {
  this.setState({userinput: event.target.value});
  event.preventDefault();
}

     WEATHER = (i) => {
      i.preventDefault();
      console.log("button clicked");
    API.getWeather(this.state.userinput)
      .then(res =>
        this.setState({ city: res.data.name, temp: res.data.main.temp, high: res.data.main.temp_max, low: res.data.main.temp_min, description:res.data.weather[0].description, icon: res.data.weather[0].icon })
      
      )
      .catch(err => console.log(err));
  };



  render() {
    return (
    
      <div className="App">
      <form>
      <Input className="thesaurussearch"
               value={this.state.userinput} placeholder="City" onChange={this.handleChange}
              />
                <Button className="searchbutton"
                onClick={this.WEATHER}
              >
              <p className="search">GO</p>
              </Button>
              </form>
      <h4 className="city">{this.state.city}</h4>
      <br/>
       <img className="pic" src={"http://openweathermap.org/img/w/" + this.state.icon + ".png"}/>
       <h2 className="temp">{this.state.temp + "F"}</h2>
      <p className="low">{"Low: " + this.state.low + "F"}</p>
       <p className="high">{"High: " + this.state.high + "F"}</p>
       <p className="description">{this.state.description}</p>
      </div>
    );

  }

}

export default Weather;