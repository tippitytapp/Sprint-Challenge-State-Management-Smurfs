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

export const postSmurfs = (smurf) => {
    return dispatch => {
        dispatch({type: 'POST_SMURF'})
        axios
            .post('https://localhost:3333/smurfs', smurf)
            .then(res => {
                console.log('post request', res);
                dispatch({type: 'POST_SMURF', payload: res.data})
          })
            .catch(err => {
                console.log(err);
                dispatch({type: 'ADD_SMURF_ERROR', payload: `ERROR: ${err}`})
            })
    }
}

export function addSmurfs(name, age, height){
    return (dispatch) => {
        dispatch({type: 'ADD_SMURF', payload: {name, age, height}})
    }
}
