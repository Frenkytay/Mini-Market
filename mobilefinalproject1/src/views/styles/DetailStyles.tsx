import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    height: Dimensions.get('window').height,
    flex: 1,
    paddingTop: 10,
    // height: 1000,
  },
  arrowIcon: {
    color: 'black',
    width: 20,
    height: 20,
    margin: 20,
  },
  image: {
    width: '50%',
    minHeight: 300,
    backgroundColor: 'white',
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  header: {
    // display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    maxWidth: '85%',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '90%',
    // paddingBottom: 100,
    // borderWidth: 1,
  },
  button: {
    width: '90%',
    display: 'flex',
    height: 40,
    backgroundColor: 'purple',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sellButton: {
    width: '90%',
    display: 'flex',
    height: 40,
    backgroundColor: '#ffff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    // shadowColor: 'purple',
    // shadowOffset: {width: 3, height: 3},
    // shadowOpacity: 0.6,
    // shadowRadius: 5,
    elevation: 8,
    margin: 20,
  },
  sellButtonText: {
    color: 'purple',
    fontSize: 20,
  },
  priceTag: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginBottom: 20,
    marginTop: 20,
  },
  price: {
    fontSize: 15,
    color: 'red',
  },
  descriptionTag: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  description: {
    width: '90%',
    fontSize: 15,
    color: 'black',
    paddingBottom: 50,
  },
});
export default styles;
