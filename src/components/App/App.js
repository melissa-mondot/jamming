import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import PlayList from "../PlayList/PlayList";
import Spotify from "../../util/Spotify";
// onFocus={this.props.onAuthCheck}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: "",
      playlistTracks: [],
      searchTerm: "",
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.saveNewPlaylist = this.saveNewPlaylist.bind(this);
    this.search = this.search.bind(this);
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
      newList.push(uri.uri);
    });
    console.log(newList);
    return newList;
  }

  async saveNewPlaylist() {
    const jsonResponseName = await Spotify.saveNewPlaylistName(
      this.state.playlistName
    );
    const playlistId = await jsonResponseName.id;
    const playlistTracks = this.state.playlistTracks
      .map((track) => track.id)
      .map((uriList) => `spotify:track:${uriList}`);
    console.log(playlistTracks);

    const jsonResponseList = await Spotify.addPlaylistTracks(
      playlistTracks,
      playlistId
    );
    console.log(jsonResponseList);
    return jsonResponseList;
  }

  async search(term) {
    const jsonResponse = await Spotify.search(term);
    // console.log(jsonResponse);
    const spotifyTracks = await jsonResponse.tracks.items;

    this.setState({ searchResults: spotifyTracks });
  }

  async authCheck() {
    await Spotify.getAccessToken();
    await Spotify.getUserData();
  }

  componentDidMount() {
    // needs a set timeout so it stays on app before forwarding to auth
    this.authCheck();
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar onSearch={this.search} onAuthCheck={this.authCheck} />
          <div className="App-playlist">
            <SearchResults
              onAdd={this.addTrack}
              tracks={this.state.searchResults}
            />
            {console.log(this.state.playlistName)}
            <PlayList
              tracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.saveNewPlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// TODO: 
//  - Host live demo (netlify for variety?)
//  - Add new component to list user playlists
//  - Add ability to edit playlists
