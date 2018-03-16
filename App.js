import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  Slider,
  Image,
  Platform,
  ScrollView, TouchableWithoutFeedback
} from 'react-native';

import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { RadioButtons, SegmentedControls } from 'react-native-radio-buttons';

class Example extends React.Component {
  state = {
    multiSliderValue: [21, 55],
    multiSliderValue1: [54, 169],
    multiSliderValue2: [22, 55],
  };

  multiSliderValuesChange = (values) => {
    this.setState({
      multiSliderValue: values,
    });
  }
  multiSliderValuesChange1 = (values) => {
    this.setState({
      multiSliderValue1: values,
    });
  }
  multiSliderValuesChange2 = (values) => {
    this.setState({
      multiSliderValue2: values,
    });
  }

  render() {
    const options = [
      'Yes',
      'No',
    ];
    const option = [
      'Vegetarian',
      'Non Vegetarian',
    ];
    const opt = [
      'Never',
      'Occassionally',
      'Regularly'
    ];
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Partner Preferences{'\n'}{'\n'}{'\n'}</Text>
        <View style={styles.sliders}>
            <View style={styles.sliderOne}>
              <Text style={styles.text}>Age</Text>
              <Text style={styles.text}>{this.state.multiSliderValue[0]} - {this.state.multiSliderValue[1]}</Text>
            </View>
            <MultiSlider
              values={[this.state.multiSliderValue[0], this.state.multiSliderValue[1]]}
              sliderLength={280}
              onValuesChange={this.multiSliderValuesChange}
              min={0}
              max={100}
              step={1}
              selectedStyle={{backgroundColor: '#0277bd',}}
              markerStyle={{backgroundColor: '#0277bd',}}
              // containerStyle={{height:40,}}
              allowOverlap
              snapped
            />
            <View style={styles.sliderOne}>
              <Text style={styles.text}>Height</Text>
              <Text style={styles.text}>{this.state.multiSliderValue1[0]} cm - {this.state.multiSliderValue1[1]} cm</Text>
            </View>
            <MultiSlider
              values={[this.state.multiSliderValue1[0], this.state.multiSliderValue1[1]]}
              sliderLength={280}
              onValuesChange={this.multiSliderValuesChange1}
              min={0}
              max={100}
              step={1}
              selectedStyle={{backgroundColor: '#0277bd',}}
              markerStyle={{backgroundColor: '#0277bd',}}
              // containerStyle={{height:40,}}
              allowOverlap
              snapped
            />
            <View style={styles.sliderOne}>
              <Text style={styles.text}>Monthly Income</Text>
              <Text style={styles.text}>{this.state.multiSliderValue2[0]} k - {this.state.multiSliderValue2[1]} k </Text>
              <Text style={styles.text}></Text>
            </View>
            <MultiSlider
              values={[this.state.multiSliderValue2[0], this.state.multiSliderValue2[1]]}
              sliderLength={280}
              onValuesChange={this.multiSliderValuesChange2}
              min={0}
              max={100}
              step={1}
              selectedStyle={{backgroundColor: '#0277bd',}}
              markerStyle={{backgroundColor: '#0277bd',}}
              // containerStyle={{height:40,}}
              allowOverlap
              snapped
            />
        </View>
        <View style={{padding: 20}}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text>Same location</Text>
              <SegmentedControls
                containerStyle={{width:160}}
                options={ options }
              />
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between', paddingTop: 10}}>
            <Text>Same religion</Text>
              <SegmentedControls
                containerStyle={{width:160}}
                options={ options }
              />
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between', paddingTop: 10}}>
            <Text>Same mother tongue</Text>
              <SegmentedControls
                containerStyle={{width:160}}
                options={ options }
              />
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between', paddingTop: 10}}>
            <Text>Sagar</Text>
              <SegmentedControls
                containerStyle={{width:160}}
                options={ options }
              />
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between', paddingTop: 10}}>
            <Text>Same caste</Text>
              <SegmentedControls
                containerStyle={{width:160}}
                options={ options }
              />
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between', paddingTop: 10}}>
            <Text>Food preferences</Text>
              <SegmentedControls
                containerStyle={{width:180}}
                optionStyle={{fontSize: 12,}}
                options={ option }
              />
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between', paddingTop: 10}}>
            <Text>Smoke</Text>
              <SegmentedControls
                containerStyle={{width:240}}
                optionStyle={{fontSize: 12,}}
                options={ opt }
              />
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between', paddingTop: 10}}>
            <Text>Drink</Text>
              <SegmentedControls
                containerStyle={{width:240}}
                optionStyle={{fontSize: 12,}}
                options={ opt }
              />
          </View>
        </View>
      </View>
    );
  }
}

export default Example;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  sliders: {
    paddingLeft: 20,
    width: 280,
    height: 200,
  },
  text: {
    alignSelf: 'center',
    paddingBottom: 20,
  },
  sliderOne: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  titleText: {
    flex: 1,
    fontSize: 25,
    fontWeight: '100',
    color: '#0277bd',
    paddingTop: 20,
    paddingLeft: 20,
  },
});
