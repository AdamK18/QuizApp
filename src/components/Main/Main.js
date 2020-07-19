import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createArrayN, shuffle } from '../shared/Utils'
import './main.css'
import '../shared/css/shared.css'

export const Main = (props) => {
    const { round, user } = props
    let [score, setScore] = useState(0);
    let [correct] = useState(false);
    let [current, setCurrent] = useState(0)
    let [canSkip] = useState(false)
    let [questionsOrder] = useState(shuffle(createArrayN(round.list.length)))

    let currentQuestion = round.list[questionsOrder[current]];

    const check = (i) => {
        if (currentQuestion.correct == i) {
            correct = true
        }
        else {
            correct = false
        }
    }

    const checkAnswer = () => {
        if (correct) {
            correct = false
            canSkip = true
        }
    }
    const nextQuestion = () => {
        if (canSkip) {
            setCurrent(current + 1)
            setScore(score + 1)
            canSkip = false
        }

    }

    const addList = () => {
        try {
            const list = (<React.Fragment>
                <p>{currentQuestion.question}</p>
                <div className="main-game">
                    {currentQuestion.answers.map((answers, i) =>
                        <React.Fragment>
                            <button onClick={() => check(i + 1)}>{answers}</button>
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
            <div className="main-details">
                <p>Score: {score}</p>
                <h2>{user.name}</h2>
                <p>Highscore: {score}</p>
            </div>
            {
                addList()
            }
            <div className="main-utilities">
                <button onClick={checkAnswer}>Check</button>
                <button onClick={nextQuestion}>Next</button>
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

