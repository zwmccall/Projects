import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const numOfFields = 5;

const handleChange = e => {
  const { maxLength, value, name } = e.target;
  const [fieldName, fieldIndex] = name.split("-");
  const [rowName, rowIndex] = e.target.parentElement.getAttribute("name").split("-");

  // Check if they hit the max character length
  if (value.length >= maxLength) {
    // Check if it's not the last input field
    //console.log(parseInt(fieldIndex-1, 10));
    //console.log(numOfFields * rowIndex);
    if (parseInt(fieldIndex, 10) < (numOfFields * rowIndex) - 1) {
      // Get the next input field
      console.log("here");
      const nextSibling = document.querySelector(
        `input[name=item-${parseInt(fieldIndex, 10) + 1}]`
      );
      //console.log(nextSibling);

      // If found, focus the next field
      if (nextSibling !== null) {
        //console.log("trying");
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
    if(e.key === 'Backspace'){
        if (parseInt(fieldIndex, 10) > 0) {
          console.log('deleting');
          // Get the next input field
          const prevSibling = document.querySelector(
            `input[name=item-${parseInt(fieldIndex, 10) - 1}]`
          );
    
          // If found, focus the next field
          if (prevSibling !== null) {
            prevSibling.focus();
          }
        } else {
          console.log('first');
        }
    }
  }
}

class Square extends React.Component {
    render() {
      return (
        <input maxLength="1" onKeyDown={handleChange} name={`item-${ this.props.value }`} className={`square ${this.props.value > 4 ? "inactive-square" : ""}`}>
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
      const status = 'Welcome to Wordle Clone';
      
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row" name="row-1">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
          </div>
          <div className="board-row" name="row-2">
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
            {this.renderSquare(9)}
          </div>
          <div className="board-row" name="row-3">
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
  