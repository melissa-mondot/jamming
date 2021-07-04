let userAccessToken;
let userSpotifyId;

const authApiUrl = `https://accounts.spotify.com/authorize`;
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectUri = process.env.REACT_APP_REDIRECT_URI;
const scopes = ["playlist-modify-public", "playlist-modify-private"];
const authEndpoint = `${authApiUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
const spotifyWebApi = `https://api.spotify.com/v1`;

const Spotify = {
  getAccessToken() {
    if (userAccessToken) {
      return userAccessToken;
    }
    // check for matching token/time in url
    // captures everything after expires_in until encounters &
    if (
      !userAccessToken &&
      window.location.href.includes("access_token") &&
      window.location.href.includes("expires_in")
    ) {
      let userAccessTokenMatch =
        window.location.href.match(/access_token=([^&]*)/);
      let tokenExpiresMatch = window.location.href.match(/expires_in=([^&]*)/);
      userAccessToken = userAccessTokenMatch[1];
      // force window to clear user token at time specified by expires_in(returned in seconds)
      window.setTimeout(
        () => (userAccessToken = ""),
        tokenExpiresMatch[1] * 1000
      );
      window.history.pushState("Access Token", null, "/");
    } else {
      // If no token and no info in the url, then point to auth link
      window.location = authEndpoint;
    }
  },
  async getUserData() {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userAccessToken}`,
      },
    };
    const response = await fetch(spotifyWebApi + "/me", options);
    const data = await response.json();
    userSpotifyId = data.id;

    return userSpotifyId;
  },
  // Get track data
  async search(term) {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${userAccessToken}`,
      },
    };
    const response = await fetch(
      spotifyWebApi + "/search?type=track&q=" + term,
      options
    );
    const data = await response.json();

    return data;
  },
  async saveNewPlaylistName(name) {
    console.log({ userSpotifyId });
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userAccessToken}`,
      },
      body: JSON.stringify({ name: name }),
    };
    const response = await fetch(
      spotifyWebApi + "/users/" + userSpotifyId + "/playlists/",
      options
    );
    const data = await response.json();

    return data;
  },
  async addPlaylistTracks(uris, playlistId) {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userAccessToken}`,
      },
      body: JSON.stringify({ uris: uris }),
    };
    const response = await fetch(
      `${spotifyWebApi}/playlists/${playlistId}/tracks`,
      options
    );
    const data = await response.json();
    console.log(data);
    return data;
  },
};

export default Spotify;
