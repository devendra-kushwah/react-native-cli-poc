import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {LogIn, SignUp} from '../screens';

const Stack = createNativeStackNavigator();

const AppNavigator = createStackNavigator(
  {
    LogIn: {
      screen: LogIn,
    },
    SignUp: {
      screen: SignUp,
    },
  },
  {
    initialRouteName: 'LogIn',
    // contentOptions: {
    //   activeTintColor: 'red',
    // },
  },
);

const Routes = createAppContainer(AppNavigator);

// const Routes = ()=> {
//   return(
//     <NavigationContainer>
//         <Stack.Navigator initialRouteName="SignUp">
//           <Stack.Screen name="Login" component={LogIn} />
//           <Stack.Screen name="SignUp" component={SignUp} />
//         </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

export default Routes;
