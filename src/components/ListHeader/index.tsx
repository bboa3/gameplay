import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'



interface Props {
  title: string
  subTitle: string
}

const ListHeader: React.FC<Props> = ({title, subTitle}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.subTitle}>
        {subTitle}
      </Text>
    </View>
  )
}

export default ListHeader