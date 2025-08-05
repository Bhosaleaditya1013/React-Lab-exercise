import React, { useState } from 'react';

const CreditCardValidator = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [isValid, setIsValid] = useState(null);

  const handleChange = (e) => {
    const input = e.target.value.replace(/\D/g, ''); // remove non-numbers
    setCardNumber(input);
  };

  const validateCard = (number) => {
    let sum = 0;
    let shouldDouble = false;

    // Loop from right to left
    for (let i = number.length - 1; i >= 0; i--) {
      let digit = parseInt(number[i]);

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsValid(validateCard(cardNumber));
  };

  return (
    <div style={styles.container}>
      <h2>💳 Credit Card Validator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter credit card number"
          value={cardNumber}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Validate</button>
      </form>
      {isValid !== null && (
        <p style={{ color: isValid ? 'green' : 'red', marginTop: '10px' }}>
          {isValid ? '✅ Valid Card Number' : '❌ Invalid Card Number'}
        </p>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '30px',
    borderRadius: '10px',
    background: '#f5f5f5',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  input: {
    padding: '10px',
    fontSize: '16px',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '15px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    background: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default CreditCardValidator;
