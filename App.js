import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTeam: "JavaScript Ninjas",
    };
  }

  vote (points) {
    console.log(`${points} points for ${this.state.currentTeam} team!`);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.vote(1)} style={[styles.button, styles.buttonFirst]}>
          <Text style={styles.label}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.vote(2)} style={[styles.button, styles.buttonSecond]}>
          <Text style={styles.label}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.vote(3)} style={[styles.button, styles.buttonThird]}>
          <Text style={styles.label}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.vote(4)} style={[styles.button, styles.buttonFourth]}>
          <Text style={styles.label}>4</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4396cc',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  button: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: '50%',
    width: '50%',
  },
  buttonFirst: {
    backgroundColor: '#0CC100',
  },
  buttonSecond: {
    backgroundColor: '#0CB700',
  },
  buttonThird: {
    backgroundColor: '#0CAD00',
  },
  buttonFourth: {
    backgroundColor: '#0CA300',
  },
  label: {
    color: '#fff',
    fontSize: '100px',
    fontWeight: '600',
  }
});
