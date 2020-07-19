import React, {useState} from 'react'
import { connect } from "react-redux";
import {Link} from 'react-router-dom'
import {setUserName} from '../../redux/user/Actions'
import Main from '../Main/Main'
import './home.css'

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
    
    return (
        <div className="home__content">
            <h1>Welcome to my QUIZ</h1>
            <div className = "home__game">
                {showMain ? <Main></Main> :
                    <div className="">
                        <p>Enter your name below</p>
                        <input type="text" value={name} onChange={nameHandler}/>  <br/>
                        <button type="button" onClick={start}>Start</button> <br/>
                    </div>}
            </div>
            <Link to="/questionform" className="home__manage">
                <button type="button">Manage questions</button>
            </Link>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        dispatchName: (payload) => dispatch(setUserName(payload))
    }
};

export default connect(null, mapDispatchToProps)(Home)