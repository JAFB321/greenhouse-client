import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      const { user, token } = action.payload;

      return {
        user,
        token,
        logged: true,
      };

    case types.logout:
      return {
        logged: false,
      };
    default:
      return state;
  }
};
