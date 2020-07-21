import React from "react";
import { connect } from "react-redux";
import './styles.css'

export const UserDetails = ({user}) => {
  return (
    <div className={"main-details " + classHidden()}>
      <p>Score: {score}</p>
      <h2>{user.name}</h2>
      <p>
        Question: {current + 1}/{round.list.length}
      </p>
    </div>
  );
};

const mapStateToProps = (state) => {
    return{
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
