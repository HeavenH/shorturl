import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 50,
    borderRadius: 16,
    margin: 8,
    color: 'black',
    borderBottomWidth: 0.5,
    borderColor: '#862623',
    paddingLeft: 14
  }
})


export const Input= ({ name, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, registerField, defaultValue } = useField(name);
  const inputValueRef = useRef({ value: defaultValue });

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <TextInput style={styles.container}
      ref={inputRef}
      keyboardAppearance="dark"
      placeholderTextColor="#862623"
      onChangeText={value => {
        inputValueRef.current.value = value;
      }}
      {...rest}
    />
  )
}