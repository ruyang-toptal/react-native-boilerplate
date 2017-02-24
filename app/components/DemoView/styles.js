import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputRow: {
    alignSelf:'stretch',
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
    //backgroundColor:'#EEEECC'
  },
  question: {
    fontSize: 12,
    margin: 5,
    color:'teal',
    //flex:10
  },
  input: {
    height:30,
    flex:10
  },
  name: {
    width: 100
  },
  favorite: {
    width: 200
  },
  reason: {
    flex:10,
    borderColor: 'gray',
    borderWidth: 1,
    textDecorationLine: 'none',
    width: 250
  },

  conclusion: {
    textAlign: 'center',
    margin: 10,
    fontSize: 15,
    color: 'darkslategrey',
    textShadowColor: 'dimgray',
    textShadowOffset: {width:1, height:1}
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});