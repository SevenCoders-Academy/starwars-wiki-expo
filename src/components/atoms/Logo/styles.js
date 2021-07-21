import styled from 'styled-components/native'

export const LogoImage = styled.Image`
  height: ${({ size, theme }) => theme.metrics.px(size)}px;
  width: ${({ size, theme }) => theme.metrics.px(size)}px;
`
