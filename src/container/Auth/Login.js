import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import {styles} from './style';
import {Button, Input} from '../../components';

const Login = () => {
  return (
      
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View
        // style={{flex: 1}}
        style={styles.mainContent}>
        <View>
          <Text style={styles.heading}>Welcome to Signin!</Text>
        </View>
        <View style={styles.imageViewStyles}>
          <Image
            source={require('../../assests/logo.png')}
            style={styles.imageStyles}
          />
        </View>
        <View style={styles.main}>
          <View>
            <Input placeholder="Email" />
          </View>

          <View>
            <Input placeholder="Password" />
          </View>
          <View>
            <Button onPress={() => alert('Login')}>
              <Text style={styles.buttonText}>Login</Text>
            </Button>
          </View>

          <View>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
