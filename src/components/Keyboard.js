import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button'

export default props => {
  return (
    <View style={styles.container}>
      <View style={styles.keyboardRow}>
        <Button label='AC' triple onClick={props.clearMemory} />
        <Button label='/' operation onClick={props.setOperation}/>
      </View>
      <View style={styles.keyboardRow}>
        <Button label='7' onClick={props.addDigit}/>
        <Button label='8' onClick={props.addDigit}/>
        <Button label='9' onClick={props.addDigit}/>
        <Button label='*' operation onClick={props.setOperation}/>
      </View>
      <View style={styles.keyboardRow}>
        <Button label='4' onClick={props.addDigit}/>
        <Button label='5' onClick={props.addDigit}/>
        <Button label='6' onClick={props.addDigit}/>
        <Button label='-' operation onClick={props.setOperation}/>
      </View>
      <View style={styles.keyboardRow}>
        <Button label='1' onClick={props.addDigit}/>
        <Button label='2' onClick={props.addDigit}/>
        <Button label='3' onClick={props.addDigit}/>
        <Button label='+' operation onClick={props.setOperation}/>
      </View>
      <View style={styles.keyboardRow}>
        <Button label='0' onClick={props.addDigit}/>
        <Button label='.' onClick={props.addDigit}/>
        <Button label='=' bgc double operation onClick={props.setOperation}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#2B2726',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  keyboardRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})
