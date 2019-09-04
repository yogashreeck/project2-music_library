import * as ActionTypes from './types.js';


// export function BeginFunc(ActionType) {
//   return { type: ActionType }
// }

// export function SuccessFunc(ActionType, result) {
//   return {
//     type: ActionType,
//     payload: result
//   }
// }

// export function ErrorFunc(ActionType, error) {
//   return {
//     type: ActionType,
//     payload: { error }
//   }
// }

// export function submitSignup(userdata) {
//   return dispatch => {
//     dispatch(BeginFunc(ActionTypes.ADD_SIGNUP_BEGIN));
//   }
// }

export function submitSignup() {
  return function (dispatch) {
    dispatch({ type: "CLICK" });
  }
}