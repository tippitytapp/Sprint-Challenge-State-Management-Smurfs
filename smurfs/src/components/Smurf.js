import React from "react";
import {connect} from 'react-redux';

const Smurf = props => {
    return (
        <div className='smurf'>
        {props.smurfs.map(item => {
            return (
                <div className="smurfMapDiv">
                    <h3>{item.name}</h3>
                    <h4>{item.age}</h4>
                    <h4>{item.height}</h4>
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