import * as Actions from '../actionTypes';

export const toggleLoader = (payload: any) => ({
  type: Actions.toggleLoader,
  payload,
});

export const toggleCardVisibility = (payload: any) => ({
  type: Actions.toggleCardVisibility,
  payload,
});

export const setCardDetails = (payload: any) => ({
  type: Actions.setCardDetails,
  payload,
});

export const fetchCardDetails = () => ({
  type: Actions.fetchCardDetails,
});
