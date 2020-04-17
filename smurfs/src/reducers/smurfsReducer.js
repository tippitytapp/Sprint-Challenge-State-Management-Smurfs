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
        default:
            return state
    }
}