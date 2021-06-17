import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          id: 1,
          artist_name: "artist1",
          track_name: "track1",
          album_name: "album1",
        },
        {
          id: 2,
          artist_name: "artist2",
          track_name: "track2",
          album_name: "album2",
        },
        {
          id: 3,
          artist_name: "artist3",
          track_name: "track3",
          album_name: "album3",
        },
        {
          id: 4,
          artist_name: "artist4",
          track_name: "track4",
          album_name: "album4",
        },
        {
          id: 5,
          artist_name: "artist5",
          track_name: "track5",
          album_name: "album5",
        },
      ],
      playlistName: "Test Playlist",
      playlistTracks: [
        {
          id: 3,
          artist_name: "artist3",
          track_name: "track3",
          album_name: "album3",
        },
        {
          id: 4,
          artist_name: "artist4",
          track_name: "track4",
          album_name: "album4",
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
  }
  addTrack(track) {
    // Check if track id is in current playlist, if yes, do nothing
    // else add track to the end of the playlist array
    if (!this.state.playlistTracks.includes(track.id)) {
      // then set state with updated playlist
      this.setState((prevState) => ({
        playlistTracks: [...prevState.playlistTracks, track],
      }));
    }
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              onAdd={this.addTrack}
              tracks={this.state.searchResults}
            />
            <PlayList tracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
