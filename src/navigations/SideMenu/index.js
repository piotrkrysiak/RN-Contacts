import React from 'react';
import {
  SafeAreaView,
  Image,
  Alert,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Container from '../../components/common/Container';
import logo from '../../assets/images/logo.png';
import styles from './styles';
import {SETTINGS} from '../../constants/routeNames';
import logoutUser from '../../context/actions/auth/logoutUser';

const SideMenu = ({navigation, authDispach}) => {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout!', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },

      {
        text: 'OK',
        onPress: () => {
          logoutUser()(authDispach);
        },
      },
    ]);
  };

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
      name: 'Logout',
      onPress: handleLogout,
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
