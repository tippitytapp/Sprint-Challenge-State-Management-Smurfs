export const initialState = {
    smurfs:[],
    isFetching: false,
    error: ""
}

export const smurfsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCH_SMURFS_START':
            return {
                ...state,
                isFetching: true
            }
        case 'FETCH_SMURFS_SUCCESS':
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload
            }
        case 'FETCH_SMURFS_ERROR':
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        case 'ADD_SMURF_START':
            return {
                ...state,
                isFetching: true,
            }
        case 'ADD_SMURF_SUCCESS':
            return {
                ...state,
                isFetching: false,
                smurfs: [...state.smurfs, action.payload]
            }
        case 'ADD_SMURF_ERROR':
            return {
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
            return state
    }
}