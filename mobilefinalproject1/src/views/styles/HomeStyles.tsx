import {Dimensions, StyleSheet} from 'react-native';

const HomeStyles = StyleSheet.create({
  app: {
    // flex: 1,
  },
  background: {
    backgroundColor: '#D0A2F7',
    height: 170,
    position: 'relative',

    // height: 300,
  },
  input: {
    margin: 15,
    // borderWidth: 1,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    minHeight: 50,
    alignItems: 'center',
    borderRadius: 5,
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'white',
    height: 40,
  },
  icon: {
    height: 30,
    width: 30,
  },
  inputText: {
    height: 40,
    fontSize: 15,
  },
  productBtn: {
    height: 50,
    width: 'auto',
    padding: 10,
    borderRadius: 5,
    marginLeft: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  productBtnText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  coin: {
    position: 'absolute',
    right: 20,
    // top: 100,
    top: 90,
    width: 'auto',
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
    elevation: 8,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
  },
  productMenuText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  productContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 50,
    width: '100%',
  },
  box: {
    width: '90%',
    height: 1000,

    marginBottom: 100,
    borderRadius: 10,
    // overflow: 'scroll',
  },
  border: {
    borderWidth: 1,
  },
  productImage: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    margin: 10,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 3,
  },
  productTitle: {
    fontWeight: 'bold',
    maxWidth: '80%',
    fontSize: 15,
  },
  itemGridContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.6,
    shadowRadius: 5,
    elevation: 3,
    margin: 1,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  gridView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: Dimensions.get('window').height * 0.65,
  },
  rowContainer: {
    width: '100%',
    height: Dimensions.get('window').height * 0.65,
  },
  gamesIcon: {
    height: 40,
    width: 30,
    backgroundColor: '#fff',
  },
  gamesIconWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    borderColor: 'black',
    margin: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  myCoin: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#7743DB',
  },
  myCoinText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
export default HomeStyles;
