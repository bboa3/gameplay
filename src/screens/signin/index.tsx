import React from "react"
import { View, Text, Image, StatusBar } from "react-native"
import styles from "./styles"

import ButtonIcon from  '../../components/ButtonIcon'

import illustrationImg from '../../assets/illustration.png';


const SignIn = () => {
    return (
        <View style={styles.container}>
            <StatusBar 
                barStyle='light-content' 
                backgroundColor='transparent'
                translucent
            />
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

                <ButtonIcon title='Entrar com Discord' activeOpacity={0.6} />
            </View>
        </View>
    )
}

export default SignIn