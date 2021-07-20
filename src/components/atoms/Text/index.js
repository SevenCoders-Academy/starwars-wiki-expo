import React from 'react'
import { CustomText } from './styles'

export const Text = ({ children, color }) => {
  return <CustomText color={color}>{children}</CustomText>
}
