import axios from 'axios';

export default function getResponse(xappToken){
	console.log(xappToken);

	axios.get('https://api.artsy.net/api/v1/artists/popular', {
       headers: {
         'X-Access-Token': xappToken,
         'Accept': 'application/json',
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