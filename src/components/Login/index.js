import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import logo from '../../assets/images/logo.png';
import styles from './styles';
import {REGISTER} from '../../constants/routeNames';

const LoginComponent = () => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Image height={70} width={70} source={logo} style={styles.logoImage} />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Please login here</Text>
      </View>
      <View style={styles.form}>
        <Input
          label="Ussername"
          iconPosition="right"
          placeholder="Enter Username"
          // error={'this field is required'}
        />
        <Input
          label="Password"
          icon={<Text>Show</Text>}
          iconPosition="right"
          placeholder="Enter Password"
          secureTextEntry={true}
        />
        <CustomButton primary title="Submit" />
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
