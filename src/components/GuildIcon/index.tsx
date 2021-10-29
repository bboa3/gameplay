import React from 'react'
import { Image, View } from 'react-native'

import styles from './styles'
import DiscordSvg from '../../assets/discord.svg'

const { CDN_IMAGE } = process.env

type Props = {
  guildId: string;
  iconId: string | null;
}

const GuildIcon: React.FC<Props> = ({ guildId, iconId }) => {
  const uri = `https://opinioni.it/Uploads/Products/25431/YeVk_bj-_large.jpg`;

  return (
    <View style={styles.container}>
      {  
        iconId ?    
        <Image 
          source={{ uri }}
          style={styles.image}
          resizeMode="cover"    
        />
        :
        <DiscordSvg 
          width={40} 
          height={40}
        />
      }
    </View>
  )
}

export default GuildIcon