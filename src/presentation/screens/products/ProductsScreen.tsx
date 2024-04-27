import { FlatList, StyleSheet, Text, View } from "react-native"
import { ButtonNavigation } from "../../components/Navigation/ButtonNavigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { globalColors, globalStyles } from "../../theme/theme";
import { RootStackParamList } from "../../routes/StackNavigator";

const products = [
  { id: 1, name: 'Laptop HP Envy' },
  { id: 2, name: 'Teléfono Samsung Galaxy S21' },
  { id: 3, name: 'Zapatos Nike Air Max' },
  { id: 4, name: 'Cámara Canon EOS 80D' },
  { id: 5, name: 'Libro "Cien años de soledad" de Gabriel García Márquez' }
];

export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Productos</Text>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ButtonNavigation
            onPress={() => navigation.navigate('Product', {
              id: item.id,
              name: item.name, 
            })}
            label={item.name}
          />
        )}
      />
      <Text style={globalStyles.title}>Ajustes</Text>
      <ButtonNavigation onPress={() => navigation.navigate('Settings')} label="Ajustes" />
    </View>
  )
}
