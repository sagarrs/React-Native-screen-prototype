import React,{Component} from 'react';
import {AppRegistry,View,Text,StyleSheet,TextInput,Image,TouchableOpacity, Linking} from 'react-native';
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
          <Text style={styles.txt}>
            <Text>An OTP has been sent by sms to </Text>
            <Text style={{fontWeight: "bold"}}>+91 8892275735</Text>
            <Text> for verification</Text>{"\n"}{"\n"}
            <Text style = {{ flex: 1, marginBottom: 10 }}>
            </Text>
          </Text>
        </View>
          <TouchableOpacity style={styles.box3}>
            <View style={styles.prevBtn}>
              <FontAwesome name='angle-left' style={styles.btnIcon1} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box4}>
            <View style={styles.nextBtn}>
              <FontAwesome name='angle-right' style={styles.btnIcon2} />
            </View>
          </TouchableOpacity>
          <View style = {{ flex: 1, flexDirection: "row", paddingLeft: 25, paddingRight: 25}}>
            <View style = {{ flex: 1 }}>
              <TextField inputContainerPadding={2}
                labelTextStyle={{paddingLeft: 21}}
                style = {{}}
                label='0'
              />
            </View>
            <View style = {{ flex: 0.2 }}>
            </View>
            <View style = {{ flex: 1}}>
              <TextField inputContainerPadding={2}
                labelTextStyle={{paddingLeft: 21}}
                style = {{ }}
                label='0'
              />
            </View>
            <View style = {{ flex: 0.2 }}>
            </View>
            <View style = {{ flex: 1 }}>
              <TextField inputContainerPadding={2}
                labelTextStyle={{paddingLeft: 21}}
                style = {{ }}
                label='0'
              />
            </View>
            <View style = {{ flex: 0.2 }}>
            </View>
            <View style = {{ flex: 1}}>
              <TextField inputContainerPadding={2}
                labelTextStyle={{paddingLeft: 21}}
                style = {{}}
                label='0'
              />
            </View>
          </View>
          <Text style={styles.txt2}>
            <Text>Not Recieved ? </Text>
            <Text style={{color: '#0277bd'}}
                  onPress={() => Linking.openURL('http://google.com')}>
              Resend OTP
            </Text>
        </Text>

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
  box4:{
    position: 'absolute',
    bottom: 15,
    right:15,
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
  nextBtn:{
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#ec0d7c',
    borderColor: '#ec0d7c',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnIcon1:{
    fontSize: 32,
    color: '#999',
  },
  btnIcon2:{
    fontSize: 32,
    color: '#fff',
  },

})

AppRegistry.registerComponent('Onboarding21',()=>Onboarding21);
