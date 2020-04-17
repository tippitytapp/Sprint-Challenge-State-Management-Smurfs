import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addSmurfs} from '../actions/smurfActions';


const AddSmurfForm = props => {
    const [formState, setFormState] = useState({name:"", age:"", height:"", id:Date.now()})
    const inputChange = e => {
        e.preventDefault();
        const newFormData = {
            ...formState, [e.target.name]: e.target.value
        }
        setFormState(newFormData)
    }
    return(
        <>
        <div className="addSmurfForm">
        <form onSubmit={()=> props.addSmurfs(formState)}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" onChange={inputChange} value={formState.name} placeholder="Name"/>
            <label htmlFor="age">Age:</label>
            <input type="text" id="age" name="age" onChange={inputChange} value={formState.age}placeholder="Age"/>
            <label htmlFor="height">Height:</label>
            <input type="text" id="height" name="height" onChange={inputChange} value={formState.height} placeholder="Height"/>
            <button className="addSmurf">Add Smurf To Village</button>
        </form>
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return{
        isFetching: state.smurfsReducer.isFetching,
        error: state.smurfsReducer.error,
        smurfs: state.smurfsReducer.smurfs
    }
}

export default connect(
    mapStateToProps,
    {addSmurfs}
    )(AddSmurfForm)