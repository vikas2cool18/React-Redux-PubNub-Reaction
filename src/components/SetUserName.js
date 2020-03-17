import React from 'react'
import {setUsername} from '../actions/username'
import {connect} from 'react-redux'

function SetUserName(props) {
    
    const handleChange=(e)=> {
        console.log(e.target.value)
        props.dispatch(setUsername(e.target.value))
    }

    return (
        <div>
            <h3>Username</h3>
            <input onBlur={handleChange} />
        </div>
    )
}

const mapStateToProps=(state)=> {
    return {
        username: state.username
    }
}

export default connect()(SetUserName)
