import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class VotingButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('Render button!');

    return (
      <TouchableOpacity onPress={() => this.props.voteFn(this.props.points)} style={[
        styles.button, {
          backgroundColor: this.props.backgroundColor
        }]}
      >
        <Text style={styles.label}>{this.props.points}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: '50%',
    width: '50%',
  },
  label: {
    color: '#fff',
    fontSize: 100,
    fontWeight: '600',
  }
});
