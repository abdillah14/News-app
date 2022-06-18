import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import All from './screens/All';
import Business from './screens/Business';
import Sport from './screens/Sport';
import Tech from './screens/Tech';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';



const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator  screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarShowLabelL: false,
      }}>
      <Tab.Screen name="All" component={All} 
      options={{
        headerShown : false,
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),} }/>
      <Tab.Screen name="Business" component={Business} 
      options={{
        headerShown : false,
        tabBarIcon: ({color, size}) => (
          <Feather name="dollar-sign" color={color} size={size} />
        ),}} />
      <Tab.Screen name="Sport" component={Sport} 
      options={{
        headerShown : false,
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="sports-soccer" color={color} size={size} />
        ),} } />
      <Tab.Screen name="Tech" component={Tech} 
      options={{
        headerShown : false,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="chip" color={color} size={size} />
        ),} } />

    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
