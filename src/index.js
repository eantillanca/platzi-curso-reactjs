import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./global.css";
import Badge from "./components/Badge";

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
	<Badge
        fistname="Erik"
        avatarUrl="https://st2.depositphotos.com/1007566/12375/v/950/depositphotos_123753800-stock-illustration-avatar-man-cartoon.jpg"
		lastname="Antillanca"
		jobTitle="Computer Engineer"
		twitter="eantillanca"
	/>,
	container
);
