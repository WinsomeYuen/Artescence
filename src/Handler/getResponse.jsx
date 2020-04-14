import axios from 'axios';

export default function getResponse(xappToken){
	axios.get('https://api.artsy.net/api/artworks', {
       headers: {
         'X-Access-Token': xappToken,
         'Accept': 'application/vnd.artsy-v2+json'
         }
     })
     .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log(error);
     })
     .then(function () {
       // always executed
     });
}