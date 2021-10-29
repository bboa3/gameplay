import React from 'react'
import { View, Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import categories from '../../utils/categories'
import GuildIcon from '../GuildIcon'

import styles from './styles'
import PlayerSvg from '../../assets/player.svg'
import CalenderSvg from '../../assets/calendar.svg'
import theme from '../../global/styles/theme'

export interface GuildProps {
  id: string; 
  name: string; 
  icon: null; 
  owner: boolean;
}

export interface AppointmentProps {
  id: string
  guild: GuildProps
  category: number
  date: string,
  description: string
}

interface Props extends RectButtonProps {
  data: AppointmentProps
}

const Appointment: React.FC<Props> = ({ data, ...rest }) => {

  const [category] = categories.filter(category => category.id === data.category)
  const { name, owner } = data.guild
  const { primary, on } = theme.colors

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon 
          guildId={'1'} 
          iconId={null} 
        />

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {name}
            </Text>

            <Text style={styles.category}>
              {category.title}
            </Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalenderSvg />
              <Text style={styles.date}>
                { data.date }
              </Text>
            </View>

            <View style={styles.playerInfo}>
              <PlayerSvg fill={ owner ? primary : on }/>

              <Text style={[
                styles.player,
                {color: owner ? primary : on}
              ]}> 
                { owner ? 'Anfitrião' : 'Visitante' }
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  )
}

export default Appointment