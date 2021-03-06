import React, {Component} from 'react';
//import ReactDOM from 'react-router-dom';

 class YesNoQuestion extends Component {
  state = {
    myAnswer: null
  };
  render() {
    const { question, answer } = this.props;
    const { myAnswer } = this.state;
    return (
      <div>
        {question}
        <br />
        <button
          disabled={myAnswer !== null}
          onClick={() => this.setState({ myAnswer: true })}
        >
          YES
        </button>
        <button
          disabled={myAnswer !== null}
          onClick={() => this.setState({ myAnswer: false })}
        >
          NO
        </button>
        {myAnswer !== null && (
          <span>{myAnswer === answer ? "Correct!" : "Wrong!"}</span>
        )}
      </div>
    );
  }
}
export default YesNoQuestion;