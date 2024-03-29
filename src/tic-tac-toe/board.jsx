import React, { Component } from 'react';
import Square from './square.jsx';

class Board extends Component {

    renderSquare(i) {
        const isHighlight = this.props.victorySquares.some(x => x === i);

        return (
            <Square highlight={isHighlight} value={this.props.squares[i]} onClick={() => this.props.onClick(i)}/>
        );
    }

    render() {
        return (
            <div className="Board">
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;