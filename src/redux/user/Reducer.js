import { SET_NAME } from "./Actions";

const userState = {
  name: "asd",
};

export const userReducer = (state = userState, action) => {
  switch (action.type) {
    case SET_NAME: {
      state.name = action.payload;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
