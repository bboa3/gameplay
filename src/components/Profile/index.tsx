import React from 'react'
import { View, Text } from 'react-native'
import Avatar from '../Avatar'
import styles from './styles'

import avatarImg from '../../assets/avatar.png'

const Profile: React.FC = () => {
  return (
    <View style={styles.container}>
      <Avatar urlImage={avatarImg} />

      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>
            Olá,
          </Text>
          <Text style={styles.username}>
            Arlindo Boa
          </Text>
        </View>

        <Text style={styles.message}>
          Hoje é dia de vitória
        </Text>
      </View>
    </View>
  )
}

export default Profile