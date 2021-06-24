const authApiUrl = `https://accounts.spotify.com/authorize`;
const clientId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
let redirectUri = process.env.REACT_APP_REDIRECT_URI;
const scopes = ["playlist-modify-public", "playlist-modify-private"];
let userAccessToken;

const authEndpoint = `${authApiUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const searchTrackEndpoint = `https://api.spotify.com/v1/search?type=track&q=`;

const Spotify = {
  getAccessToken() {
    if (userAccessToken) {
      return userAccessToken;
    }
    // check for matching token/time in url
    // captures everything after expires_in until encounters &
    if (
      userAccessToken === undefined &&
      window.location.href.includes("access_token") &&
      window.location.href.includes("expires_in")
    ) {
      let userAccessTokenMatch =
        window.location.href.match(/access_token=([^&]*)/);
      let tokenExpiresMatch = window.location.href.match(/expires_in=([^&]*)/);
      userAccessToken = userAccessTokenMatch;
      console.log(userAccessToken);
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
      window.location.replace(authEndpoint);
    }
  },
  // TODO: search query doesn't consume data
  // works if hard code token
  search(term) {
    console.log(authEndpoint);
    const options = {
      method: "GET",
      headers: {
        // Authorization: `Bearer ${userAccessToken}`,
        Authorization: `Bearer BQCenlGpreW3FdTMJoui4KOnJ9vPKLQzyYbhnGYwO_zOYZ3aZSngHipYuykbaUPeNZNLyS0tu2LdHln052DCE6oXLSSYXJkHk_JP0Myc4jALtn1VcTUGGAmF-ioJLagdKNFDfypZN0vsM_xKrVrpOLrPSxahN0lelDkuSakUx4rF-HcRbppr_lpAN6XKQNpRKYy88BcnyvKxqxJ9eCfwplvxeI-Y`,
      },
    };
    fetch(searchTrackEndpoint + term, options)
      .then((res) => res.json())
      .then((res) => console.log(res));
  },
};

export default Spotify;
