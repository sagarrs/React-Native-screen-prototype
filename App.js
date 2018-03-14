import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView, TouchableHighlight, Linking } from 'react-native';
import MaterialTabs from 'react-native-material-tabs';
import RequestSent from './RequestSent';

const Img1 = 'https://i.ytimg.com/vi/9D1vO-7tfZg/maxresdefault.jpg'
const Img2 = 'https://i.ytimg.com/vi/9D1vO-7tfZg/maxresdefault.jpg'

export default class Example extends Component {

  constructor(props) {
    super(props);
    this.state = {
      titleText: "Your Matches",
    };
  }

  state = {
    selectedTab: 0,
  };

  setTab(tab) {
    this.setState({ selectedTab: tab });
  }

  onPress = () => {
      Linking.openURL('http://google.com')
  }
 // onPress = {() => Linking.openURL('http://google.com')}

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.titleText} onPress={this.onPressTitle}>
            {this.state.titleText}{'\n'}
          </Text>
        <View>
          <MaterialTabs
            items={['All', 'Request sent', 'Request recieved']}
            selectedIndex={this.state.selectedTab}
            onChange={this.setTab.bind(this)}
            barColor="#ffffff"
            inactiveTextColor="#000000"
            indicatorColor="#ec0d7c"
            activeTextColor="black"
            // textStyle={{ fontFamily: 'Papyrus' }}
          />
        </View>
          <View style={{flexDirection: "row"}}>
          <TouchableHighlight onPress={this.onPress} underlayColor={'#fff'}>
            <View style={styles.card}>
              <Image style={{flex: 1}} source={{uri: Img1}}/>
              <View>
              <View style={{backgroundColor: '#0277bd'}}>
                <Text style={{color: '#ffffff', textAlign: 'center'}}>90% compatible</Text>
              </View>
                <Text style={{color: '#0277bd', marginTop: 2, marginLeft: 4}}>Gauri . 26</Text>
                <Text style={{color: '#A9A9A9', marginTop: 1, marginLeft: 4}}>Asst. Editor</Text>
                <Text style={{color: '#A9A9A9', marginTop: 1, marginLeft: 4}}>Bangalore, India</Text>
              </View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.onPress} underlayColor={'#fff'}>
            <View style={styles.card}>
              <Image style={{flex: 1}} source={{uri: Img2}}/>
              <View>
                <View style={{backgroundColor: '#0277bd'}}>
                  <Text style={{color: '#ffffff', textAlign: 'center'}}>90% compatible</Text>
                </View>
                <Text style={{color: '#0277bd', marginTop: 2, marginLeft: 4}}>Gauri . 26</Text>
                <Text style={{color: '#A9A9A9', marginTop: 1, marginLeft: 4}}>Asst. Editor</Text>
                <Text style={{color: '#A9A9A9', marginTop: 1, marginLeft: 4}}>Bangalore, India</Text>
              </View>
            </View>
          </TouchableHighlight>
          </View>
          <View style={{flexDirection: "row"}}>
          <TouchableHighlight onPress={this.onPress} underlayColor={'#fff'}>
            <View style={styles.card}>
              <Image style={{flex: 1}} source={{uri: Img1}}/>
              <View>
              <View style={{backgroundColor: '#0277bd'}}>
                <Text style={{color: '#ffffff', textAlign: 'center'}}>90% compatible</Text>
              </View>
                <Text style={{color: '#0277bd', marginTop: 2, marginLeft: 4}}>Gauri . 26</Text>
                <Text style={{color: '#A9A9A9', marginTop: 1, marginLeft: 4}}>Asst. Editor</Text>
                <Text style={{color: '#A9A9A9', marginTop: 1, marginLeft: 4}}>Bangalore, India</Text>
              </View>
            </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={this.onPress} underlayColor={'#fff'}>
              <View style={styles.card}>
                <Image style={{flex: 1}} source={{uri: Img2}}/>
                <View>
                  <View style={{backgroundColor: '#0277bd'}}>
                    <Text style={{color: '#ffffff', textAlign: 'center'}}>90% compatible</Text>
                  </View>
                  <Text style={{color: '#0277bd', marginTop: 2, marginLeft: 4}}>Gauri . 26</Text>
                  <Text style={{color: '#A9A9A9', marginTop: 1, marginLeft: 4}}>Asst. Editor</Text>
                  <Text style={{color: '#A9A9A9', marginTop: 1, marginLeft: 4}}>Bangalore, India</Text>
                </View>
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  titleText: {
    flex: 1,
    fontSize: 25,
    fontWeight: '100',
    color: '#0277bd',
    paddingTop: 20
  },
  card: {
    flex: 2,
    width: 160,
    height: 235,
    marginTop:20,
    marginRight:5,
    marginLeft:5,
    borderWidth: 1,
    borderRadius: 3,
  }
});
