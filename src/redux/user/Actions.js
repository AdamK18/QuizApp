export const SET_NAME = "SET_NAME";

export const setUserName = (payload) => {
  return {
    type: SET_NAME,
    payload: payload,
  };
};
