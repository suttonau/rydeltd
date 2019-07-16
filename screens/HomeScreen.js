import React, { Component } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

export default class App extends Component {
  state = {
    placeName: ''
  };

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    })
  };

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ width: 300 }}
          placeholder="An awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})
