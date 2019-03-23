const songDatabase = [{
  songId: 1,
  title: 'My baby',
  artist: 'Soggy socks',
},
{
  songId: 2,
  title: '3 nails in wood',
  artist: 'The carpenters',
},
{
  songId: 3,
  title: 'Blacker than black',
  artist: 'Instant coffee',
},
{
  songId: 4,
  title: 'When is enough too little?',
  artist: 'The spies girls',
},
];
const myPlaylist = [];
//funtion below adds the new songs to the database
function addSongsToDatabase(song) {
  if (songDatabase.includes(song)) {
    return "The song already exists in the database"
  } 
  else {
    songDatabase.push(song); 
  }  
}
addSongsToDatabase({songId:5, title: "This is mine", artist: "fowad"});
console.log(songDatabase);
//--------------------------------
//function below searches the song by title from song database
function getSongByTitle (title) {
    for (var i = 0; i < songDatabase.length; i++) {      
      if (songDatabase[i].title === title) {
       return songDatabase[i];
      }        
    }
    return "Song not found";
}
const searchedSong = getSongByTitle("this is Mine");
console.log(searchedSong);
//--------------------------------
//function below adds the favourite songs from the database to my playlist
function addSongToMyPlaylist (title) {
  const myFavouriteSongs = getSongByTitle(title);
  if(myFavouriteSongs!== "Song not found"){
    myPlaylist.push(myFavouriteSongs);
    console.log(myPlaylist);
  }
  else {
    console.log("Song does not exist in database");
  }
}
addSongToMyPlaylist("This is mine");
//--------------------------------
    