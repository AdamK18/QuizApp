import React from 'react'

function QuestionTemplate({name, id, value, onChange}) {
    return (
        <div>
            <label>{name}</label>
            <input id={id} value={value} type="text" onChange={onChange}/>
        </div>
    )
}

export default QuestionTemplate