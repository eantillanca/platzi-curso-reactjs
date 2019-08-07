// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from "react";
import ReactDOM from "react-dom";

const person = {
    name : 'Erik Antillanca',
    profession: 'Ingeniero civil en informática'
}

const jsx = (
    <div>
        <h1>Hola! soy {person.name}</h1>
        <p>{person.profession}</p>
    </div>
) 

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(jsx, container);
