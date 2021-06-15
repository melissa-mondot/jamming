import React from "react";
import "./Track.css";

class Track extends React.Component {
  // for rendering only without state
  renderAction(isRemoval) {
    if (isRemoval) {
      return <button className="Track-action"> - </button>;
    } else {
      return <button className="Track-action"> + </button>;
    }
  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.track_name}</h3>
          <p>
            {" "}
            {this.props.track.artist_name} | {this.props.track.album_name}{" "}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
