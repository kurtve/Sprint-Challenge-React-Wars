
import React from 'react';


const Card = (props) => {

	// display info for a single SW character

	return (
		<div className='card'>
			<p className='character-name'>{props.person.name}</p>
			<p>{`Birth-year: ${props.person.birth_year}`}</p>
			<p>{`Height: ${props.person.height}`}</p>
			<p>{`Mass: ${props.person.mass}`}</p>
			<p>{`Eye-color: ${props.person.eye_color}`}</p>
			<p>{`Hair-color: ${props.person.hair_color}`}</p>
			<p>{`Complexion: ${props.person.skin_color}`}</p>
		</div>
	);

};

export default Card;
