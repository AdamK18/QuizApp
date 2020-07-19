import React from 'react'

function QuestionTemplate({ name, id, value, onChange }) {
    return (
        <div className="question__list-item">
            <label>{name}</label>
            <input id={id} value={value} type="text" onChange={onChange} />
        </div>
    )
}

export default QuestionTemplate
