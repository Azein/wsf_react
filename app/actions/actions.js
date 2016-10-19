import * as types from '../action_types.js';

export const addComment = (comment) => {
  return { type: types.ADD_COMMENT, comment }
}