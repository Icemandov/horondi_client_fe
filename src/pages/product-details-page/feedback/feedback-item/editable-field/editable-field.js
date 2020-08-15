import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import useStyles from './editable-field.styles';

import { errorMessages, formRegExp } from '../../../../../configs';

const EditableField = ({ setEditable, text, language, handleClickOpen }) => {
  const styles = useStyles();
  const { script, link } = formRegExp;
  const [editableText, setEditableText] = useState(text);
  const [textValidated, setTextValidated] = useState(true);
  const [shouldValidate, setShouldValidate] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    const noscriptText = value.replace(script, '');
    const filteredText = noscriptText.replace(link, '');

    setEditableText(filteredText);

    if (filteredText.match(formRegExp.text)) {
      filteredText.trim().length >= 2
        ? setTextValidated(true)
        : setTextValidated(false);
    } else {
      setTextValidated(false);
    }
  };

  const handleSubmit = () => {
    setShouldValidate(true);
    if (textValidated) {
      console.log(editableText);
      setEditable(false);
    }
  };

  return (
    <div>
      <TextField
        required
        multiline
        rows={7}
        value={editableText}
        className={styles.editableText}
        variant='outlined'
        onChange={(e) => handleChange(e)}
        error={!textValidated && shouldValidate}
        helperText={
          !textValidated && shouldValidate
            ? `${errorMessages[language].value.text}`
            : ''
        }
        type='text'
      />
      <div className={styles.editForm}>
        <Button
          className={styles.editButton}
          onClick={() => setEditable(false)}
        >
          Cancel
        </Button>
        <Button className={styles.editButton} onClick={handleSubmit}>
          Submit
        </Button>
        <Tooltip title='Delete' placement='right'>
          <DeleteForeverIcon
            className={styles.deleteIcon}
            onClick={handleClickOpen}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default EditableField;
