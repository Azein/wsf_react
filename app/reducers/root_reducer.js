import { combineReducers } from 'redux';
import * as types from '../action_types.js';

const initialState = {
  commentsBlock: {
    comments: [1, 2],
    commentsById: {
      1: {
        id: 1,
        author: 'stylix',
        text: 'Марс был пуст и все такое, первые колонисты, разнообразные механизмы, да.'
      },
      2: {
        id: 2,
        author: 'Дарья Пушкарская',
        text: '2026 год, независимый Марс, сражаться до последнего, растапливать полярные шапки, 10 из 10'
      }
    }
  }
}

const commentsBlock = (state = initialState.commentsBlock, action) => {
  switch(action.type){
    case types.ADD_COMMENT:
      let newId = state.comments[state.comments.length-1] + 1;
      return {
        comments: state.comments.concat(newId),
        commentsById: {
          ...state.commentsById,
          [newId]: {
            id: newId,
            ...action.comment
          }
        }
      }

    default:
      return state
  }
}

const rootReducer = combineReducers({
  commentsBlock
}) 

 export default rootReducer;