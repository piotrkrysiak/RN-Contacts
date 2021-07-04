import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import Icon from '../../components/common/Icon';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <Icon type="material" size={25} name="menu" style={{padding: 10}} />
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <Container>
      <Text>Hi form contact</Text>
    </Container>
  );
};
export default Contacts;
