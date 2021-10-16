import React from 'react'
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  TouchableOpacityProps 
} from 'react-native'

import discordImg from '../../assets/discord.png'
import styles from './styles'

interface Props extends TouchableOpacityProps {
  title: string
}

const ButtonIcon: React.FC<Props> = ({title, ...rest}) => {
  return (
    <TouchableOpacity 
      style={styles.container}
      {...rest}
    >
      <View style={styles.iconWrapper}>
        <Image source={discordImg} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
    )
  }

  export default ButtonIcon