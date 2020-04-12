import gallery from '../assets/gallery.svg';
import museum from '../assets/museum.svg';
import explore from '../assets/explore.svg';

export default function setIcon(name){
   switch(name){
      case "gallery":
         return gallery;
      case "museum":
         return museum;
      case "explore":
         return explore;
		default:
			break;
   }
}