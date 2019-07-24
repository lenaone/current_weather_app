import React, { Component } from "react";

class DisplayWeatherForm extends Component {
  render() {
    const { location, temp, icon } = this.props;
    const loading = "Loading...";
    console.log(icon);
    return (
      <div className="wrapper">
        <section className="graphic">
          <div className="icon">{icon ? icon : "🌧"}</div>
        </section>
        <section className="temperature">{temp ? temp : loading}</section>
        <section className="city">{location}</section>
      </div>
    );
  }
}

export default DisplayWeatherForm;
