import React from 'react';
import styles from './comment.css';

export default class Comment extends React.Component {
  render(){
    return(
      <div className={styles.comment}>
        <div>{this.props.data.author}</div>
        <div>{this.props.data.text}</div>
      </div>
    )
  }
}

Comment.propTypes = {
  data: React.PropTypes.object
}