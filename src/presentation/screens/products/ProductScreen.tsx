import { Text, View } from "react-native"
import { globalStyles } from "../../theme/theme"
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/StackNavigator";
import { useEffect } from "react";

export const ProductScreen = () => {
  const navigation = useNavigation()
  const {id, name} = useRoute<RouteProp<RootStackParamList, "Product">>().params;
  
  useEffect(() => {
    navigation.setOptions({
      title: name
    })
  },[]) 

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>
        Información del producto
      </Text>
    </View>
  )
}
