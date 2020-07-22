import { appendList, removeFromList } from "../../redux/round/Actions";
import React, { Component } from "react";
import QuestionTemplate from "../../components/QuestionTemplate";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./styles.css";
import "../../components/css/shared.css";

class QuestionManager extends Component {
  constructor(props) {
    super(props);
    this.initialState = {
      question: "",
      answer_1: "",
      answer_2: "",
      answer_3: "",
      answer_4: "",
      correct: "1",
    };
    this.state = this.initialState;
  }
  fields = ["Question", "Answer 1", "Answer 2", "Answer 3", "Answer 4"];

  submitHandler = (e) => {
    this.props.appendList({
      question: this.state.question,
      answers: [
        this.state.answer_1,
        this.state.answer_2,
        this.state.answer_3,
        this.state.answer_4,
      ],
      correct: this.state.correct,
    });
    this.setState(this.initialState);
    e.preventDefault();
  };

  editItem = (i) => {
    const question = this.props.round.list[i];
    this.setState({
      question: question.question,
      answer_1: question.answers[0],
      answer_2: question.answers[1],
      answer_3: question.answers[2],
      answer_4: question.answers[3],
      correct: question.correct,
    });
    this.props.removeItem(i);
  };

  render() {
    return (
      <div className="question-main">
        <div className="question-editor">
          {this.props.round.list.map((question, i) => {
            return (
              <div
                key={i}
                className="question__list-item question__list-item-different"
              >
                <p>{question.question}</p>
                <div className={"question__list-buttons"}>
                  <button className={"edit"} onClick={() => this.editItem(i)}>
                    Edit
                  </button>
                  <button
                    className={"delete"}
                    onClick={() => this.props.removeItem(i)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <form>
          {this.fields.map((e, i) => {
            let stateField = this.fields[i].replace(" ", "_").toLowerCase();
            return (
              <QuestionTemplate
                name={this.fields[i]}
                value={this.state[stateField]}
                onChange={(e) =>
                  this.setState({ [stateField]: e.target.value })
                }
              ></QuestionTemplate>
            );
          })}
          <div className={"question__list-item"}>
            <label>Correct answer</label>
            <select
              id={"Correct"}
              name={"Correct"}
              onChange={(e) => this.setState({ correct: e.target.value })}
              value={this.state.correct}
            >
              {[1, 2, 3, 4].map((i) => (
                <option value={i}>Answer {i}</option>
              ))}
            </select>
          </div>

          <button onClick={this.submitHandler}>Add</button>
        </form>

        <Link to="/">
          <button type="button">Back</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    round: state.round,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    appendList: (payload) => dispatch(appendList(payload)),
    removeItem: (payload) => dispatch(removeFromList(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionManager);
