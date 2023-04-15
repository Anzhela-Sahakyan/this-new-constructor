function Playlist() {
  this.songs = [];
  this.currentSongIndex = 0;
}

function Song(title, artist) {
  this.title = title;
  this.artist = artist;
  this.isPlaying = true;
}

Playlist.prototype.add = function add(...newSong) {
  this.songs.push(...newSong);
};
Playlist.prototype.play = function play() {
  this.isPlaying = true;
  return `${this.songs[this.currentSongIndex].title} started to play`;
};
Playlist.prototype.next = function next() {
  if ((this.currentSongIndex = 0)) {
    return "You need to play at least one song in order to be able to go to the next one";
  }
  this.currentSongIndex += 1;
  return `${this.songs[this.currentSongIndex].title} stopped, ${
    this.songs[this.currentSongIndex].title
  } started`;
};

Playlist.prototype.stop = function stop() {
  this.isPlaying = false;
  return `${this.songs[this.currentSongIndex].title} stopped`;
};
const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");

playlist.add(heyJude, jaded);
console.log(playlist.play());
console.log(playlist.next());
console.log(playlist.play());
console.log(playlist.stop());
