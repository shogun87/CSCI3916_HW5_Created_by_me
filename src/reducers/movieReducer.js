import constants from '../constants/actionTypes';

let initialState = {

}

export default (state = initialState, action) => {
    let updated = Object.assign({}, state)

    switch(action.type) {
        default:
            return state;
    }
}