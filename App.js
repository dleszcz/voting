import React from 'react';
import { StyleSheet, View } from 'react-native';

import Board from './components/Board.component';
import Header from "./components/Header.component";
import VotingMessage from "./components/VotingMessage.component";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTeam: 'JavaScript Ninjas',
      voted: false,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        { this.state.voted ? <VotingMessage /> : null }
        <Header currentTeam={this.state.currentTeam} />
        <Board currentTeam={this.state.currentTeam} voted={this.props.voted} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0c9b00',
    flex: 1,
    flexDirection: 'column',
  }
});
