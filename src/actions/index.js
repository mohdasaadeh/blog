import _ from "lodash";

import jsonPlaceholder from "../apis/jsonPlaceholder";

export const postsFetch = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "POSTS_FETCH", payload: response.data });
};

export const userFetch = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "USER_FETCH", payload: response.data });
};

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // We dispatched postsFetch here because when fetchPostsAndUsers action creator
  // was called, no actual dispatches were made to the reducers because fetchPostsAndUsers
  // has no dispatches of its own.
  await dispatch(postsFetch());

  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(userFetch(id)))
    .value();
};
