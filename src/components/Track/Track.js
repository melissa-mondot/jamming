import React from "react";
import "./Track.css";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
  }
  renderAction() {
    if (this.props.isRemoval === true) {
      return <button className="Track-action"> - </button>;
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
    console.log(this.props);
    this.props.onAdd(this.props.track);
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
