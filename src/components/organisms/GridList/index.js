import React from 'react'
import { FlatList } from 'react-native'
import { Text, Container } from '~/components/atoms'
import { Card } from '~/components/molecules'
import { SeparatorView, NoDataImage } from './styles'
import noDataSearch from '../../../../assets/no-data-search.png'
import noDataFavorites from '../../../../assets/no-data-favorites.png'

export const GridList = ({ data, type, loading }) => {
  return (
    <FlatList
      refreshing={loading}
      numColumns={3}
      data={data}
      renderItem={({ item }) => <Card size="large" item={item} />}
      keyExtractor={(item) => String(item.id)}
      ItemSeparatorComponent={() => <SeparatorView />}
      ListEmptyComponent={() => (
        <Container align="center" justify="center" h={500}>
          <NoDataImage
            resizeMode="contain"
            source={type === 'favorites' ? noDataFavorites : noDataSearch}
          />
          <Text fontFamily="semiBold" size={14} mt={12}>
            {`Nenhum ${
              type === 'favorites' ? 'favorito' : 'resultado'
            } encontrado.`}
          </Text>
        </Container>
      )}
    />
  )
}
