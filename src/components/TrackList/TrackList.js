import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

class TrackList extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {console.log(this.props)}
        {this.props.tracks.map((track) => {
          return (
            <Track key={track.id} track={track} onAdd={this.props.addTrack} />
          );
        })}
      </div>
    );
  }
}

export default TrackList;
