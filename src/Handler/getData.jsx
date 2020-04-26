import artistData from './data/artist_data.json';

export default function getData(artist) {
    const tateArtist = getArtist(artist, artistData);
    return tateArtist;
}

async function getArtist(artist, artistData){
   const artistName = artist.split(" ");
   var tateArtist = "Error";
   artistData.some(function(data){
      var name = data.name;
      if(name.includes(artistName[0]) && name.includes(artistName[artistName.length-1])){
         tateArtist =  data;
         return;
      }
   })
	return tateArtist;
}