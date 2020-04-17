import axios from 'axios';

export const fetchSmurfs = () => {
    return dispatch => {
        dispatch ({type: 'FETCH_SMURFS_START'})
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log('fetchSmurfs axios call', res)
                dispatch({type: 'FETCH_SMURFS_SUCCESS', payload: res.data})
            })
            .catch(err => {
                console.log('error from axios call', err)
                dispatch({type: 'FETCH_SMURFS_ERROR', payload: `ERROR: ${err}`})
            })
    }
}

export const addSmurfs = (smurf) => {
    return dispatch => {
        dispatch({type: 'ADD_SMURF_START'})
        axios
            .post('https://localhost:3333/smurfs', smurf)
            .then(res => {
                console.log(res);
                dispatch({type: 'ADD_SMURF_SUCCESS', payload: smurf})
          })
            .catch(err => {
                console.log(err);
                dispatch({type: 'ADD_SMURF_ERROR', payload: `ERROR: ${err}`})
            })
    }
}