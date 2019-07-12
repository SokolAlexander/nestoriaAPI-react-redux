
const initialState = {
    inputValue: 'chelsea',
    data: [],
    isFetching: false,
    currentPage: 0,
    totalPages: 100,
    lastSearched: '',
    error: null
}

export default function reducer(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case 'INPUT_CHANGE': return {
            ...state,
            inputValue: action.payload
        }
        case 'START_REQUEST': return {
            ...state,
            isFetching: true,
            lastSearched: action.payload,
            currentPage: 1,
            data: []
        }
        case 'FETCHED_DATA': return {
            ...state,
            data: state.data.concat(action.payload.data),
            totalPages: action.payload.total,
            isFetching: false,
            error: null
        }
        case 'START_REQUEST_NEXT': return {
            ...state,
            currentPage: ++ state.currentPage,
            isFetching: true
        }
        case 'FETCHED_DATA_NEXT': return {
            ...state,
            data: state.data.concat(action.payload),
            isFetching: false
        }
        case 'RESPONSE_ERROR': return {
            ...state,
            error: action.payload,
            isFetching: false
        }
        default: return state
    }
}