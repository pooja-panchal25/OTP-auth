import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  useEffect(() => {
    console.log('in print===');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0079e9" />
      <View style={styles.logoContainer}>
        <View style={styles.logoBox}>
          <Image
            source={require('../img/logo.png')}
            resizeMode="contain"
            style={{
              height: 100,
              width: 100,
            }}
          />
        </View>
      </View>

      <Text style={styles.title}>Welcome to spehre!</Text>
      <Text style={styles.subtitle}>
        Find peers, internships, and job opportunities{'\n'}
        within your college community.
      </Text>

      <TouchableOpacity
        style={styles.createAccountButton}
        onPress={() => navigation?.navigate('EnterPhone')}
      >
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => navigation?.navigate('Login')}
      >
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.footerText}>
        By continuing, you agree to Spehre.io's{' '}
        <Text style={styles.linkText}>Terms of Service</Text> and{' '}
        <Text style={styles.linkText}>Privacy Policy</Text>
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0079e9',
    padding: '6%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: '20%',
    alignItems: 'center',
  },
  logoBox: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#e0e0e0',
    textAlign: 'center',
    marginBottom: '20%',
  },
  createAccountButton: {
    backgroundColor: '#0085ff',
    borderRadius: 30,
    width: '100%',
    paddingVertical: '5%',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2,
  },
  createAccountText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  orText: {
    color: '#ffffffaa',
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    width: '100%',
    paddingVertical: '5%',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2,
  },
  loginText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
  footerText: {
    color: '#ffffffaa',
    fontSize: 14,
    textAlign: 'center',
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 20,
  },
  linkText: {
    textDecorationLine: 'underline',
    color: '#ffffff',
  },
});

export default WelcomeScreen;
