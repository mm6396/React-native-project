import React, { useState } from 'react';
import { Button, TextInput, View, StyleSheet } from 'react-native';

const FeedbackScreen = () => {
  const [text, setText] = useState('')

  const handleSubmit = () => {
    // Send a POST request to the Express server
    fetch('http://localhost:3000/send-feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ feedback: text })
    })
    .then(response => response.text())
    .then(text => console.log(text))
    .catch(error => console.log(error));

    // Clear the textbox
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your feedback here"
        onChangeText={setText}
        value={text}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
});

export default FeedbackScreen;