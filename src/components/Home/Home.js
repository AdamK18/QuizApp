import React, {useState} from 'react'
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import {setUserName} from '../../redux/user/Actions'
import Main from '../Main/Main'

const Home = ({dispatchName}) => {
    const [name, setName] = useState('');
    const [showMain, setShowMain] = useState(false);

    const nameHandler = (e) =>{
        setName(e.target.value)
    }

    const start = () => {
        dispatchName(name)
        setShowMain(true)
    }

    const addNew = () => {
        
    }
    
    return (
        <React.Fragment>
            <h1>Welcome to my QUIZ</h1>
            <p>Enter your name below</p>
            <input type="text" value={name} onChange={nameHandler}/>  <br/>
            <button type="button" onClick={start}>Start</button> <br/>
            {showMain ? <Main></Main> : ''}
            <Link to="/questionform">
                <button type="button">Manage questions</button>
            </Link>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatchName: (payload) => dispatch(setUserName(payload))
    }
};

export default connect(null, mapDispatchToProps)(Home)