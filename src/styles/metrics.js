import { Dimensions, PixelRatio } from 'react-native'

const { width } = Dimensions.get('window')

const figmaWidth = 375

const px = (valuePx) => {
  const widthPercent = (valuePx / figmaWidth) * 100
  const screenPixel = PixelRatio.roundToNearestPixel(
    (width * parseFloat(widthPercent)) / 100
  )
  return screenPixel
}

export const metrics = {
  px,
}
