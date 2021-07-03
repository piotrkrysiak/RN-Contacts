import React from 'react';
import {SafeAreaView, Image, View, Text, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';
import logo from '../../assets/images/logo.png';
import styles from './styles';
import {SETTINGS} from '../../constants/routeNames';

const SideMenu = ({navigation}) => {
  const menuItems = [
    {
      icon: <Text>T</Text>,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Text>T</Text>,
      name: 'Something',
      onPress: () => {},
    },
  ];
  return (
    <SafeAreaView>
      <Container>
        <Image height={70} width={70} source={logo} style={styles.logoImage} />
        <View>
          {menuItems.map(({icon, name, onPress}) => (
            <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
              {icon}
              <Text style={styles.itemText}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
};

export default SideMenu;
