import _ from "lodash";

import jsonPlaceholder from "../apis/jsonPlaceholder";

export const postsFetch = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "POSTS_FETCH", payload: response.data });
};

// The reason behind separating the function and memoizing it like this is
// because every time the userFetch action creator gets called, its function
// gets redeclared, and memoize becomes useless because it will see
// a new function each time and won't be able to memoize it.
export const userFetch = (id) => (dispatch) => _userFetch(id, dispatch);
const _userFetch = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "USER_FETCH", payload: response.data });
});
