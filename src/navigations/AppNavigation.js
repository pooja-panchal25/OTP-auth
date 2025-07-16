import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../auth/WelcomeScreen';
import LoginScreen from '../auth/LoginScreen';
import EnterPhoneScreen from '../auth/EnterPhoneScreen';
import NewPasswordScreen from '../auth/NewPasswordScreen';
import ConfirmOTPScreen from '../auth/ConfirmOTPScreen';

const Stack = createNativeStackNavigator();

function AppNavigation(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={({ route, navigation }) => ({
          headerShown: false,
          gestureEnabled: true,
          animationEnabled: true,
        })}
      >
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="EnterPhone" component={EnterPhoneScreen} />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen name="ConfirmOTP" component={ConfirmOTPScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
