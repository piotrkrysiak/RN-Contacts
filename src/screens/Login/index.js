import React from 'react';
import Input from '../../components/common/Input';
import Container from '../../components/common/Container';
import {useState} from 'react';
import {Text} from 'react-native';
import CustomButton from '../../components/common/CustomButton';

const Login = () => {
  const [text, onChangeText] = useState('Useless Text');

  return (
    <Container>
      <Input
        label="Ussername"
        onChangeText={onChangeText}
        value={text}
        iconPosition="right"
        // error={'this field is required'}
      />
      <Input
        label="Password"
        onChangeText={onChangeText}
        value={text}
        icon={<Text>HIDE</Text>}
        iconPosition="right"
      />
      <CustomButton primary title="Submit" loading={true} />
    </Container>
  );
};
export default Login;
