import React from 'react';
import { StyleSheet, View } from 'react-native';
import VotingButton from './VotingButton.component';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
  }

  vote (points) {
    console.log(`${points} points for ${this.props.currentTeam} team!`);
  }

  render() {
    return (
      <View style={styles.container}>
        <VotingButton backgroundColor="#0CC100" points={1} voteFn={() => this.vote(1)} />
        <VotingButton backgroundColor="#0CB700" points={2} voteFn={() => this.vote(2)} />
        <VotingButton backgroundColor="#0CAD00" points={3} voteFn={() => this.vote(3)} />
        <VotingButton backgroundColor="#0CA300" points={4} voteFn={() => this.vote(4)} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0c9b00',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
