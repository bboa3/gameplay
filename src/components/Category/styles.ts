import { StyleSheet } from 'react-native'
import theme from '../../global/styles/theme';

const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 124,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginRight: 8,
  },
  content: {
    width: 100,
    height: 116,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 15
  },
  check: {
    width: 12,
    height: 12,
    position: 'absolute',
    top: 7,
    right: 7,
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary50,
    borderWidth: 2,
    borderRadius: 3
  },
  checked: {
    width: 10,
    height: 10,
    position: 'absolute',
    top: 7,
    right: 7,
    backgroundColor: theme.colors.primary,
    borderRadius: 3
  }
})

export default styles;