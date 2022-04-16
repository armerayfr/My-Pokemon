const INIT_STATE = {
  myPokemonList: [],
};

export const myPokemonReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GOT_POKEMON":
      return {
        ...state,
        myPokemonList: [...state.myPokemonList, action.payload],
      };
    case "KEEP_LOGIN":
      return {
        ...state,
        myPokemonList: action.payload,
      };

    default:
      return state;
  }
};
