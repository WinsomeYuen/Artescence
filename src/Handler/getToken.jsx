import axios from 'axios';

export default async function getToken(){
   try {
     const response = await axios.post('https://api.artsy.net/api/tokens/xapp_token', {
         client_id: '019dff616c770f914613',
         client_secret: 'cc4728c2ec19b351259093297d8e0ddf'
     });
     return  response.data.token;
   } catch (e) {
     console.log(`😱 Axios request failed: ${e}`);
     return "Error";
   }
}
