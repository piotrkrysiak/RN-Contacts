import React from 'react';
import Container from '../../components/common/Container';
import Input from '../../components/common/Input';
import {useState} from 'react';
import {Text} from 'react-native';

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
    </Container>
  );
};
export default Login;
