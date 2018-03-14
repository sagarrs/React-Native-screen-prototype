import React,{Component} from 'react';
import {AppRegistry, View,Text,StyleSheet,TextInput,Image,TouchableOpacity, Linking, Button} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { TextField } from 'react-native-material-textfield';

export default class Onboarding21 extends Component{
  state = {
    phone: '',
  };

  render(){
    let { phone } = this.state;

    return(
      <View style={styles.container}>
        <Text style={styles.title1}>Verify Phone Number</Text>
        <View style={styles.box1}>
          <Image source={require('./Images/Untitled-10.png')} style={styles.hifi}/>
        </View>
        <Text style={styles.txt}>
          <Text>Please enter your mobile number </Text>
        </Text>
        <View style = {{ flex: 1, flexDirection: "row", paddingTop: 5, paddingLeft: 25, paddingRight: 25}}>
          <View style = {{ flex: 0.2,  }}>
            <TextField inputContainerPadding={2}
              style = {{ paddingLeft: 300 }}
              label='+91'
              value={phone}
              onChangeText={ (phone) => this.setState({ phone }) }
            />
          </View>
          <View style = {{ flex: 0.2, }}>
          </View>
          <View style = {{ flex: 1, }}>
            <TextField inputContainerPadding={2}
              style = {{ }}
              label='Mobile'
              value={phone}
              onChangeText={ (phone) => this.setState({ phone }) }
            />
          </View>
        </View>
        <View style={{ flex: 1, paddingBottom: 85, paddingLeft: 45, paddingRight: 45}}>
          <Button title="Verify" color="#ec0d7c" onPress={() => {}}/>
        </View>
        <TouchableOpacity style={styles.box3}>
          <View style={styles.prevBtn}>
            <FontAwesome name='angle-left' style={styles.btnIcon1} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container: {
      flex: 1,
      width:'100%',
      height:'100%',
      padding: 15,
  },
  title1: {
    color: '#0277bd',
    fontSize: 25,
    paddingVertical: 15,
  },
  txt: {
    paddingTop: 50,
    paddingRight: 20,
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: "100",
    fontFamily: 'sans-serif-thin'
  },
  box1:{
    width: '100%',
  },
  box2:{
    width: '100%',
  },
  box3:{
    position: 'absolute',
    bottom: 15,
    left:15,
  },
  hifi:{
    width: 150,
    height: 150,
    resizeMode: 'contain',
    paddingRight: 300,
  },
  title:{
    fontSize: 28,
    color:'#222',
    paddingVertical: 15,
  },
  label:{
    fontSize: 18,
    color:'#777',
    paddingVertical: 7,
    lineHeight: 30,
  },
  txt2: {
    paddingBottom: 150,
    paddingLeft: 70,
    fontSize: 16,
    fontWeight: "100",
    fontFamily: 'sans-serif-thin',
  },
  prevBtn:{
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#fff',
    borderColor: '#999',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnIcon1:{
    fontSize: 32,
    color: '#999',
  },

})

AppRegistry.registerComponent('Onboarding21',()=>Onboarding21);
