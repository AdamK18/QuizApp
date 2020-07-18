import React from 'react'
import { connect } from 'react-redux'

export const Main = (props) => {
    const {round, user} = props
    const roundProps = ['answerA', 'answerB', 'answerC', 'answerD']

    return (
        <div>
            <h1>Hello {user.name}</h1>
            {round.list.map((question) => {
                return(
                    <div className="game">
                        <p>{question.question}</p>
                        {question.answers.map(answers =>
                            <React.Fragment>
                                <p>{answers}</p>
                            </React.Fragment>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        round: state.round,
        user: state.user
    }
}

export default connect(mapStateToProps, null)(Main)

