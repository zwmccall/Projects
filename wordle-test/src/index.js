import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const numOfFields = 4;

const handleChange = e => {
  const { maxLength, value, name } = e.target;
  const [fieldName, fieldIndex] = name.split("-");

  // Check if they hit the max character length
  if (value.length >= maxLength) {
    // Check if it's not the last input field
    if (parseInt(fieldIndex, 10) < numOfFields) {
      // Get the next input field
      const nextSibling = document.querySelector(
        `input[name=item-${parseInt(fieldIndex, 10) + 1}]`
      );

      // If found, focus the next field
      if (nextSibling !== null) {
        nextSibling.focus();
      }
    } else {
        if(e.key === 'Enter'){
            console.log('enter press here! ');
            for(var i = 1; i < 6; i++){
                const nextSibling = document.querySelector(
                    `input[name=item-${parseInt(fieldIndex, 10) + i}]`
                );
                nextSibling.classList.remove("inactive-square");
            }
        }
    }
  } else {
    if(e.key === 'Enter'){
        console.log('init');
        for(var i = 5; i < 10; i++){
            const nextSibling = document.querySelector(
                `input[name=item-${i}]`
            );
            nextSibling.classList.remove("inactive-square");
        }
    }
  }
}

function initSquares(){
    for(var i = 5; i < 10; i++){
        const nextSibling = document.querySelector(
            `input[name=item-${i}]`
        );
        nextSibling.classList.add("inactive-square");
    }
}

class Square extends React.Component {
    render() {
      return (
        <input maxLength="1" onKeyDown={handleChange} name={`item-${ this.props.value }`} className={`square ${if(this.props.value >= 5){"inactive-square"}}}`}>
          {/* TODO */}
        </input>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i) {
      return <Square value={i}/>;
    }
  
    render() {
      const status = 'Next player: X';
      
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
          </div>
          <div className="board-row">
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
          </div>
          <div className="board-row">
            {this.renderSquare(10)}
            {this.renderSquare(11)}
            {this.renderSquare(12)}
            {this.renderSquare(13)}
            {this.renderSquare(14)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  