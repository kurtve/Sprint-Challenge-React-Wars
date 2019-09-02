import React from "react";

const Button = (props) => {

	return (
		<div onClick={props.handler} className={props.class}>
			<code>{props.label}</code>
		</div>
	);

};

export default Button;
