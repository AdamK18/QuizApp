import React, { useState } from "react";
import { connect } from "react-redux";
import { appendList, removeFromList } from "../../redux/round/Actions";
import { Link } from "react-router-dom";
import QuestionTemplate from '../shared/components/QuestionTemplate'
import './questionForm.css'
import '../shared/css/shared.css'

const QuestionForm = ({ appendList, round, removeItem }) => {
  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [correct, setCorrect] = useState("1");

  const ids = ["q", "a1", "a2", "a3", "a4", "c"];

  const handleChange = (event) => {
    console.log(event.target.value)
    switch (event.target.id) {
      case "q": {
        setQuestion(event.target.value);
        break;
      }
      case "a1": {
        setAnswer1(event.target.value);
        break;
      }
      case "a2": {
        setAnswer2(event.target.value);
        break;
      }
      case "a3": {
        setAnswer3(event.target.value);
        break;
      }
      case "a4": {
        setAnswer4(event.target.value);
        break;
      }
      case "c": {
        console.log(event.target.value)
        setCorrect(event.target.value);
        break;
      }
      default:
    }
  };

  const submitHandler = (e) => {
    appendList({
      question: question,
      answers: [answer1, answer2, answer3, answer4],
      correct: correct,
    });
    setQuestion("")
    setAnswer1("")
    setAnswer2("")
    setAnswer3("")
    setAnswer4("")
    setCorrect("")
    e.preventDefault();
  };

  const editItem = (i) => {
    const question = round.list[i]
    setQuestion(question.question)
    setAnswer1(question.answers[0])
    setAnswer2(question.answers[1])
    setAnswer3(question.answers[2])
    setAnswer4(question.answers[3])
    setCorrect(question.correct)
    removeItem(i)
  }

  return (
    <div className="question-main">
      <div className="question-editor">
        {round.list.map((question, i) => {
          return (
            <div key={i} className="question__list-item question__list-item-different">
              <p>{question.question}</p>
              <div className={"question__list-buttons"}>
                <button className={"edit"} onClick={() => editItem(i)}>Edit</button>
                <button className={"delete"} onClick={() => removeItem(i)}>Delete</button>
              </div>
            </div>
          )
        })}
      </div>

      <form>
        <QuestionTemplate id={ids[0]} name={'Question'} value={question} onChange={handleChange.bind(this)}></QuestionTemplate>
        <QuestionTemplate id={ids[1]} name={'Answer 1'} value={answer1} onChange={handleChange.bind(this)}></QuestionTemplate>
        <QuestionTemplate id={ids[2]} name={'Answer 2'} value={answer2} onChange={handleChange.bind(this)}></QuestionTemplate>
        <QuestionTemplate id={ids[3]} name={'Answer 3'} value={answer3} onChange={handleChange.bind(this)}></QuestionTemplate>
        <QuestionTemplate id={ids[4]} name={'Answer 4'} value={answer4} onChange={handleChange.bind(this)}></QuestionTemplate>
        <div className={"question__list-item"}>
          <label>Correct answer</label>
          <select id={ids[5]} name={'Correct'} onChange={handleChange} value={correct}>
            <option value="1">Answer 1</option>
            <option value="2">Answer 2</option>
            <option value="3">Answer 3</option>
            <option value="4">Answer 4</option>
          </select>
        </div>

        <button onClick={submitHandler}>Add</button> <br />
      </form>

      <Link to="/">
        <button type="button">Back</button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    round: state.round,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    appendList: (payload) => dispatch(appendList(payload)),
    removeItem: (payload) => dispatch(removeFromList(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);
