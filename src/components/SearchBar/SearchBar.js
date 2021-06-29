import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    this.props.onSearch(this.state.value).then(this.setState({ value: "" }));
    e.preventDefault();
  }
  render() {
    return (
      <div className="SearchBar">
        <input
          placeholder="Enter A Song, Album, or Artist"
          value={this.state.value}
          onChange={this.handleChange}
          onFocus={this.props.onAuthCheck}
          name="searchTerm"
          type="text"
        />
        <button
          className="SearchButton"
          type="submit"
          onClick={this.handleSubmit}
        >
          SEARCH
        </button>
      </div>
    );
  }
}

export default SearchBar;
