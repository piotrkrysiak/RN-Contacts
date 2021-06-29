import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 50,
  },
  title: {
    textAlign: 'center',
    fontSize: 21,
    fontWeight: '500',
    paddingTop: 20,
  },
  subTitle: {
    fontSize: 17,
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: '500',
  },
  form: {
    padding: 20,
  },
  createSection: {
    flexDirection: 'row',
  },
  infoText: {
    fontSize: 17,
  },
  linkBtn: {
    fontSize: 16,
    color: colors.primary,
    paddingLeft: 17,
  },
});
