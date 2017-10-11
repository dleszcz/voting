import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text style={styles.teamName}>
        Vote for { this.props.currentTeam } team!
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  teamName: {
    backgroundColor: '#0c9b00',
    color: '#fff',
    fontWeight: '600',
    paddingTop: '10%',
    paddingBottom: '8%',
    textAlign: 'center'
  }
});
