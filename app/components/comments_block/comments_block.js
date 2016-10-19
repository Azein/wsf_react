import React from 'react';
import styles from './comments_block.css';
import Comment from '../comment/comment.js';

export default class CommentsBlock extends React.Component {
  render(){
    let comments = this.props.data.map( (comment, i) => 
      <Comment key={i} data={comment}/>
      )
    return(
      <div className={styles.comments__container}>
        {comments}
      </div>
    )
  }
}

CommentsBlock.propTypes = {
  data: React.PropTypes.array
}