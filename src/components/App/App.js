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
          uri: "slak33nr",
          artist_name: "artist1",
          track_name: "track1",
          album_name: "album1",
        },
        {
          id: 2,
          uri: "spaom2NNJ",
          artist_name: "artist2",
          track_name: "track2",
          album_name: "album2",
        },
        {
          id: 3,
          uri: "poojnu9oih",
          artist_name: "artist3",
          track_name: "track3",
          album_name: "album3",
        },
        {
          id: 4,
          uri: "fhtfae5443",
          artist_name: "artist4",
          track_name: "track4",
          album_name: "album4",
        },
        {
          id: 5,
          uri: "asj5ahyje24",
          artist_name: "artist5",
          track_name: "track5",
          album_name: "album5",
        },
      ],
      playlistName: "Test Playlist",
      playlistTracks: [
        {
          id: 3,
          uri: "poojnu9oih",
          artist_name: "artist3",
          track_name: "track3",
          album_name: "album3",
        },
        {
          id: 4,
          uri: "fhtfae5443",
          artist_name: "artist4",
          track_name: "track4",
          album_name: "album4",
        },
      ],
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
  }

  // Check if track is in current playlist, if yes, do nothing
  // else add track to the end of the playlist array
  // then set state with updated playlist
  addTrack(track) {
    if (!this.state.playlistTracks.includes(track)) {
      this.setState((prevState) => ({
        playlistTracks: [...prevState.playlistTracks, track],
      }));
    }
  }

  // Check if track is in current playlist, if no, do nothing
  // else remove track from the playlist array
  // then set state with updated playlist
  removeTrack(track) {
    if (this.state.playlistTracks.includes(track)) {
      this.setState((prevState) => ({
        playlistTracks: prevState.playlistTracks.filter(
          (song) => song !== track
        ),
      }));
    }
  }

  // Take in target value from child component
  // set playlistName state with value
  updatePlaylistName(name) {
    this.setState(() => ({
      playlistName: name,
    }));
  }

  // map through playlist, all uris to new array
  savePlaylist() {
    let newList = [];
    this.state.playlistTracks.forEach((uri) => {
      newList.push(uri);
    });
    console.log(newList);
    return newList;
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
            <PlayList
              tracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// TODO:
// Not working properly
// Nothing..for the moment
