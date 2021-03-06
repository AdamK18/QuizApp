import React, { useState } from 'react'
import { setUserName } from '../../redux/user/Actions'
import { connect } from "react-redux";
import { Link } from 'react-router-dom'
import Main from '../Main'
import './styles.css'
import '../../components/css/shared.css'

const Home = ({ dispatchName}) => {
    const [name, setName] = useState("");
    const [showMain, setShowMain] = useState(false);

    const nameHandler = (e) => {
        setName(e.target.value)
    }

    const start = () => {
        if(name === ''){
            alert("Please enter your name")
            return
        }
        dispatchName(name)
        setShowMain(true)
    }


    return (
        <div className="home__content">
            <h1>Adam's quiz</h1>
            <div className={"home__game"}>
                {showMain ? <Main></Main> :
                    <div className={"home__enter"}>
                        <p>Enter your name below</p>
                        <input type="text" value={name} onChange={nameHandler} placeholder={"Enter your name here"} />
                        <button type="button" onClick={start}>Start</button>
                    </div>}
            </div>
            <Link to="/questionmanager" className="home__manage">
                <button type="button">Manage questions</button>
            </Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchName: (payload) => dispatch(setUserName(payload))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)