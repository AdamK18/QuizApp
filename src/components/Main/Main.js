import React from 'react'
import { connect } from 'react-redux'

export const Main = (props) => {
    const {name, round} = props
    return (
        <div>
            <h1>Hello {name}</h1>
            <p>{round.question}</p>
            <p>{round.answerA}</p>
            <p>{round.answerB}</p>
            <p>{round.answerC}</p>
            <p>{round.answerD}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        round: state.round
    }
}

export default connect(mapStateToProps)(Main)

