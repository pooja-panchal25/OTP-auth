import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topRow}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <View style={styles.backIconBorder}>
            <Icon name="arrow-back-outline" size={24} color="#0066FF" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation?.navigate('NewPassword')}>
          <Text style={styles.signUpBtn}>Sign up</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.heading}>
        Login to your <Text style={styles.headingBold}>{'account. '}</Text>
        <Icon name="lock-open" size={30} color="#0066FF" />
      </Text>

      <Text style={styles.subheading}>Enter your credentials to sign in.</Text>
      <View style={styles.inputBox}>
        <Icon
          name="mail-outline"
          size={20}
          color="#999999"
          style={styles.iconLeft}
        />
        <TextInput
          placeholder="Email"
          keyboardType="email-address"
          style={styles.input}
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
          placeholder="Password"
          secureTextEntry={!showPassword}
          style={styles.input}
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
      <TouchableOpacity style={{ alignSelf: 'flex-end', marginBottom: 20 }}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>Or login using</Text>
      <View style={styles.socialRow}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={{ uri: 'https://img.icons8.com/color/48/google-logo.png' }}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/mac-os.png' }}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation?.navigate('EnterPhone');
        }}
      >
        <Text style={styles.signupPrompt}>
          Don’t have an account <Text style={styles.signupLink}>sign up?</Text>
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.confirmBtn}>
        <Text style={styles.confirmText}>Confirm</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
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
    paddingHorizontal: 14,
    paddingVertical: '3%',
    borderRadius: 26,
    fontSize: 16,
  },
  heading: {
    fontSize: 46,
    fontWeight: '400',
    marginBottom: 8,
  },
  headingBold: {
    fontWeight: 'bold',
  },
  subheading: {
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
  iconLeft: {
    marginRight: 6,
  },
  iconRight: {
    padding: 4,
  },
  forgotText: {
    color: '#0066FF',
    fontSize: 14,
  },
  orText: {
    textAlign: 'center',
    color: '#999999',
    marginVertical: '10%',
    fontWeight: '800',
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '10%',
  },
  socialButton: {
    backgroundColor: '#fff',
    padding: '5%',
    borderRadius: 10,
    elevation: 2,
    marginHorizontal: 10,
    flex: 0.5,
    alignSelf: 'center',
    alignItems: 'center',
    borderWidth: 0.1,
  },
  socialIcon: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
  },
  signupPrompt: {
    textAlign: 'center',
    color: '#999',
    marginBottom: '20%',
    fontSize: 16,
  },
  signupLink: {
    color: '#0066FF',
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
