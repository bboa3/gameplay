import { StyleSheet } from "react-native"
import theme from "../../global/styles/theme";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.secondary90,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: '100%',
      height: 360
    },
    content: {
      marginTop: -40,
      paddingHorizontal: 50
    },
    title: {
      color: theme.colors.heading,
      textAlign: 'center',
      fontSize: 36,
      marginBottom: 16
    },
    subTitle: {
      color: theme.colors.heading,
      textAlign: 'center',
      fontSize: 15,
      marginBottom: 64
    }
  });

  export default styles
  