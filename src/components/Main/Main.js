import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createArrayN, shuffle } from '../shared/Utils'
import './main.css'
import '../shared/css/shared.css'

export const Main = (props) => {
    const { round, user } = props
    let [score, setScore] = useState(0);
    let [current, setCurrent] = useState(0)
    let [canSkip, setCanSkip] = useState(false)
    let [questionsOrder] = useState(shuffle(createArrayN(round.list.length)))
    let [clicked, setClicked] = useState(0);
    let [checked, setChecked] = useState(false);

    let currentQuestion = round.list[questionsOrder[current]];

    const check = (i) => {
        setClicked(i)
        console.log(round.list[10])
    }

    const checkAnswer = () => {
        if (clicked != 0) {
            setChecked(true)
            setCanSkip(true)
            if(currentQuestion.correct == clicked) setScore(score + 1)
        }
    }
    const nextQuestion = () => {
        if (canSkip) {
            setCurrent(current + 1)
            setCanSkip(false)
            setClicked(0)
            setChecked(false)
        }

    }

    const addList = () => {
        try {
            const list = (<React.Fragment>
                <p>{currentQuestion.question}</p>
                <div className="main-game">
                    {currentQuestion.answers.map((answers, i) =>
                        <React.Fragment key={i}>
                            <button className={(clicked == (i+1) ? 'clicked' : '') + " " + 
                             (checked ? (clicked == (i+1) && currentQuestion.correct == clicked ? 'checked win' : (
                                 currentQuestion.correct != (i+1) && clicked == (i+1) ? 'checked lose' : (
                                     currentQuestion.correct == (i+1) ? 'checked win' : 'checked'
                                 )
                             )) : '')} onClick={() => check(i + 1)}>{answers}</button>
                        </React.Fragment>
                    )}
                </div>
            </React.Fragment>)
            return list
        }
        catch (e) {
            return 'There are currently no more questions added to the game. Please add some in the manage questions section'
        }
    }

    return (
        <div className="main">
            <div className={"main-details " + (round.list[questionsOrder[current]] == undefined ? 'hidden' : '')}>
                <p>Score: {score}</p>
                <h2>{user.name}</h2>
                <p>Question: {current + 1}/{round.list.length}</p>
            </div>
            {
                addList()
            }
            <div className={"main-utilities " + (round.list[questionsOrder[current]] == undefined ? 'hidden' : '')}>
                <button className={checked ? 'checked' : ''} onClick={checkAnswer}>Check</button>
                <button className={checked ? '' : 'checked'} onClick={nextQuestion}>Next</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        round: state.round,
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Main)

