const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // REDUCER | ADD_FAV
    case "ADD_FAV":
      return { ...state, myFavorites: payload, allCharacters: payload };

    // REDUCER | REMOVE_FAV
    case "REMOVE_FAV":
      return { ...state, myFavorites: payload };

    default:
      return state;
  }
};

export default rootReducer;
