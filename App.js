import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { TextField } from 'react-native-material-textfield';

const Img1 = './Images/Untitled-10.png'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bodyText: 'Account Information',
      text: '0',
    };
  }
  state = {
    phone: '',
  };

  render() {
    let { phone } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Verify Phone Number</Text>
        <Image style={styles.image} source={require(Img1)}/>
        <Text style={styles.txt}>
          <Text>An OTP has been sent by sms to </Text>
          <Text style={{fontWeight: "bold"}}>+91 8892275735</Text>
          <Text> for verification</Text>{"\n"}{"\n"}
          <Text style = {{ flex: 1, marginBottom: 10 }}>
          </Text>
        </Text>
        <View style = {{ flexDirection: "row", paddingLeft: 50, paddingBottom: 10}}>
          <View style = {{ flex: 0.2 }}>
            <TextInput style={{height: 40, paddingLeft: 19, fontSize: 26, color: '#dcdcdc'}} onChangeText={(text) => this.setState({text})} value={this.state.text} />
          </View>
          <View style = {{ flex: 0.2 }}>
            <TextInput style={{height: 40, paddingLeft: 19, fontSize: 26, color: '#dcdcdc'}} onChangeText={(text) => this.setState({text})} value={this.state.text} />
          </View>
          <View style = {{ flex: 0.2 }}>
            <TextInput style={{height: 40, paddingLeft: 19, fontSize: 26, color: '#dcdcdc'}} onChangeText={(text) => this.setState({text})} value={this.state.text} />
          </View>
          <View style = {{ flex: 0.2 }}>
            <TextInput style={{height: 40, paddingLeft: 19, fontSize: 26, color: '#dcdcdc'}} onChangeText={(text) => this.setState({text})} value={this.state.text} />
          </View>
        </View>
        <Text style={styles.txt2}>
            <Text>Not Recieved ? </Text>
            <Text style={{color: '#0277bd'}}>Resend OTP</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    color: '#0277bd',
    fontSize: 25,
    padding: 30
  },
  image: {
    flex: 1,
    width: 180,
    marginLeft: 80,
    // marginBottom: 300
  },
  txt: {
    // flex: 1,
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 20,
    fontWeight: "100",
    fontFamily: 'sans-serif-thin'
  },
  txt2: {
    marginBottom: 150,
    paddingLeft: 70,
    fontSize: 16,
    fontWeight: "100",
    fontFamily: 'sans-serif-thin',
  }
});
