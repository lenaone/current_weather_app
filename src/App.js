import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";
import SearchBar from "./component/searchBar";
import About from "./component/about";
import NavBar from "./component/navBar";
import DisplayWeather from "./component/displayWeather";
import "./App.css";

class App extends Component {

  state = {
    icon: "",
    searchQuery: "",
    geolocaton: { lat: "", lng: "" },
    location: "",
    temp: "",
    summary: "",
    searching: false
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        currentUser_geolocation: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
      this.handleSearchWeather(this.state.currentUser_geolocation)
    })
  }

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
    if (value != false) {
      this.setState({ searching: true })
      event.preventDefault();
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${value}&key=57319f72f5704387952e6050c87a1059`;
      axios.get(url).then(res => {
        let geolocation = res.data.results[0]["geometry"];
        this.handleSearchWeather(geolocation)
      });
    }
  };

  handleSearchWeather = (geolocation) => {
    const weatherUrl = `http://localhost:4567/api/forecast?lat=${
      geolocation.lat
      }&lng=${geolocation.lng}`;
    axios.get(weatherUrl).then(res => {
      this.setState({
        location: res.data.timezone,
        temp: res.data.currently.temperature,
        summary: res.data.currently.icon,
        icon: this.getIcon(res.data.currently.icon),
        searching: false
      });
    });
  }

  render() {
    const { icon, searchQuery, location, temp, summary, searching } = this.state;
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route
            exact
            path="/weather"
            render={() => (
              <div>
                <SearchBar
                  value={searchQuery}
                  onChange={this.handleChange}
                  handleSearch={this.handleSearch}
                />
                <DisplayWeather location={location} temp={temp} icon={icon} summary={summary} searching={searching} />
              </div>
            )}
          />
          <Route exact path="/about" render={() => <About />} />
          <Redirect from="/" to="/weather" />
        </Switch>
      </div>
    );
  }
}

export default App;
