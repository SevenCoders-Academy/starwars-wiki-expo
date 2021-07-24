import styled from 'styled-components/native'

export const SeparatorView = styled.View`
  height: ${({ theme }) => theme.metrics.px(12)}px;
`

export const NoDataImage = styled.Image`
  width: ${({ theme }) => theme.metrics.px(48)}px;
  height: ${({ theme }) => theme.metrics.px(48)}px;
`
