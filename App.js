import React, {Component, Fragment} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

export default class App extends Component {
  state = { artist: '', title: '' }

  getLyrics = () => {
    this.setState({ artist: '', title: ''})
  }

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
        { (artist !== '' && title !== '') &&
          <TouchableOpacity onPress={this.getLyrics}>
            <Text style={styles.button}>Get Lyrics</Text>
          </TouchableOpacity>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 80,
    backgroundColor: '#7FFFD4',
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
  button: {
    backgroundColor: '#00FFFF',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginRight: 100,
    marginBottom: 5,
    marginLeft: 100,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1.5,
    borderColor: 'grey',
  }
});
