import React from 'react'
import { CardContainer, CardImage } from './styles'
import { useNavigation } from '@react-navigation/native'
import { useDataStore } from '~/services/stores'

const sizes = {
  small: {
    h: 124,
    w: 88,
  },
  large: {
    h: 150,
    w: 102,
  },
}

export const Card = ({ item, size }) => {
  const { setSelectedData } = useDataStore()
  const navigation = useNavigation()

  const onSelectItem = () => {
    setSelectedData(item)
    navigation.navigate('Detail')
  }

  return (
    <CardContainer
      onPress={() => onSelectItem()}
      size={size ? sizes[size] : sizes.small}
    >
      <CardImage source={{ uri: item.image_url }} />
    </CardContainer>
  )
}
