import { ADD_FAV, REMOVE_FAV } from "./actions";




const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };
    // REDUCER | REMOVE_FAV
    case REMOVE_FAV:
      return { ...state, myFavorites: payload };
      // GET_FAV
    case 'GET_FAV':
      return {...state, myFavorites: payload};
      default:
      return {
        ...state,
      };
  }
};
export default rootReducer;
