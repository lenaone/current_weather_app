import React, { Component } from "react";

class Home extends Component {
  render() {
    const { onChange, value, handleSearch } = this.props;
    return (
      <div>
        <form className="form-group">
          <label>City:</label>
          <input
            type="text"
            className="form-control my-3"
            value={value}
            placeholder="Search..."
            onChange={onChange}
          />
          <button
            onClick={e => handleSearch(e, value)}
            className="btn btn-primary m-2"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Home;
