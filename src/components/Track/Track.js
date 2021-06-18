import React from "react";
import "./Track.css";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.addTrack.bind(this);
  }
  renderAction() {
    if (this.props.isRemoval === true) {
      return (
        <button className="Track-action" onClick={this.removeTrack}>
          {" "}
          -{" "}
        </button>
      );
    } else {
      return (
        <button className="Track-action" onClick={this.addTrack}>
          {" "}
          +{" "}
        </button>
      );
    }
  }
  addTrack() {
    console.log(this.props.isRemoval);
    if (this.props.isRemoval === false) {
      this.props.onAdd(this.props.track);
    }
  }
  removeTrack() {
    console.log(this.props.isRemoval);
    // if isRemoval = true
    if (this.props.isRemoval === true) {
      this.props.onRemove(this.props.track);
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
