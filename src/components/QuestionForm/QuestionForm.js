import React, { useState } from "react";
import { connect } from "react-redux";
import { appendList, removeFromList } from "../../redux/round/Actions";
import { Link } from "react-router-dom";
import QuestionTemplate from '../shared/components/QuestionTemplate'
import './questionForm.css'

const QuestionForm = ({appendList, round, removeItem}) => {
  const [question, setQuestion] = useState("");
  const [answer1, setanswer1] = useState("");
  const [answer2, setanswer2] = useState("");
  const [answer3, setanswer3] = useState("");
  const [answer4, setanswer4] = useState("");
  const [correct, setcorrect] = useState("");

  const ids = ["q", "a1", "a2", "a3", "a4", "c"];

  const handleChange = (event) => {
    switch (event.target.id) {
      case "q": {
        setQuestion(event.target.value);
        break;
      }
      case "a1": {
        setanswer1(event.target.value);
        break;
      }
      case "a2": {
        setanswer2(event.target.value);
        break;
      }
      case "a3": {
        setanswer3(event.target.value);
        break;
      }
      case "a4": {
        setanswer4(event.target.value);
        break;
      }
      case "c": {
        setcorrect(event.target.value);
        break;
      }
    }
  };

  const submitHandler = (e) => {
    appendList({
      question: question,
      answers: [answer1, answer2, answer3, answer4],
      correct: correct,
    });
    e.preventDefault();
  };

  return (
    <div className="question-main">
        <form>
          <QuestionTemplate id={ids[0]} name={'Question'} value={question} onChange={handleChange.bind(this)}></QuestionTemplate>
          <QuestionTemplate id={ids[1]} name={'Answer1'} value={answer1} onChange={handleChange.bind(this)}></QuestionTemplate>
          <QuestionTemplate id={ids[2]} name={'Answer2'} value={answer2} onChange={handleChange.bind(this)}></QuestionTemplate>
          <QuestionTemplate id={ids[3]} name={'Answer3'} value={answer3} onChange={handleChange.bind(this)}></QuestionTemplate>
          <QuestionTemplate id={ids[4]} name={'Answer4'} value={answer4} onChange={handleChange.bind(this)}></QuestionTemplate>
          <QuestionTemplate id={ids[5]} name={'Correct'} value={correct} onChange={handleChange.bind(this)}></QuestionTemplate>
              
          <button onClick={submitHandler}>Add</button> <br />
        </form>
        
        <div className="question-editor">
          {round.list.map((question, i) => {
            return(
                <div className="list-item">
                    <p>{question.question}</p>
                    <button>Edit</button>
                    <button onClick={removeItem.bind(this, i)}>Delete</button>
                </div>
            )
          })}
        </div>

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
