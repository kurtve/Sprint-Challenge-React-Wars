import React from "react";

const Button = (props) => {

	return (
		<button onClick={props.handler} className={props.active ? 'button active' : 'button inactive'}>
			{props.label}
		</button>
	);

};

export default Button;
