import { useState, useEffect } from 'react';
import axios from 'axios';

export default function GetResponse(selected){
	const [response, setResponse] = useState(null);

	useEffect(() => {
        getGallery().then(object => setResponse(object));
   }, [])

   return response;
}

async function getGallery(){
	try {
	  const artist = 'Painting by ' + randomObject(['Vincent van Gogh','Henri Matisse']);
     const response = await axios.get('https://kgsearch.googleapis.com/v1/entities:search?key=AIzaSyC5uAjNixQGFWTpQ4nXj1379MGIGYBD6c0&types=VisualArtwork&query='+ artist);
     const itemList = response.data.itemListElement;

     var paintingsByArtist = [];
     itemList.forEach(function (item) {
         if(item.result.description === artist && item.result.hasOwnProperty("detailedDescription")){ paintingsByArtist.push(item) }
     });

     const painting = randomObject(paintingsByArtist);
     var image = "";
     if(!painting.result.image){ getWiki(painting.result.name).then(object => painting['image'] = object) }

     return painting;
   } catch (e) {
     console.log(`😱 Axios request failed: ${e}`);
     return "Error";
   }
}

async function getWiki(painting){
	try {
     const response = await axios.get('https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=images&format=json&titles=' + painting);
     const pages = response.data.query.pages;
     if(!pages){return ""}
     var imageFile = '';
     for (var page in pages) {
        for (var image of pages[page].images) {
            imageFile = image.title;
            break;
        }
     }

     const imageInfo = await axios.get('https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=imageinfo&iiprop=url&format=json&titles=' + imageFile);
	  const imagePages = imageInfo.data.query.pages;
	  if(!imagePages){return ""};
	  var image = '';
	  for (var p in imagePages) {
			image = imagePages[p].imageinfo[0].url;
			break;
     }

     return image;
   } catch (e) {
     console.log(`😱 Axios request failed: ${e}`);
     return "Error";
   }
}

function randomObject(array) {
  return array[Math.floor(Math.random() * array.length)];
}
