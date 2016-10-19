import { connect } from 'react-redux';
import CommentsBlock from '../components/comments_block/comments_block.js';

const normalize = (commentsData) => {
  const dataArray = [];
  Object.keys(commentsData).map( (comment) => {
    dataArray.push(commentsData[comment]);   
    }
  )
  return dataArray;
}

const mapStateToProps = (state) => {
  return{
   data: normalize(state.commentsBlock.commentsById)
  }
}

const CommentsBlockContainer = connect(
  mapStateToProps,
  null
  )(CommentsBlock);

export default CommentsBlockContainer;