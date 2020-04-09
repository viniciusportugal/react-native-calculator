import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    color: '#fff',
    textAlign: 'center',
  },
  operationButton: {
    color: '#FE6F5E',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3
  },
  bgc: {
    backgroundColor: '#FE6F5E',
    color: '#fff',
    borderRadius: 10
  }
})

export default props => {
  const stylesButton = [styles.button];

  if (props.double) stylesButton.push(styles.buttonDouble)
  if (props.triple) stylesButton.push(styles.buttonTriple)
  if (props.operation) stylesButton.push(styles.operationButton)
  if (props.bgc) stylesButton.push(styles.bgc)
  return (
    <TouchableHighlight onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
  )
}