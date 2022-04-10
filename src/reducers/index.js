import { combineReducers } from "redux";

import postListReducer from "./postListReducer";
import usersReducer from "./usersReducer";

export default combineReducers({ posts: postListReducer, users: usersReducer });
