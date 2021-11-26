const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function() {

    for (const list in this.playlists) {

      const tracksNum = this["playlists"][list]["tracks"].length;
    
      console.log(`${list}: ${this["playlists"][list]["name"]} - ${tracksNum} tracks`);
  
    }
  },
  printTracks: function() {
    for (const list in this["tracks"]) {
    
      console.log(`${list}: ${this["tracks"][list]["name"]} by ${this["tracks"][list]["artist"]} (${this["tracks"][list]["album"]})`);
    
    }
  },
  printPlaylist: function(playlistId) {
  const tracksNum = library["playlists"][playlistId]["tracks"].length;
  const trackArr = library["playlists"][playlistId]["tracks"];
  
  console.log(`${playlistId}: ${library["playlists"][playlistId]["name"]} - ${tracksNum} tracks`);

  for (const track of trackArr) {
    console.log(`${track}: ${library["tracks"][track]["name"]} by ${library["tracks"][track]["artist"]} (${library["tracks"][track]["album"]})`);
  }
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    this["playlists"][playlistId]["tracks"].push(trackId);
  },
  addTrack: function(name, artist, album) {
    const newID = generateUid();
    const newTrack = {id: newID, name: name, artist: artist, album: album};
    this["tracks"][newID] = newTrack;
  },
  addPlaylist: function(name) {
    const newID = generateUid();
    const newPlaylist = {id: newID, name: name, tracks: []};
    this["playlists"][newID] = newPlaylist;
  }

};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

// search all playlists
//const printPlaylists = function(library) {
// search all playlists
//  for (const list in library["playlists"]) {
//
//    const tracksNum = library["playlists"][list]["tracks"].length;
//
//    console.log(`${list}: ${library["playlists"][list]["name"]} - ${tracksNum} tracks`);
//
//  }
//
//};
 

console.log("printPlaylists test");
library.printPlaylists();
console.log();


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
// const printTracks = function(library) {
// for (const list in library["tracks"]) {
//
// console.log(`${list}: ${library["tracks"][list]["name"]} by ${library["tracks"][list]["artist"]} (${library["tracks"][list]["album"]})`);
//
//  }
//};
console.log("printTracks test");
library.printTracks();


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// const printPlaylist = function(playlistId) {
// const tracksNum = library["playlists"][playlistId]["tracks"].length;
// const trackArr = library["playlists"][playlistId]["tracks"];
//
// console.log(`${playlistId}: ${library["playlists"][playlistId]["name"]} - ${tracksNum} tracks`);
//
// for (const track of trackArr) {
// console.log(`${track}: ${library["tracks"][track]["name"]} by ${library["tracks"][track]["artist"]} (${library["tracks"][track]["album"]})`);
// }
//
// };
console.log("printplaylist test");
library.printPlaylist("p01");


// adds an existing track to an existing playlist
// const addTrackToPlaylist = function(trackId, playlistId) {
// library["playlists"][playlistId]["tracks"].push(trackId);
// };
console.log("addTrackToPlayList test");
library.addTrackToPlaylist("t02", "p02");
library.printPlaylist("p02");


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
// const addTrack = function(name, artist, album) {
// const newID = generateUid();
// const newTrack = {id: newID, name: name, artist: artist, album: album};
// library["tracks"][newID] = newTrack;
// };
console.log("addTrack test");
library.addTrack("Code Bros", "The code brothers", "code till ye drop");
library.printTracks;



// adds a playlist to the library
// const addPlaylist = function(name) {
// const newID = generateUid();
// const newPlaylist = {id: newID, name: name, tracks: []};
// library["playlists"][newID] = newPlaylist;
// };
console.log("addPlaylist test");
library.addPlaylist("Codeing time");
library.printPlaylists(library);

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
//const printSearchResults = function(query) {
//
//};