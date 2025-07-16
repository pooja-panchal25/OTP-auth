import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function NewPasswordScreen({ navigation }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleConfirm = () => {
    if (password === confirmPassword && password.length >= 6) {
      // Save password logic here
      alert('Register successfully');
      navigation.popToTop();
    } else {
      alert('Passwords do not match or too short');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <View style={styles.backIconBorder}>
            <Icon name="arrow-back-outline" size={24} color="#0066FF" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation?.navigate('Login')}>
          <Text style={styles.signUpBtn}>Login</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={styles.mainContainer}>
          <View style={styles.logoBox}>
            <Image
              source={require('../img/logo.png')}
              style={{
                height: 100,
                width: 100,
              }}
            />
          </View>
          <Text style={styles.heading}>Choose new password</Text>
          <Text style={styles.subtitle}>Choose a new password to login</Text>
          <View style={styles.inputBox}>
            <Icon
              name="lock-closed-outline"
              size={20}
              color="#999999"
              style={styles.iconLeft}
            />
            <TextInput
              secureTextEntry
              style={styles.input}
              placeholder="New Password"
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.inputBox}>
            <Icon
              name="lock-closed-outline"
              size={20}
              color="#999999"
              style={styles.iconLeft}
            />
            <TextInput
              secureTextEntry={!showPassword}
              style={styles.input}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
              style={styles.iconRight}
            >
              <Icon
                name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                size={20}
                color="#999999"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => handleConfirm()}
        style={styles.confirmBtn}
      >
        <Text style={styles.confirmText}>Confirm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FBFF',
    padding: '6%',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: '10%',
  },
  signUpBtn: {
    color: '#0066FF',
    borderWidth: 1,
    borderColor: '#0066FF',
    paddingHorizontal: '6%',
    paddingVertical: '3%',
    borderRadius: 26,
    fontSize: 16,
  },
  mainContainer: {
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 40,
    fontWeight: '600',
    marginVertical: '6%',
  },
  subtitle: {
    fontSize: 16,
    color: '#999999',
    marginBottom: 24,
    fontWeight: '600',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#C2D6FF',
    borderRadius: 20,
    paddingHorizontal: 12,
    marginBottom: 14,
    height: 60,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 16,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  logoBox: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmBtn: {
    backgroundColor: '#0066FF',
    borderRadius: 30,
    width: '100%',
    paddingVertical: '5%',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2,
  },
  confirmText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  backIconBorder: {
    borderWidth: 1,
    borderColor: '#0066FF',
    padding: 6,
    borderRadius: 20,
  },
});
