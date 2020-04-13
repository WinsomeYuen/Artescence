import axios from 'axios';

export default async function getToken(){
   try {
     const response = await axios.post('https://api.artsy.net/api/tokens/xapp_token', {
         client_id: 'fed4d28c66b2c73d5cf8',
         client_secret: 'e900abcbe5a15f70322d64f2186c9f94'
     });
     return  response.data.token;
   } catch (e) {
     console.log(`😱 Axios request failed: ${e}`);
     return "Error";
   }
}
