
const initialState = {
    inputValue: '',
    data: [],
    isFetching: false
}

export default function reducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case 'START_REQUEST': return {
            ...state,
            isFetching: true
        }
        case 'FETCHED_DATA': return {
            ...state,
            data: action.payload,
            isFetching: false
        }
        case 'INPUT_CHANGE': return {
            ...state,
            inputValue: action.payload
        }
        default: return state
    }
}