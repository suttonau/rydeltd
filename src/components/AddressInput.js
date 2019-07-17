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
            // value={}
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

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    paddingTop: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
})
