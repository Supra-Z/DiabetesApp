import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/home/HomeScreen'
import ProfileScreen from './screens/home/ProfileScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './screens/loginScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false, title: "" }}
          name="Login"
          component={LoginScreen}>
        </Stack.Screen>
        <Stack.Screen
            options={{ headerShown: false, title: "" }}
            name="TabNavigator"
            component={TabNavigator}
        >
        </Stack.Screen>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{title: 'Profile'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
