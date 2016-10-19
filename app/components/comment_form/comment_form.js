import React from 'react';
import { connect } from 'react-redux';
import styles from './comment_form.css';
import { addComment } from '../../actions/actions.js';

class CommentForm extends React.Component{
  
  addComment = () => {
    const { dispatch } = this.props;
    const comment = {
      author: 'Great Commentator 777 (you)',
      text: this.refs.textarea.value
    };
    dispatch(addComment(comment))
    this.refs.textarea.value='';
  }

  render(){
    return(
      <div className={styles.comment__form}>
        <textarea ref='textarea' className={styles.textarea}>
        </textarea>
        <div className={styles.button} onClick={this.addComment}>Отправить</div>
      </div>
    )
  }
}

CommentForm.propTypes = {
  dispatch: React.PropTypes.func
}

export default connect () (CommentForm);