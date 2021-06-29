# Jamming

![Jamming](https://github.com/melissa-mondot/jamming/blob/master/src/assets/img/desktop_screenshot.png?raw=true)
![Jamming_mobile](https://github.com/melissa-mondot/jamming/blob/master/src/assets/img/mobile_screenshot.png?raw=true)
![Jamming_mobile2](https://github.com/melissa-mondot/jamming/blob/master/src/assets/img/mobile_screenshot2.png?raw=true)

A partial Spotify clone, using Spotify Web API

<!-- more description needed -->

## Usage

1. Run `npm i` in terminal to install packages
2. Run `npm start` to start up server
3. A Spotify login and developer account will be necessary to use this app
   - [Spotify New Account Registration](https://www.spotify.com/us/signup/)
   - [Spotify Developer Quick Start Docs](https://developer.spotify.com/documentation/web-api/quick-start/)
4. On component mount the user will be redirected to the Spotify Authorization page. This app uses Spotify's Implicit Grant Flow for authorization.
   [Spotify Implicit Grant Flow](https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow)

![Spotify Authentication](https://github.com/melissa-mondot/jamming/blob/master/src/assets/img/spotify_auth_screen.png?raw=true)

### Development

Want to contribute? Great!

To fix a bug or enhance an existing module, follow these steps:

- Fork the repo
- Create a new branch (`git checkout -b improve-feature`)
- Make the appropriate changes in the files
- Add changes to reflect the changes made
- Commit your changes (`git commit -am 'Improve feature'`)
- Push to the branch (`git push origin improve-feature`)
- Create a Pull Request

### Bug / Feature Request

If you find a bug (the website couldn't handle the query and / or gave undesired results), kindly open an issue [here](https://github.com/melissa-mondot/Jamming/issues/new) by including your search query and the expected result.

If you'd like to request a new function, feel free to do so by opening an issue [here](https://github.com/melissa-mondot/jamming/issues/new). Please include sample queries and their corresponding results.

## Built with

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - The Fetch API provides an interface for fetching resources (including across the network).
- [Spotify Web API](https://developer.spotify.com/documentation/web-api/) - Based on simple REST principles, the Spotify Web API endpoints return JSON metadata about music artists, albums, and tracks, directly from the Spotify Data Catalogue.

## To-Do

- Add dev dependencies to README
- View and edit all user playlists

## Team

[![Melissa Mondot](https://avatars.githubusercontent.com/u/31637708?v=3&s=144)](https://github.com/melissa-mondot)

[Melissa Mondot](https://github.com/melissa-mondot)

## [License](https://github.com/melissa-mondot/jamming/blob/master/License.md)

MIT © [Melissa Mondot](https://github.com/melissa-mondot)
