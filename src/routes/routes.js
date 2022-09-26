import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {LogIn, SignUp} from '../screens';

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

export default Routes;
