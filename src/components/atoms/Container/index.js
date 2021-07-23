import styled from 'styled-components/native'

export const Container = styled.View`
  display: flex;
  flex-direction: ${({ dir }) => dir || 'column'};
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  background-color: ${({ bg, theme }) => theme.colors[bg || 'dark']};
  width: ${({ theme, w }) => (w ? `${theme.metrics.px(w)}px` : '100%')};
  height: ${({ theme, h }) => (h ? `${theme.metrics.px(h)}px` : '100%')};
`

export const ScreenScrollContainer = styled.ScrollView.attrs(
  ({ theme, withPadding }) => ({
    contentContainerStyle: withPadding
      ? {
          paddingHorizontal: theme.metrics.px(24),
          paddingVertical: theme.metrics.px(56),
        }
      : {},
  })
)`
  background-color: ${({ bg, theme }) => theme.colors[bg || 'dark']};
`
