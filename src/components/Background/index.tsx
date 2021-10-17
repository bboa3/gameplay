import React, { ReactNode } from 'react'
import {} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import theme from '../../global/styles/theme';

interface Props {
	children: ReactNode
}

const Background: React.FC<Props> = ({children}) => (
	<LinearGradient
		style={styles.container}
		colors={[theme.colors.secondary80, theme.colors.secondary100]}
	>
		{children}
	</LinearGradient>
)

export default Background