import React from "react";
import "./PlayList.css";
import TrackList from "../TrackList/TrackList";

class PlayList extends React.Component {
  render() {
    return (
      <div className="Playlist">
        <input value="New Playlist" />
        <TrackList tracks={this.props.tracks} onRemove={this.props.onRemove} />
        <button className="Playlist-save">SAVE TO SPOTIFY</button>
      </div>
    );
  }
}

export default PlayList;
