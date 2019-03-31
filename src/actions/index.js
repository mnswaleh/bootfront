import MainClass from '../main'

export const fetchParcels = () => (dispatch) => {
    let default_params = new MainClass()

    let request = new Request(default_params.serverName + 'users/11/parcels', default_params.request_headers('GET'))
    fetch(request)
        .then((result) => {
            if (result.status !== 200 && result.status !== 403) {
                alert("login afresh");
            } else {
                return result.json()
            }
        })
        .then(result => dispatch({ type: "ADD_PARCEL", payload: result.Parcels }))
};