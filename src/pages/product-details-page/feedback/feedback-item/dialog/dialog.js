import React from 'react';
import { useDispatch } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import useStyles from './dialog.styles';

import { deleteComment } from '../../../../../redux/products/products.actions';
import {
  DIALOG,
  PDP_BUTTONS
} from '../../../../../translations/product-details.translations';

const FeedbackDialog = ({
  modal,
  handleClose,
  commentId,
  productId,
  language
}) => {
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
        <DialogTitle className={styles.title}>
          {DIALOG[language].title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{DIALOG[language].description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} className={styles.button}>
            {PDP_BUTTONS[language].cancelButton}
          </Button>
          <Button onClick={handleDelete} className={styles.button}>
            {PDP_BUTTONS[language].submitButton}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FeedbackDialog;
