import "../css/style.css";
import { messages } from'./message.js';
import  logo from '../images/woonky-logo.gif';
import data from './teachers.json';
import renderToDom from './render-to-dom.js';

import React from 'react';
import { render } from 'react-dom';
import Teachers from './components/teachers.js';
import '../css/main.less';

render(<Teachers data={data}/>, document.getElementById("container"));

console.log(data);

data.teachers.forEach( (teacher)=>{
	const element = document.createElement('li');
	element.textContent = teacher.name;
	renderToDom(element)
})

document.write(messages.firstMessage);
messages.delayMessage();

const img = document.createElement("img");
img.setAttribute('src',logo);
img.setAttribute('width',150);
img.setAttribute('height','auto');
document.body.append(img);
//console.log("hola mundo!");
console.log("desde webpack external");