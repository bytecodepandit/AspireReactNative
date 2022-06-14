import {ActionInterface} from '@interfaces';
import {toggleCardVisibility} from '../actionTypes';

const initialState: boolean = false;

const reducer = (state = initialState, action: ActionInterface) => {
  const {type, payload} = action;
  switch (type) {
    case toggleCardVisibility:
      return payload;
    default:
      return state;
  }
};

export default reducer;
