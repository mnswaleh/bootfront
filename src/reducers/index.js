const initialState = {
    parcels: [],
    parcel: {}
};

let rootReducer = (state = initialState, action) => {
    if (action.type === "ADD_PARCEL") {
        return { ...state, parcels: action.payload };
    }
    return state
};

export default rootReducer;