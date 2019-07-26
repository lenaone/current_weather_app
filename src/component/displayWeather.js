import React, { Component } from "react";

class DisplayWeather extends Component {

  displayLoading = () => {
    return (<i className="fa fa-spinner fa-5x fa-spin"></i>)
  }

  displayWeatherForecast = ({ location, temp, icon, summary }) => {
    return (
      <div>
        {location &&
          <div className="form">
            <div className="wrapper">
              <section className="graphic">
                <div className="icon">{icon}</div>
              </section>
              <section className="summary">{summary.replace(/[-]/g, " ")}</section>
              <section className="temperature">{temp.toFixed(1) + "°C"}</section>
              <section className="city">{location}</section>
            </div>
          </div>
        }
      </div>
    );
  }

  render() {
    const { location, temp, icon, summary, searching } = this.props;
    console.log(summary)
    return (
      searching ? this.displayLoading() : this.displayWeatherForecast({ location, temp, icon, summary })
    );
  }
}

export default DisplayWeather;
