import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Perfil } from './src/screens/Perfil/Perfil';
import {
  useFonts,
  Poppins_300Light,
  Poppins_600SemiBold,
} from "@expo-google-fonts/poppins";

//importando as fontes(decidi nao usalas no final)

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
  });
  if (!fontsLoaded && !fontsError) {
    return null;
  }

  //constando as fontsloaded/fontserror
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
            name="Perfil"
            component={Perfil}
            options={{ title: "Perfil" }}
        />
    </Stack.Navigator>
</NavigationContainer>
//selecionando a pagina home para ser mostrada
  );
}