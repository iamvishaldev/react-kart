
export const fetchTypes = {
    STATE_IDLE: "idle",
    STATE_FETCHING: "fetching",
    STATE_SUCCESS: "success",
    STATE_FAILURE: "failure"
}

export const initailState = {
    products: [],
    fetching: fetchTypes.STATE_IDLE,
    error: null
}

export const Action = {
    pending: 'pending',
    resolved: 'resolved',
    rejected: 'rejected'
}

export const Reducer = (state = initailState, action) => {

    switch (action.type) {
        case Action.pending:
            return { ...state, fetching: fetchTypes.STATE_FETCHING }
        case Action.resolved:
            const  products  = action.Products
            console.log("Inside reducer ",products)
            return { ...state, fetching: fetchTypes.STATE_SUCCESS, products }
        case Action.rejected:
            return { ...state, fetching: fetchTypes.STATE_FAILURE, error: "Unable to Fetch the Data" }
        default:
            return state
    }
}
