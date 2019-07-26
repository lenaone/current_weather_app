import React, { Component } from "react";

class SearchBar extends Component {
  render() {
    const { onChange, value, handleSearch } = this.props;
    return (
      <div>
        <h1 className="title">Current Weather</h1>
        <div className="search-bar">
          <form className="form-group">
            <input
              type="text"
              className="form-control my-3"
              value={value}
              placeholder="Search City..."
              onChange={onChange}
            />
            <button
              onClick={e => handleSearch(e, value)}
              className="btn btn-primary m-3"
            >
              Search
          </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
