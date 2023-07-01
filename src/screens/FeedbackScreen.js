import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const FeedbackScreen = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Feedback Screen</Text>
            <TextInput placeholder="Enter your feedback here" />
            <Button title="Submit" onPress={() => {}} />
        </View>
    );
};

export default FeedbackScreen;