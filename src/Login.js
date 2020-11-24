import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {Button, Input} from './components';

const Login = (props) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#b2dfdb'}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS == 'android' ? null : 'padding'}>
        <ScrollView style={{flex: 1}} bounces={false}>
          <View style={{flex: 1}}>
            <Image
              source={require('./assets/cart.png')}
              style={styles.logoStyle}
            />

            <Input holder="Enter your E-mail" />
            <Input holder="Enter your Password" />
            <Button text="Login" />
            <Button text="Register" />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  logoStyle: {
    resizeMode: 'contain',
    width: Dimensions.get('window').width,
    // tintColor: '#444444 ',
    height: Dimensions.get('window').height * 0.4,
  },
});
