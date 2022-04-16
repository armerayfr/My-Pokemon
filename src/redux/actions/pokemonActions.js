export const gotPokemon = function (payload, nickname) {
  return (dispatch) => {
    payload.nickname = nickname;
    console.log(payload);
    localStorage.setItem("myListPokemon", JSON.stringify(payload));
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

export const keepLogin = function (payload) {
  return (dispatch) => {
    try {
      dispatch({
        type: "KEEP_LOGIN",
        payload,
      });
    } catch (e) {
      console.log(e);
    }
  };
};
