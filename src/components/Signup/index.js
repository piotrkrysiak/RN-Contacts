import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import logo from '../../assets/images/logo.png';
import {LOGIN} from '../../constants/routeNames';
import styles from './styles';
import Message from '../common/Message';

const RegisterComponent = ({
  form,
  loading,
  error,
  errors,
  onSubmit,
  onChange,
}) => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Image height={70} width={70} source={logo} style={styles.logoImage} />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>
      </View>
      <View style={styles.form}>
        {error?.error && (
          <Message
            danger
            retry
            retryFn={() => {
              console.log('RetryFn');
            }}
            message={error?.error}
          />
        )}
        <Input
          label="Username"
          iconPosition="right"
          placeholder="Enter Username"
          onChangeText={value => onChange({name: 'userName', value})}
          error={errors.userName || error?.username?.[0]}
        />
        <Input
          label="First Name"
          iconPosition="right"
          placeholder="Enter First Name"
          onChangeText={value => onChange({name: 'firstName', value})}
          error={errors.firstName || error?.first_name?.[0]}
        />
        <Input
          label="Last Name"
          iconPosition="right"
          placeholder="Enter Last Name"
          onChangeText={value => onChange({name: 'lastName', value})}
          error={errors.lastName || error?.last_name?.[0]}
        />
        <Input
          label="Email"
          iconPosition="right"
          placeholder="Enter Email"
          onChangeText={value => onChange({name: 'email', value})}
          error={errors.email || error?.email?.[0]}
        />
        <Input
          label="Password"
          icon={<Text>Show</Text>}
          iconPosition="right"
          placeholder="Enter Password"
          onChangeText={value => onChange({name: 'password', value})}
          secureTextEntry={true}
          error={errors.password || error?.password?.[0]}
        />
        {console.log('error', error)}
        <CustomButton
          loading={loading}
          disabled={loading}
          onPress={onSubmit}
          primary
          title="Submit"
        />
      </View>
      <View>
        <View style={styles.createSection}>
          <Text style={styles.infoText}>Already have account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigate(LOGIN);
            }}>
            <Text style={styles.linkBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
