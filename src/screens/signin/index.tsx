import React from "react"
import { View, Text, Image } from "react-native"
import styles from "./styles"

import ButtonIcon from  '../../components/ButtonIcon'

import illustrationImg from '../../assets/illustration.png'
import { useNavigation } from "@react-navigation/native"


const SignIn = () => {
  const navigation = useNavigation()

  const handleSignIn = () => {
    navigation.navigate('Home' as never)
  }
  return (
    <View style={styles.container}> 
      <Image 
        source={illustrationImg}
        style={styles.image}
        resizeMethod='auto'
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {`\n`} e organize suas {`\n`} jogatinas
        </Text>
        
        <Text style={styles.subTitle}>
          Crie grupos para jogar seus games {`\n`}
          favoritos com seus amigos
        </Text>
        
        <ButtonIcon 
          title='Entrar com Discord' 
          onPress={handleSignIn}
        />
      </View>
      </View>
    )
  }
  
  export default SignIn