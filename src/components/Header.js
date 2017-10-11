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
    backgroundColor: '#161516',
    color: '#fff',
    fontWeight: '600',
    paddingTop: '7%',
    paddingBottom: '8%',
    textAlign: 'center'
  }
});
