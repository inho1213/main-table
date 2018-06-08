import {TOGGLE_NAV_BAR} from "../constants/ActionTypes";

export function main(state = {openNavBar: false}, action) {
    switch(action.type) {
        case TOGGLE_NAV_BAR:
            return {
                ...state,
                openNavBar: !state.openNavBar
            }
        default:
            return state;
    }
}