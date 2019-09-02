
import React, { useState, useEffect } from 'react';
import './App.css';
import callAPI from './components/callAPI.js';
import CardHolder from './components/CardHolder.js';


const App = () => {

	const SWAPIPeopleURL = 'https://swapi.co/api/people/';

	const initialPeople = {
		count: 0,
		next: null,
		previous: null,
		results: []
	};

	const [people, updatePeople] = useState(initialPeople);

	// call the SW api to load our people information
	useEffect(() => {
		callAPI(SWAPIPeopleURL, updatePeople);
	}, [SWAPIPeopleURL]);



	const previousHandler = () => {
		console.log('previous');
	};

	const nextHandler = () => {
		console.log('next');
	};



	if (people.results.length === 0) {
		return (
			<div className="App">
				<h1 className="Header">React Wars</h1>
				<h3 className="loading">Loading...</h3>
			</div>
		);
	} else {
		return (
			<div className="App">
				<h1 className="Header">React Wars</h1>
				<CardHolder people={people.results} />
			</div>
		);
	}
}

export default App;
