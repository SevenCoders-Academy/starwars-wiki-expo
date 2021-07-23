import styled from 'styled-components/native'

export const ButtonContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.metrics.px(100)}px;
  height: ${({ theme }) => theme.metrics.px(36)}px;
  border-radius: ${({ theme }) => theme.metrics.px(8)}px;
  background-color: ${({ theme }) => theme.colors.white};
`
