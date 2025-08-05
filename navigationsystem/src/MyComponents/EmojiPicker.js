import React, { useState } from 'react';
import EmojiPicker from 'emoji-picker-react';

function Emojipicker() {
  const [chosenEmoji, setChosenEmoji] = useState(null);
  const [copied, setCopied] = useState(false);

  const onEmojiClick = (emojiData) => {
    setChosenEmoji(emojiData.emoji);
    navigator.clipboard.writeText(emojiData.emoji).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div style={styles.container}>
      <h2>😊 Emoji Picker App</h2>
      <EmojiPicker onEmojiClick={onEmojiClick} />
      {chosenEmoji && (
        <div style={styles.output}>
          <span style={styles.emoji}>{chosenEmoji}</span>
          <span>{copied ? 'Copied!' : 'Click on emoji to copy'}</span>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '30px',
    fontFamily: 'sans-serif',
  },
  output: {
    marginTop: '20px',
    fontSize: '18px',
  },
  emoji: {
    fontSize: '40px',
    marginRight: '10px',
  },
};

export default Emojipicker;
