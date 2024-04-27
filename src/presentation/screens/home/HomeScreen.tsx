import { Pressable, Text, View } from "react-native"
import { globalStyles } from "../../theme/theme"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { ButtonNavigation } from "../../components/Navigation/ButtonNavigation"
import { RootStackParamList } from "../../routes/StackNavigator"


export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  
  const navigateToProducts = () => {
    navigation.navigate('Products')
  }

  const navigateToSettings = () => {
    navigation.navigate('Settings')
  }

  return (
    <View style={globalStyles.container}>
      <ButtonNavigation onPress={navigateToProducts} label="Ver productos" />
      <ButtonNavigation onPress={navigateToSettings} label="Ajustes" />
    </View>
  )
}
