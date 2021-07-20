import styled from 'styled-components/native'

export const CustomText = styled.Text`
  font-size: ${({ theme }) => theme.metrics.px(24)}px;
  color: ${({ color, theme }) => color || theme.colors.red};
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
  font-family: 'SourceSansPro_700Bold';
`
