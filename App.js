import React, { Component } from 'react';
import { StyleSheet, View, Text, Picker } from 'react-native';
import { TextField } from 'react-native-material-textfield';

export default class App extends React.Component {
  state = {
    phone: '',
  };
  constructor(props) {
  super(props);
  this.state = {
    bodyText: 'Account Information'
  };
}

  render() {
    let { phone } = this.state;

    return (
      <View>
        <Text style={{color: '#0277bd', fontSize: 20, padding: 20}}>Account Information</Text>
        <View style = {{ flex: 1, flexDirection: "row", paddingLeft: 25, paddingRight: 25}}>
          <View style = {{ flex: 1, marginBottom: 10 }}>
            <TextField inputContainerPadding={2}
              style = {{ marginBottom: -12 }}
              label='First Name'
              value={phone}
              onChangeText={ (phone) => this.setState({ phone }) }
            />
          </View>
          <View style = {{ flex: 0.2, marginBottom: 10 }}>
          </View>
          <View style = {{ flex: 1, marginBottom: 10 }}>
            <TextField inputContainerPadding={2}
              style = {{ marginBottom: -12 }}
              label='Last Name'
              value={phone}
              onChangeText={ (phone) => this.setState({ phone }) }
            />
          </View>
        </View>
        <View style={{paddingLeft: 20}}>
          <Picker
            selectedValue={this.state.language}
            style={{marginTop: 80, color: '#b0aeae',}}
            mode={'dropdown'}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Picker.Item label="Current Country" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
          <View style = {{borderWidth: 0.3, borderColor:'#b0aeae', marginRight:20,}} />
        </View>
      </View>
    );
  }
}
