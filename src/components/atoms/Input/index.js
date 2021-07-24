import React from 'react'
import { InputContainer, TextInput } from './styles'

export const Input = (props) => {
  return (
    <InputContainer {...props}>
      <TextInput {...props} />
    </InputContainer>
  )
}
