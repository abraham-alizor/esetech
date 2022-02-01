import React, { Component } from 'react';
import CardList from './components/cardList/CardList';
import SearchComponent from './components/SearchComponent';
import './App.css';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			games: [],
			searchField: '',
		};
	}
	componentDidMount() {
		fetch('https://adaorachi.github.io/esetech-assessment-api/game-data.json')
			.then((response) => response.json())
			.then((list) => this.setState({ games: list }));
	}

	handleChange = (e) => {
		this.setState({ searchField: e.target.value });
	};
	render() {
		const { games, searchField } = this.state;
		const filteredgames = games.filter((game) =>
			game.name.toString().toLowerCase().includes(searchField.toLowerCase())
		);
		return (
			<div>
				<h1 className='dark:text-purple-200 text-center'> Esetech Games Directory</h1>
				<div className='w-full lg:pr-32 lg:pl-32 flex items-start justify-start dark:bg-gray-800'>
					<div className='w-1/4'>
						<SearchComponent placeHolder=' search lists' handleChange={this.handleChange} />
					</div>
					<div className='w-3/4'>
						<CardList games={filteredgames} />
					</div>
				</div>
			</div>
		);
	}
}
