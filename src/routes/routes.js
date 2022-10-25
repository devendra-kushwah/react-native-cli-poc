import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {LogIn, SignUp} from '../screens';

const Stack = createNativeStackNavigator();

const Routes = ()=> {
  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="SignUp">
          <Stack.Screen name="Login" component={LogIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;
