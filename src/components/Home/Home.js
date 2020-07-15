import React, {useState} from 'react'
import Main from '../Main/Main'

const Home = () => {
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const nameHandler = (e) =>{
        setName(e.target.value)
    }

    const submitHandler = (event) => {
        setSubmitted(true)
        event.preventDefault();
    }

    return (
        <React.Fragment>
            <h1>Welcome to my QUIZ</h1>
            <p>Enter your name below</p>
            <form onSubmit={submitHandler}>
                <input type="text" value={name} onChange={nameHandler}/>
                <button type="submit">Enter</button>
            </form>
            {submitted ? <Main name = {name}></Main> : ''}
        </React.Fragment>
    )
}

export default Home