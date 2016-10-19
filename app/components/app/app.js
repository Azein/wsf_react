import React from 'react';
import styles from './app.css';
import Navbar from '../navbar/navbar.js';
import Gallery from '../gallery/gallery.js';
import Description from '../description/description.js';
import Footer from '../footer/footer.js';
import DownloadBox from '../download_box/download_box.js';
import CommentForm from '../comment_form/comment_form.js';
import Offers from '../offers/offers.js';
import CommentsBlockContainer from '../../containers/comments_block_container.js';

export default class App extends React.Component{
  render(){
    return(
      <div className={styles.app__container}>
        <Navbar />
        <Gallery />
        <Description />
        <DownloadBox />
        <CommentForm />
        <Offers />
        <CommentsBlockContainer />
        <Footer />
      </div>
    )
  }
}