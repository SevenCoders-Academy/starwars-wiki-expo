import React from 'react'
import { CustomText } from './styles'

export const Text = ({ children, ...props }) => {
  return <CustomText {...props}>{children}</CustomText>
}
