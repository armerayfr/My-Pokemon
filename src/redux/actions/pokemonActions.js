export const gotPokemon = function (payload, nickname) {
  return (dispatch) => {
    payload.nickname = nickname;
    console.log(payload);
    try {
      dispatch({
        type: "GOT_POKEMON",
        payload,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const keepData = function (payload) {
  return (dispatch) => {
    try {
      dispatch({
        type: "KEEP_DATA",
        payload,
      });
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchPokemon = function () {
  return (dispatch) => {
    try {
      dispatch({
        type: "FETCH_POKEMONS",
      });
    } catch (e) {
      console.log(e);
    }
  };
};
