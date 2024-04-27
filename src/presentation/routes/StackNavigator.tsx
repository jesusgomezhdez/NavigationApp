import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { globalColors } from '../theme/theme';
import { ProductScreen } from '../screens/products/ProductScreen';

export type RootStackParamList = {
  Home: undefined;
  Products: undefined;
  Product: {
    id: number;
    name: string;
  }
  Settings: undefined;
}

const Stack = createStackNavigator<RootStackParamList>();

export const StackNagigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: globalColors.backgroundColorHeader,
          elevation: 0,
          shadowColor: 'transparent' //Ocualtar elevation en iOS
        },
        title: '',
        headerTintColor: globalColors.white
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}