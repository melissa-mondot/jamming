import React from "react";
import "./PlayList.css";
import TrackList from "../TrackList/TrackList";

class PlayList extends React.Component {
  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(e) {
    e.preventDefault();
    this.props.onNameChange(e.target.value);
  }
  render() {
    return (
      <div className="Playlist">
        <input type="text" onChange={this.handleNameChange} />
        <TrackList
          tracks={this.props.tracks}
          onRemove={this.props.onRemove}
          isRemoval={true}
        />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default PlayList;
