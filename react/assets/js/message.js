import renderToDOM from "./render-to-dom.js";
import makeMessage from "./make-message.js";

const waitTime = new Promise( (todoOk, todoMal) => {
	setTimeout(() => {
		todoOk("Han pasado 3 seg.");
	}, 3000);
});

var messages = {
  firstMessage: 'Hola Mundo! from Modulo',
  delayMessage: async () => {
    const message = await waitTime;
    console.log(message);
    //const element = document.createElement('p')
    //element.textContent = message;
    renderToDOM(makeMessage(message));
  }
}

export { messages };