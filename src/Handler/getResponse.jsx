import { useState, useEffect } from 'react';
import axios from 'axios';

export default function GetResponse(selected){
	const [response, setResponse] = useState(null);

	useEffect(() => {
        getGallery().then(object => setResponse(object.data));
   }, [])

   return response;
}

async function getGallery(){
	try {
     const artist = randomObject(['Auguste Renoir','Pablo Picasso','Vincent van Gogh','Andy Warhol',
      'Bridget Riley','Claude Monet','Henri Matisse','Georgia OKeeffe', 'Cindy Sherman' ]);
     const response = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q='+ artist);
     const artwork = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/'+ randomObject(response.data.objectIDs));
      return artwork;
   } catch (e) {
     console.log(`😱 Axios request failed: ${e}`);
     return "Error";
   }
}

function randomObject(array) {
  return array[Math.floor(Math.random() * array.length)];
}
