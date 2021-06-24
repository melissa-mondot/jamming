const authEndpoint = `https://accounts.spotify.com/authorize`;
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
let redirectUri = process.env.REACT_APP_REDIRECT_URI;
const scopes = ["playlist-modify-public", "playlist-modify-private"];
let userAccessToken;

const endpointUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

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
      userAccessToken = userAccessTokenMatch;
      // force window to clear user token at time specified by expires_in(returned in seconds)
      window.setTimeout(() => (userAccessToken = ""), tokenExpiresMatch * 1000);
      window.history.pushState("User Access Token", null, "/");
    }
    // If no token and no info in the url, then point to auth link
    if (
      userAccessToken === "" &&
      !window.location.href.includes("access_token") &&
      !window.location.href.includes("expires_in")
    ) {
      window.location.replace(endpointUrl);
    }
  },
  search(term) {},
};

export default Spotify;
