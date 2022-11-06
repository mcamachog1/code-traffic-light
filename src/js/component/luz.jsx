import React from "react";
import '../../styles/luz.css'



function Luz(props){
	// if (props.color === "amarillo")
	// return(
	// 	<div className="luz amarillo"></div>
	// )
	// else if (props.color === "verde")
	// return(
	// 	<div className="luz verde"></div>
	// )	
	// else if (props.color === "rojo")
	// return(
	// 	<div className="luz rojo"></div>
	// )	
	
	console.log(props.color)
	console.log(props.colorActivo)
	return(
		<div 
			className={`luz ${props.color} ${props.color === props.colorActivo ? 'prender' : ''}`}
			onClick={() => props.manejarClic(props.color)}>
	

		</div>
	)

}

export default Luz;