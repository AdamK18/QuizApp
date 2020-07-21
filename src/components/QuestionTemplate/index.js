import React from 'react'

function QuestionTemplate({ name, value, onChange }) {
    return (
        <div className="question__list-item">
            <label>{name}</label>
            <input id={name} value={value} type="text" onChange={onChange} />
        </div>
    )
}

export default QuestionTemplate
