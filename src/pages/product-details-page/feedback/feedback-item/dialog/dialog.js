import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import useStyles from './dialog.styles';
import { deleteComment } from '../../../../../redux/products/products.actions';

const FeedbackDialog = ({ modal, handleClose, commentId, productId }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(
      deleteComment({
        product: productId,
        comment: commentId
      })
    );
    handleClose();
  };

  return (
    <div>
      <Dialog open={modal} onClose={handleClose}>
        <DialogTitle className={styles.title}>Delete comment?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the comment? After deleting you will
            not be able to restore the comment.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={styles.button}>
            Cancel
          </Button>
          <Button onClick={handleDelete} className={styles.button}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FeedbackDialog;
