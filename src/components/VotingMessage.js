import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class VotingMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.message}>
        <Text style={styles.label}>Thanks for your voting!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  message: {
    alignItems: 'center',
    backgroundColor: '#0c9b00',
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: '1'
  },
  label: {
    color: 'white',
    fontWeight: '600',
  }
});
