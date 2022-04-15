export const gotPokemon = function (payload) {
  return (dispatch) => {
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
