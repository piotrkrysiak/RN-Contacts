import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import logo from '../../assets/images/logo.png';
import {LOGIN} from '../../constants/routeNames';
import styles from './styles';

const RegisterComponent = ({form, errors, onSubmit, onChange}) => {
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
          onChangeText={value => onChange({name: 'userName', value})}
          error={errors.userName}
        />
        <Input
          label="First Name"
          iconPosition="right"
          placeholder="Enter First Name"
          onChangeText={value => onChange({name: 'firstName', value})}
          error={errors.firstName}
        />
        <Input
          label="Last Name"
          iconPosition="right"
          placeholder="Enter Last Name"
          onChangeText={value => onChange({name: 'lastName', value})}
          error={errors.lastName}
        />
        <Input
          label="Email"
          iconPosition="right"
          placeholder="Enter Email"
          onChangeText={value => onChange({name: 'email', value})}
          error={errors.email}
        />
        <Input
          label="Password"
          icon={<Text>Show</Text>}
          iconPosition="right"
          placeholder="Enter Password"
          onChangeText={value => onChange({name: 'password', value})}
          secureTextEntry={true}
          error={errors.password}
        />
        <CustomButton onPress={onSubmit} primary title="Submit" />
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
