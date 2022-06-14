import {ActionInterface, CardDetails} from '@interfaces';
import {setCardDetails} from '../actionTypes';

const initialState: CardDetails | {} = {};

const reducer = (state = initialState, action: ActionInterface) => {
  const {type, payload} = action;
  switch (type) {
    case setCardDetails:
      return payload;
    default:
      return state;
  }
};

export default reducer;
