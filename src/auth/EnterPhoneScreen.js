import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function EnterPhoneScreen({ navigation }) {
  const [phone, setPhone] = useState('');

  const handleConfirm = () => {
    if (phone.length === 10) {
      navigation.navigate('ConfirmOTP', { phone });
    } else {
      alert('Enter Phone number');
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
        <TouchableOpacity>
          <Text style={styles.signUpBtn}>Sign up</Text>
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
          <Text style={styles.heading}>Enter your phone number</Text>
          <Text style={styles.subtitle}>
            We will send an OTP verification to you.
          </Text>
          <View style={styles.inputContainer}>
            <Text style={styles.prefix}>+91</Text>
            <TextInput
              keyboardType="number-pad"
              maxLength={10}
              style={styles.input}
              value={phone}
              onChangeText={setPhone}
              placeholder="Phone Number"
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm</Text>
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
  inputContainer: {
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
  prefix: {
    marginRight: 8,
    paddingRight: 10,
    borderRightColor: '#007bff',
    borderRightWidth: 1,
    padding: 8,
  },
  input: { flex: 1 },
  button: {
    backgroundColor: '#0066FF',
    borderRadius: 30,
    width: '100%',
    paddingVertical: '5%',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 2,
  },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: '600' },
  logoBox: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIconBorder: {
    borderWidth: 1,
    borderColor: '#0066FF',
    padding: 6,
    borderRadius: 20,
  },
});
