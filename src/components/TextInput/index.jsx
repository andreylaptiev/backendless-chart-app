import React  from 'react';
import PropTypes from 'prop-types';
import styles from './TextInput.module.css';

const TextInput = ({id, label, ...props}) => {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <input
        className={styles.input}
        id={id}
        type="text"
        {...props}
      />
    </div>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default TextInput;
