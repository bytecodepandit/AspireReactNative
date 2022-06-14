import {ActionInterface} from '@interfaces';
import {toggleLoader} from '../actionTypes';

const initialState: boolean = false;

const reducer = (state = initialState, action: ActionInterface) => {
  const {type, payload} = action;
  switch (type) {
    case toggleLoader:
      return payload;
    default:
      return state;
  }
};

export default reducer;
