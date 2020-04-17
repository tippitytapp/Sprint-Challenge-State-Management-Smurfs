import React from "react";
import {connect} from 'react-redux';

const Smurf = props => {
    return (
        <div className='smurf'>
        {props.smurfs.map(item => {
            return (
                <div className="smurfMapDiv">
                    <h3>Name: {item.name}</h3>
                    <h4>Age: {item.age}</h4>
                    <h4>Height: {item.height}</h4>
                </div>
            )
        })}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        smurfs: state.smurfsReducer.smurfs
    }
}

export default connect(
    mapStateToProps,
    {}
)(Smurf)