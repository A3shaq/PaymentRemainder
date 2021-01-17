import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    // height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFF',
    // marginTop: 00,
  },
  main: {
    backgroundColor: 'transparent',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    width: 302,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
  },
  imageViewStyles: {
    //flex: 1,
    marginTop: 40,
    width: '100%',
    // justifyContent: 'flex-end',
    alignItems: 'flex-end',
    // backgroundColor: 'red',
  },
  imageStyles: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: -60,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  forgotPassword: {
    color: '#7804C6',
    fontWeight:"500",
    marginTop:28,
  },
});

export {styles};
