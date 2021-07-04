import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import Message from '../common/Message';
import logo from '../../assets/images/logo.png';
import styles from './styles';
import {REGISTER} from '../../constants/routeNames';
import {useState} from 'react';

const LoginComponent = ({form, loading, error, onSubmit, onChange}) => {
  const {navigate} = useNavigation();

  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <Container>
      <Image height={70} width={70} source={logo} style={styles.logoImage} />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Please login here</Text>
      </View>
      {error && !error?.error && (
        <Message
          danger
          retry
          onDismiss={() => {}}
          message={'Invalid credencial'}
        />
      )}
      {error?.error && (
        <Message
          danger
          retry
          retryFn={() => {
            console.log('RetryFn');
          }}
          onDismiss
          message={error?.error}
        />
      )}
      <View style={styles.form}>
        <Input
          label="Ussername"
          iconPosition="right"
          placeholder="Enter Username"
          onChangeText={value => onChange({name: 'userName', value})}
        />
        <Input
          label="Password"
          icon={
            <TouchableOpacity
              onPress={() => {
                setIsSecureEntry(prev => !prev);
              }}>
              <Text>{isSecureEntry ? 'Show' : 'Hide'}</Text>
            </TouchableOpacity>
          }
          iconPosition="right"
          placeholder="Enter Password"
          secureTextEntry={isSecureEntry}
          onChangeText={value => onChange({name: 'password', value})}
        />
        <CustomButton
          disabled={loading}
          loading={loading}
          onPress={onSubmit}
          primary
          title="Submit"
        />
      </View>
      <View>
        <View style={styles.createSection}>
          <Text style={styles.infoText}>Need a new account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(REGISTER);
            }}>
            <Text style={styles.linkBtn}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
