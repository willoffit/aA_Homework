import { RECEIVE_SEARCH_GIPHYS } from '../actions/giphy_actions';

const giphysReducer = (prevState = [], action) => {
  Object.freeze(prevState);
  switch(action.type) {
    case RECEIVE_SEARCH_GIPHYS:
      return action.giphys
    default:
      return prevState;
  }
};

export default giphysReducer;