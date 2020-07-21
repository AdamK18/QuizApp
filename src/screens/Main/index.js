import React, { Component } from "react";
import { createArrayN, shuffle } from '../../components/Utils'
import { connect } from 'react-redux'
import './styles.css'

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        score: 0,
        current: 0,
        clickedButton: 0,
        canSkip: false,
        isChecked: false,
        questionsOrder: shuffle(createArrayN(this.props.round.list.length))
    }
  }
  currentQuestion = undefined


  checkAnswer = () => {
    if (this.state.clickedButton != 0) {
      this.setState({ isChecked: true, canSkip: true });
      if (this.currentQuestion.correct == this.state.clickedButton)
        this.setState({ score: this.state.score + 1 });
    }
  };

  nextQuestion = () => this.state.canSkip ? this.setState({current: this.state.current+1, canSkip: false, clickedButton: 0, isChecked: false}) : ''

  classHidden = () => (this.currentQuestion == undefined ? "hidden" : "");

  addList = () => {
    try {
      const list = (
        <React.Fragment>
          <p>{this.currentQuestion.question}</p>
          <div className="main-game">
            {this.currentQuestion.answers.map((answers, i) => (
              <React.Fragment key={i}>
                <button
                  className={
                    (this.state.clickedButton == i + 1 ? "clicked" : "") +
                    " " +
                    (this.state.isChecked
                      ? this.state.clickedButton == i + 1 &&
                      this.state.clickedButton == this.currentQuestion.correct
                        ? "checked win"
                        : this.currentQuestion.correct != i + 1 &&
                        this.state.clickedButton == i + 1
                        ? "checked lose"
                        : this.currentQuestion.correct == i + 1
                        ? "checked win"
                        : "checked"
                      : "")
                  }
                  onClick={() => this.setState({clickedButton: i + 1})}
                >
                  {answers}
                </button>
              </React.Fragment>
            ))}
          </div>
        </React.Fragment>
      );
      return list;
    } catch (e) {
      return "There are currently no more questions added to the game. Please add some in the manage questions section";
    }
  };

  render() {
    this.currentQuestion = this.props.round.list[this.state.questionsOrder[this.state.current]];
    return (
      <div className="main">
        <div className={"main-details " + this.classHidden()}>
            <p>Score: {this.state.score}</p>
            <h2>{this.props.user.name}</h2>
            <p>
                Question: {this.state.current + 1}/{this.props.round.list.length}
            </p>
        </div>
        {this.addList()}
        <div className={"main-utilities " + this.classHidden()}>
          <button className={this.state.isChecked ? "checked" : ""} onClick={this.checkAnswer}>
            Check
          </button>
          <button className={this.state.isChecked ? "" : "checked"} onClick={this.nextQuestion}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    round: state.round,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
