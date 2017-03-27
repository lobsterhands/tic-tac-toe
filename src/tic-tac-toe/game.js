import React, { Component } from 'react';
import Board from './board.js';
import './game.css';

class Game extends Component {

	constructor() {
		super();
		this.state = {
			history: [
				{
					squares: Array(9).fill(null)
				}
			],
			xIsNext: true,
		}
	}

	handleClick(i) {
		const history = this.state.history;
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		if (squares[i]) {
			return;
		}

		squares[i] = this.state.xIsNext ? 'X' : 'O';

		this.setState({
			history: history.concat([{
				squares: squares
			}]),
			xIsNext: !this.state.xIsNext,
		});
	}

	render() {
		const history = this.state.history;
		const current = history[history.length - 1];
		const status = "Next player: " + (this.state.xIsNext ? 'X' : 'O');
		return (
			<div className="Game">
				<div className="status">
					{status}
				</div>
				<Board squares={current.squares} onClick={(i) => this.handleClick(i)}/>
			</div>
		);
	}
}

export default Game;