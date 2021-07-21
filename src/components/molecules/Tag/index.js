import React from 'react'
import { Text } from '~/components/atoms'
import { TagContainer } from './styles'

export const Tag = ({ children, ...props }) => (
  <TagContainer {...props}>
    <Text fontFamily="bold" size={14}>
      {children}
    </Text>
  </TagContainer>
)
