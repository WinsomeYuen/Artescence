import axios from 'axios';

export default async function getToken(){
   try {
     const response = await axios.post('https://api.artsy.net/api/tokens/xapp_token', {
         client_id: 'f98b1153b8ea5c90b480',
         client_secret: '942e0a60f9da772cc528f8024a610dbf'
     });
     return  response.data.token;
   } catch (e) {
     console.log(`😱 Axios request failed: ${e}`);
     return "Error";
   }
}
