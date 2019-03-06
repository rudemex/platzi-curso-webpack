import "./style.css";
import { messages } from'./message.js';
import  logo from './woonky-logo.gif';

document.write(messages.firstMessage);
messages.delayMessage();

const img = document.createElement("img");
img.setAttribute('src',logo);
img.setAttribute('width',150);
img.setAttribute('height','auto');
document.body.append(img);
//console.log("hola mundo!");
console.log("desde webpack external");