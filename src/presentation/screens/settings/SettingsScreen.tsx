import { Text, View } from "react-native"
import { globalStyles } from "../../theme/theme"
import { ButtonNavigation } from "../../components/Navigation/ButtonNavigation"
import { StackActions, useNavigation } from "@react-navigation/native"


export const SettingsScreen = () => {
  const navigator = useNavigation()
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>
        Ajustes de la aplicación
      </Text>
      <ButtonNavigation label="Regresar al home" onPress={() => navigator.dispatch(StackActions.popToTop())}  /> 
    </View>
  )
}
