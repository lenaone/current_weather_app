import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";
import Home from "./component/home";
import About from "./component/about";
import NavBar from "./component/navBar";
import DisplayWeatherForm from "./component/displayWeatherForm";
import "./App.css";

class App extends Component {

  state = {
    icon: '',
    searchQuery: "",
    geolocaton: { lat: "", lng: "" },
    location: "",
    temp: ""
  };

  getIcon = (iconName) => {
    return {
      "rain": "🌧",
      "partly-cloudy-day": "🌤",
      "partly-cloudy-night": "🌙",
      "wind": "🌬",
      "cloudy": "☁",
      "clear-day": "☀",
      "clear-night": "🌚",
      "thunderstorm": "⛈",
      "tornado": "🌪",
      "fog": "🌫",
      "snow": "❄",
      "sleet": "🌨"
    }[iconName];
  }

  handleChange = event => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSearch = (event, value) => {
    event.preventDefault();
    // const icons = generateIcons(icons);
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${value}&key=57319f72f5704387952e6050c87a1059`;
    axios.get(url).then(res => {
      let geolocaton = res.data.results[0]["geometry"];
      const weatherUrl = `http://localhost:4567/api/forecast?lat=${
        geolocaton.lat
        }&lng=${geolocaton.lng}`;
      axios.get(weatherUrl).then(res => {
        this.setState({
          location: res.data.timezone,
          temp: res.data.currently.temperature,
          icon: this.getIcon(res.data.currently.icon)
        });
      });
    });
  };

  render() {
    const { icon, searchQuery, location, temp } = this.state;
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            exact
            path="/home"
            render={() => (
              <Home
                value={searchQuery}
                onChange={this.handleChange}
                handleSearch={this.handleSearch}
              />
            )}
          />
          <Route
            exact
            path="/weather"
            render={() => (
              <DisplayWeatherForm location={location} temp={temp} icon={icon} />
            )}
          />
          <Route exact path="/about" render={() => <About />} />
        </Switch>
      </div>
    );
  }
}

export default App;
