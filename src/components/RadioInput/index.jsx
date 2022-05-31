import React  from 'react';
import PropTypes from 'prop-types';
import styles from './RadioInput.module.css';

const RadioInput = ({id, label, value, ...props}) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="radio"
        value={value}
        {...props}
      />
    </div>
  );
}

RadioInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default RadioInput;
