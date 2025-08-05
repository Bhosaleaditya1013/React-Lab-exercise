import React, { useState } from 'react';

const ColorBox = () => {
  const [color, setColor] = useState('');
  const [inputColor, setInputColor] = useState('');

  const handleChange = (e) => {
    setInputColor(e.target.value);
    try {
      // Check if browser accepts the color
      const isValid = CSS.supports('color', e.target.value);
      setColor(isValid ? e.target.value : '');
    } catch {
      setColor('');
    }
  };

  return (
    <div style={styles.container}>
      <h2>🎨 Color Box App</h2>
      <input
        type="text"
        placeholder="Enter color name or hex"
        value={inputColor}
        onChange={handleChange}
        style={styles.input}
      />
      <div style={{ ...styles.box, backgroundColor: color || '#ccc' }}>
        {color ? color : 'Invalid color'}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '40px',
    fontFamily: 'Arial',
  },
  input: {
    padding: '10px',
    width: '300px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #999',
    marginBottom: '20px',
  },
  box: {
    margin: '0 auto',
    width: '300px',
    height: '150px',
    lineHeight: '150px',
    color: '#fff',
    borderRadius: '10px',
    fontSize: '20px',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
  },
};

export default ColorBox;
