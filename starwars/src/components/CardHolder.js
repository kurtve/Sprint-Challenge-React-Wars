
import React from 'react';
import Card from './Card.js';


const CardHolder = (props) => {

	// display a list of SW character cards
	console.log(props.people);

	return (
		<div className='card-holder'>
			{props.people.map((person, idx) => ( <Card key={idx} person={person} /> ) )}
		</div>
	);

};

export default CardHolder;
