
import React, { useState, useEffect } from 'react';
import './App.css';
import callAPI from './components/callAPI.js';
import CardHolder from './components/CardHolder.js';


const App = () => {

	const SWAPIPeopleURL = 'https://swapi.co/api/people/';

	const [people, updatePeople] = useState({});

	useEffect(() => {
		callAPI(SWAPIPeopleURL, updatePeople);
	}, [SWAPIPeopleURL]);



	const previousHandler = () => {
		console.log('previous');
	};

	const nextHandler = () => {
		console.log('next');
	};


	if (people === {}) {
		return (
			<div className="App">
				<h1 className="Header">React Wars</h1>
				<h3 className="loading">Loading...</h3>
			</div>
		);
	}

	return (
		<div className="App">
			<h1 className="Header">React Wars</h1>
			<CardHolder people={people.results} />
		</div>
	);
}

export default App;
