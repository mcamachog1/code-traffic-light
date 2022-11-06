import React, { useState } from 'react'
import Luz from "./luz.jsx"
import logo4geeks from "../../img/logo-4geeks.png"
import "../../styles/home.css"; 

//create your first component
const Home = () => {
	
	const [ color, setColor] = useState("");

	const prenderLuz = color => {
		setColor(color)
	};


	// function prenderLuz(color) {
	// 	alert('El color es ' + color)
	// 	setColor(color)
	// };

	return (
		<div className="Home">
			<div className="for-geeks-logo-contenedor">
				<img 
					src={logo4geeks}
					className="for-geeks-logo"
					alt="logo de 4geeks" />
			</div>
			<div className="contenedor-semaforo">
				<div className="contenedor-palo">
					<div className="palo"></div>
				</div>
				<div className="contenedor-caja-luces">
					<Luz manejarClic={prenderLuz} color="rojo" colorActivo={color}></Luz>
					<Luz manejarClic={prenderLuz} color="amarillo" colorActivo={color}></Luz>
					<Luz manejarClic={prenderLuz} color="verde" colorActivo={color}></Luz>
				</div>
			</div>

		</div>
	);
};

export default Home;
