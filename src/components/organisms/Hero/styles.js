import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const HeroContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: ${({ theme }) => theme.metrics.px(460)}px;
`

export const HeroImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
`

export const HeroGradient = styled(LinearGradient)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-horizontal: ${({ theme }) => theme.metrics.px(24)}px;
  padding-top: ${({ theme }) => theme.metrics.px(56)}px;
`

export const ButtonsView = styled.View`
  display: flex;
  width: 100%;
  margin-top: ${({ theme }) => theme.metrics.px(12)}px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ButtomItemView = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: ${({ align }) => align || 'center'};
`
