import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchSmurfs}  from '../actions/smurfActions';
import Smurf from './Smurf'

const Smurfs = props => {
    useEffect(()=>{
        props.fetchSmurfs();
    }, [])

return (
    <div className="smurfsParent">
        <h1> Marc's Smurf Village</h1>
        {props.isFetching && (<div className="isfetching"><h2 className='isfetching'>LOADING YOUR SMURF VILLAGE</h2></div>)}
        <Smurf />
    </div>
)

}

const mapStateToProps = state => {
    console.log('smurfs mapstatetoprops console',state)
    return{
        smurfs: state.smurfsReducer.smurfs,
        isFetching: state.smurfsReducer.isFetching,
        error: state.smurfsReducer.error
    }
}

export default connect(
    mapStateToProps,
    {fetchSmurfs}
)(Smurfs)