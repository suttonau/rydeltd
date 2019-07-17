import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

class AddressInput extends Component {
  state = {
    placeName: ''
  }

  placeChangeHandler = (v) => {
    this.setState({
      placeName: v
    })
  }

  submit = () => {
    if (this.state.placeName.trim() === '') {
      return
    }

    this.props.onPlaceAdded(this.state.placeName)
  }

  render () {
    return (
      <View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="Ryde V2"
            value={placeName}
            onChangeText={this.placeChangeHandler}
          />
        </View>

        <Button
          onPress={this.submit}
          style={styles.placeButton}
          title="Add"
        />
      </View>
    )
  }
}
