import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
  },
  productContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 20,
    width: '100%',
  },
  box: {
    width: '90%',
    height: 1000,

    marginBottom: 100,
  },
  border: {
    borderWidth: 1,
  },
  productImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
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
  arrowIcon: {
    color: 'black',
    width: 20,
    height: 20,
    margin: 20,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    maxWidth: '90%',
  },
  coinIcon: {
    height: 50,
    width: 50,
  },
  coinWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  eggImage: {
    height: 300,
    width: 250,
  },
  eggText: {
    fontSize: 30,
  },
  eggBox: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  eggContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  prizeImage: {
    width: 200,
    height: 200,
  },
  prizeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
