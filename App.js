import React, {Component, Fragment} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default class App extends Component {
  state = { artist: '', title: '' }
  render() {
    const { artist, title } = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.header}>Lyric-ify</Text>
        <Text style={styles.label}>Artist</Text>
        <TextInput
          value={artist}
          style={styles.input}
          onChangeText={ (text) => this.setState({ artist: text }) }
        />
        <Text style={styles.label}>Song Title</Text>
        <TextInput
          value={title}
          style={styles.input}
          onChangeText={ (text) => this.setState({ title: text }) }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 80,
    backgroundColor: '#50C878',
  },
  label: {
    marginLeft: 5,
  },
  input: {
    height: 50,
    fontSize: 25,
    borderColor: 'grey',
    borderWidth: 1,
    margin: 5,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 50,
    textAlign: 'center',
  },
});
