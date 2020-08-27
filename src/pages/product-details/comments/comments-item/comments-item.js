import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Tooltip from '@material-ui/core/Tooltip';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './comments-item.styles';

import { Loader } from '../../../../components/loader/loader';
import EditableField from './editable-field';
import CommentDialog from './comment-dialog';

import * as avatar from '../../../../images/avatar.jpg';
import {
  COMMENTS_TIME_OPTIONS,
  DATE_LANGUAGE_OPTIONS,
  userData
} from '../../../../configs';
import { TOOLTIPS } from '../../../../translations/product-details.translations';

const CommentsItem = ({ user, text, date, commentId }) => {
  const styles = useStyles();

  const { updatingComment, language } = useSelector(
    ({ Products, Language }) => ({
      updatingComment: Products.updatingComment,
      language: Language.language
    })
  );
  const { email: userEmail } = userData || {};
  const { name } = user;

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

  if (updatingComment === commentId) {
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div>
            <div className={styles.user}>
              <Avatar alt={name} src={avatar} className={styles.avatar} />
              <span className={styles.name}>{name}</span>
            </div>
          </div>
          <div className={styles.icons}>
            <div className={styles.commentActions}>
              {!isEditable && userEmail === user.email ? (
                <div>
                  <Tooltip title={TOOLTIPS[language].edit}>
                    <EditIcon
                      className={styles.editIcon}
                      onClick={() => setEditable(true)}
                    />
                  </Tooltip>
                  <Tooltip title={TOOLTIPS[language].delete}>
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
            commentId={commentId}
            username={name}
          />
        ) : (
          <div className={styles.text}>{text}</div>
        )}
        <div className={styles.date}>{commentDate}</div>
      </div>
      <CommentDialog
        handleClose={handleClose}
        modal={modal}
        commentId={commentId}
      />
    </div>
  );
};

export default CommentsItem;
