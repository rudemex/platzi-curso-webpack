import "../css/style.css";
import { messages } from'./message.js';
import  logo from '../images/woonky-logo.gif';
import videoPlatzi from '../videos/que-es-core.mp4';

document.write(messages.firstMessage);
messages.delayMessage();

const img = document.createElement("img");
img.setAttribute('src',logo);
img.setAttribute('width',150);
img.setAttribute('height','auto');
document.body.append(img);

const video = document.createElement("video");
video.setAttribute('src',videoPlatzi);
video.setAttribute('width',480);
video.setAttribute('height','auto');
video.setAttribute('autoplay',true);
video.setAttribute('controls',true);
document.body.append(video);
//console.log("hola mundo!");
console.log("desde webpack external");