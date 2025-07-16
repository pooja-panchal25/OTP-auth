import { LogBox, Text, View } from 'react-native';
import React from 'react';
import AppNavigation from './navigations/AppNavigation';

if (Text.defaultProps) {
  Text.defaultProps.allowFontScaling = false;
} else {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
}
const App = () => {
  LogBox.ignoreAllLogs(); //Ignore all log console
  return (
    <View style={{ flex: 1 }}>
      <AppNavigation />
    </View>
  );
};

export default App;
