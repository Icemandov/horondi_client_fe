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
    const noScriptText = value.replace(script, '');
    const noLinkText = noScriptText.replace(link, '');

    setEditableText(noLinkText);

    if (noLinkText.match(formRegExp.text) && noLinkText.trim().length >= 2) {
      setTextValidated(true);
    } else {
      setTextValidated(false);
    }
  };

  const handleSubmit = () => {
    setShouldValidate(true);
    if (textValidated) {
      console.log(editableText.trim());
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
