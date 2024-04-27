import { StyleSheet } from "react-native"


export const globalColors = {
  primary: '#576CBC',
  white: '#fff',
  backgroundColor: '#0B2447',
  backgroundColorHeader: '#19376D'
}

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: globalColors.backgroundColor
  },
  primaryButton: {
    backgroundColor: globalColors.primary,
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10
  },
  buttonText: {
    color: globalColors.white,
    fontSize: 18
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: globalColors.white,
    marginBottom: 10
  }
})