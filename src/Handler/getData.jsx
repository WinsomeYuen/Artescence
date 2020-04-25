import Papa from 'papaparse';

async function getData(artist) {
    const data = Papa.parse(await fetchCsv());
    console.log(data);
    const tateArtist = getArtist(artist, data);
    return tateArtist;
}

async function fetchCsv() {
    const response = await fetch('data/artist_data.csv');
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = await decoder.decode(result.value);
    return csv;
}

function getArtist(artist, data){
   const artistName = artist.split(" ");
   console.log(artistName);
   var artistData;
   for(const item of data.data){
      if(item[1].includes(artistName[0]) && item[1].includes(artistName[artistName.length-1])){
         console.log(item);
         artistData = item;
         break;
      }
   }
	console.log(artistData);
	return artistData;
}

export default getData;