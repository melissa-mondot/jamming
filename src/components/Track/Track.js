import React from "react";
import "./Track.css";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
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
    if (this.props.onAdd) {
      this.props.onAdd(this.props.track);
    }
  }
  removeTrack() {
    this.props.onRemove(this.props.track);
  }
  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          {/* TODO: function If track name/info is longer than x chars, truncate at x  */}

          <h3>{this.props.track.name}</h3>
          <p>
            {" "}
            {this.props.track.artists[0].name} | {this.props.track.album.name}{" "}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Track;
