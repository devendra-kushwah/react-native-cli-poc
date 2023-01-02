import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome, Home, LogIn, SignUp } from '../screens';

const Stack = createNativeStackNavigator();

const Routes = ()=> {
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen options={{headerShown: false}} name="Login" component={LogIn} />
          <Stack.Screen options={{headerShown: false}} name="Branding" component={Welcome} />
          <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
          <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUp} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;
