import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ConfirmOTPScreen({ navigation, route }) {
  const [otp, setOtp] = useState('');
  const inputs = useRef([]);

  const handleConfirm = () => {
    if (otp.length === 4) {
      navigation.navigate('NewPassword');
    }
  };

  const handleChange = (text, index) => {
    const newOtp = otp.split('');
    newOtp[index] = text;
    const otpValue = newOtp.join('');
    setOtp(otpValue);

    if (text && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus(); // move to next input
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
          <Text style={styles.heading}>Confirm your number</Text>
          <Text style={styles.subtitle}>
            Enter the code sent to the number ending with{' '}
            {route.params.phone.slice(-4)}
          </Text>
          <View style={styles.otpContainer}>
            {[...Array(4)].map((_, i) => (
              <TextInput
                key={i}
                ref={ref => (inputs.current[i] = ref)}
                maxLength={1}
                keyboardType="numeric"
                style={styles.otpInput}
                value={otp[i] || ''}
                onChangeText={text => handleChange(text, i)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.confirmBtn}
        onPress={() => {
          handleConfirm();
        }}
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
  backIconBorder: {
    borderWidth: 1,
    borderColor: '#0066FF',
    padding: 6,
    borderRadius: 20,
  },
  logoBox: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  otpInput: {
    width: 70,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#fff',
  },
  confirmText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
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
});
