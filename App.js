import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import MaterialTabs from 'react-native-material-tabs';

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

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={this.onPressTitle}>
            {this.state.titleText}{'\n'}{'\n'}
          </Text>
          <Text numberOfLines={5}>
            {this.state.bodyText}
          </Text>
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
            <View style={styles.card}>
              <Image style={{flex: 1}} source={{uri: Img1}}/>
              <View>
              <View style={{backgroundColor: '#0277bd'}}>
                <Text style={{color: '#ffffff', textAlign: 'center'}}>90% compatible</Text>
              </View>
                <Text style={{color: '#0277bd', margin: 2}}>Gauri . 26</Text>
                <Text style={{color: '#A9A9A9', margin: 2}}>Asst. Editor</Text>
                <Text style={{color: '#A9A9A9', margin: 2}}>Bangalore, India</Text>
              </View>
            </View>
            <View style={styles.card}>
              <Image style={{flex: 1}} source={{uri: Img2}}/>
              <View>
                <View style={{backgroundColor: '#0277bd'}}>
                  <Text style={{color: '#ffffff', textAlign: 'center'}}>90% compatible</Text>
                </View>
                <Text style={{color: '#0277bd', margin: 2}}>Gauri . 26</Text>
                <Text style={{color: '#A9A9A9', margin: 2}}>Asst. Editor</Text>
                <Text style={{color: '#A9A9A9', margin: 2}}>Bangalore, India</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: "row"}}>
            <View style={styles.card}>
              <Image style={{flex: 1}} source={{uri: Img1}}/>
              <View>
              <View style={{backgroundColor: '#0277bd'}}>
                <Text style={{color: '#ffffff', textAlign: 'center'}}>90% compatible</Text>
              </View>
                <Text style={{color: '#0277bd', margin: 2}}>Gauri . 26</Text>
                <Text style={{color: '#A9A9A9', margin: 2}}>Asst. Editor</Text>
                <Text style={{color: '#A9A9A9', margin: 2}}>Bangalore, India</Text>
              </View>
            </View>
            <View style={styles.card}>
              <Image style={{flex: 1}} source={{uri: Img2}}/>
              <View>
                <View style={{backgroundColor: '#0277bd'}}>
                  <Text style={{color: '#ffffff', textAlign: 'center'}}>90% compatible</Text>
                </View>
                <Text style={{color: '#0277bd', margin: 2}}>Gauri . 26</Text>
                <Text style={{color: '#A9A9A9', margin: 2}}>Asst. Editor</Text>
                <Text style={{color: '#A9A9A9', margin: 2}}>Bangalore, India</Text>
              </View>
            </View>
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
  baseText: {
    // fontFamily: 'Cochin',
  },
  titleText: {
    flex: 1,
    fontSize: 25,
    fontWeight: '100',
    color: '#0277bd',
  },
  card: {
    flex: 2,
    width: 150,
    height: 230,
    marginTop:20,
    marginRight:5,
    marginLeft:5,
    borderWidth: 1,
    borderRadius: 3,
  }
});
