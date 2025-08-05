import React, { useState } from 'react';

const PasswordValidator = () => {
  const [password, setPassword] = useState('');

  const rules = {
    minLength: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  return (
    <div style={styles.container}>
      <h2>Password Validator</h2>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <ul style={styles.list}>
        <li style={{ color: rules.minLength ? 'green' : 'red' }}>
          • At least 8 characters
        </li>
        <li style={{ color: rules.uppercase ? 'green' : 'red' }}>
          • At least one uppercase letter
        </li>
        <li style={{ color: rules.lowercase ? 'green' : 'red' }}>
          • At least one lowercase letter
        </li>
        <li style={{ color: rules.number ? 'green' : 'red' }}>
          • At least one number
        </li>
        <li style={{ color: rules.specialChar ? 'green' : 'red' }}>
          • At least one special character
        </li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'Arial, sans-serif',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    marginBottom: '20px',
    borderRadius: '5px',
    border: '1px solid #aaa',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: 0,
    fontSize: '14px',
  },
};

export default PasswordValidator;
