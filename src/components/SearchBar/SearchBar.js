import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    e.preventDefault();
    this.props.onTermChange(e.target.value);
  }
  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={this.handleChange}
          name="searchTerm"
          value={this.props.searchTerm}
        />
        <button className="SearchButton">SEARCH</button>
      </div>
    );
  }
}

export default SearchBar;
