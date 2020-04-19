import { useState, useEffect } from 'react';
import axios from 'axios';

export default function GetResponse(selected){
	const [response, setResponse] = useState(null);

	useEffect(() => {
        if(selected === "gallery"){
        		getGallery().then(object => setResponse(object));
        } else if(selected === "museum"){
        	   getMuseum().then(object => setResponse(object));
        }
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

async function getMuseum(){
	try {
     const randomObject = await axios.get('https://collection.sciencemuseumgroup.org.uk/search/images/?random=1',{
         headers: {
            'Accept': 'application/json'
         }
     });
     const response = randomObject.data.data[0].attributes;
     var museumObject = {
         "title": response.summary_title
     };
     museumObject["description"] = response.description[1] ? response.description[1].value : response.description[0].value;
     museumObject["image"] = response.multimedia[0].processed.large_thumbnail.location ? response.multimedia[0].processed.large_thumbnail.location : "";

     return museumObject;
   } catch (e) {
     console.log(`😱 Axios request failed: ${e}`);
     return "Error";
   }
}

function randomObject(array) {
  return array[Math.floor(Math.random() * array.length)];
}
