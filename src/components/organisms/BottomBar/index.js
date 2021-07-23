import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Text } from '~/components/atoms'
import { BottomBarContainer, BarItem } from './styles'
import { theme } from '~/styles/theme'
const routeIcons = {
  Home: 'home-outline',
  Search: 'search-outline',
  Favorites: 'heart-outline',
}

export const BottomBar = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options

  if (focusedOptions.tabBarVisible === false) {
    return null
  }

  return (
    <BottomBarContainer>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <BarItem
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Ionicons
              size={theme.metrics.px(20)}
              name={routeIcons[route.name]}
              color={isFocused ? theme.colors.red : theme.colors.white}
            />
            <Text
              fontFamily="semiBold"
              size={10}
              color={isFocused ? 'red' : 'white'}
            >
              {label}
            </Text>
          </BarItem>
        )
      })}
    </BottomBarContainer>
  )
}

// ...
