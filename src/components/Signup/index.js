import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import logo from '../../assets/images/logo.png';
import {LOGIN} from '../../constants/routeNames';
import styles from './styles';

const RegisterComponent = () => {
  const {navigate} = useNavigation();

  return (
    <Container>
      <Image height={70} width={70} source={logo} style={styles.logoImage} />
      <View>
        <Text style={styles.title}>Welcome to RNContacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>
      </View>
      <View style={styles.form}>
        <Input
          label="Username"
          iconPosition="right"
          placeholder="Enter Username"
          // error={'this field is required'}
        />
        <Input
          label="First Name"
          iconPosition="right"
          placeholder="Enter First Name"
          // error={'this field is required'}
        />
        <Input
          label="Last Name"
          iconPosition="right"
          placeholder="Enter Last Name"
          // error={'this field is required'}
        />
        <Input
          label="Email"
          iconPosition="right"
          placeholder="Enter Email"
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
