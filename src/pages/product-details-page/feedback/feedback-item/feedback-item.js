import React, { useState } from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import Rating from '@material-ui/lab/Rating';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './feedback-item.styles';

import { Loader } from '../../../../components/loader/loader';
import EditableField from './editable-field';
import FeedbackDialog from './dialog';

import * as avatar from '../../../../images/avatar.jpg';

import {
  COMMENTS_TIME_OPTIONS,
  DATE_LANGUAGE_OPTIONS
} from '../../../../configs';

const FeedbackItem = ({
  name,
  text,
  date,
  language,
  commentId,
  productId,
  userEmail
}) => {
  const styles = useStyles();

  const [rate, setRate] = useState(0);
  const [isEditable, setEditable] = useState(false);
  const [modal, setModal] = useState(false);

  const dateLanguage = DATE_LANGUAGE_OPTIONS[language];
  const dateToShow = new Date(parseInt(date));
  const commentDate = dateToShow.toLocaleString(
    dateLanguage,
    COMMENTS_TIME_OPTIONS
  );

  const handleOpen = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div>
            <div className={styles.user}>
              <Avatar alt='Dimas' src={avatar} className={styles.avatar} />
              <div className={styles.userInfo}>
                <Rating
                  size='small'
                  name='simple-controlled'
                  value={rate}
                  onChange={(e, newRate) => setRate(newRate)}
                />
                <span className={styles.name}>Dimass</span>
              </div>
            </div>
          </div>
          <div className={styles.icons}>
            <div className={styles.commentActions}>
              {!isEditable ? (
                <div>
                  <Tooltip title='Edit'>
                    <EditIcon
                      className={styles.editIcon}
                      onClick={() => setEditable(true)}
                    />
                  </Tooltip>
                  <Tooltip title='Delete'>
                    <DeleteForeverIcon
                      className={styles.deleteIcon}
                      onClick={handleOpen}
                    />
                  </Tooltip>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        {isEditable ? (
          <EditableField
            setEditable={setEditable}
            text={text}
            handleOpen={handleOpen}
            language={language}
            commentId={commentId}
            productId={productId}
            userEmail={userEmail}
          />
        ) : (
          <div className={styles.text}>{text}</div>
        )}
        <div className={styles.date}>{commentDate}</div>
      </div>
      <hr />
      <FeedbackDialog
        handleClose={handleClose}
        modal={modal}
        commentId={commentId}
        productId={productId}
      />
    </div>
  );
};

export default FeedbackItem;
