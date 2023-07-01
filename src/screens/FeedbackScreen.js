import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';

const FeedbackScreen = () => {
  const [text, setText] = useState('')

  const handleSubmit = () => {
    // Here you'd typically make a request to your backend API to send the email.
    // For now, we'll just log the text.
    console.log(text);
    // After sending text to backend, clear the textbox
    setText('')
  }

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={setText}
        value={text}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default FeedbackScreen;