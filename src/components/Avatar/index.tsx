import React from 'react'
import { Image, ImageSourcePropType } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import theme from '../../global/styles/theme'
import styles from './styles'

interface Props {
  urlImage:  ImageSourcePropType
} 

const Avatar: React.FC<Props> = ({urlImage}) => (
	<LinearGradient
		style={styles.container}
		colors={[theme.colors.secondary50, theme.colors.secondary70]}
	>
		<Image 
      source={urlImage}
      style={ styles.avatar }
    />
	</LinearGradient>
)

export default Avatar