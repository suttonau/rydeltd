import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

class AddressInput extends Component {
  state = {

  }

  placeChangeHandler = () => {

  }

  submit = () => {

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
