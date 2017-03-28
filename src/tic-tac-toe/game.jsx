import React, { Component } from 'react';
import Board from './board.jsx';
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
        if (calculateWinner(squares) || squares[i]) {
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
        const winner = calculateWinner(current.squares);

        let status = "Next player: " + (this.state.xIsNext ? 'X' : 'O');
        if (winner) {
            status = "Winner: " + winner;
        } else if (this.state.history.length > 9) {
            status = "Cat's game";
        }

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

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ];    

    for (var i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];

        const winner = squares[a];
        if (winner && winner === squares[b] && winner === squares[c]) {
            return winner;
        }
    }

    return null;
}


export default Game;