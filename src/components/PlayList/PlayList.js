import React from "react";
import "./PlayList.css";
import TrackList from "../TrackList/TrackList";

class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleNameChange(e) {
    this.setState({ value: e.target.value });
  }
  async handleSubmit(e) {
    await this.props.onNameChange(this.state.value);
    await this.props.onSave(this.state.value);
    e.preventDefault();
  }
  render() {
    return (
      <div className="Playlist">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleNameChange}
        />
        <TrackList
          tracks={this.props.tracks}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />
        <button className="Playlist-save" onClick={this.handleSubmit}>
          SAVE TO SPOTIFY
        </button>
      </div>
    );
  }
}

export default PlayList;
