import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions, ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const { width } = Dimensions.get('window')
const loading = require('./Images/loading.gif')

const styles = {
  wrapper: {
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    backgroundColor: 'transparent',
    height: 250,
    borderRadius: 10,
  },

  loadingView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)'
  },

  loadingImage: {
    width: 60,
    height: 60
  },
}

const Slide = props => {
  return (<View style={styles.slide}>
    <Image onLoad={props.loadHandle.bind(null, props.i)} style={styles.image} source={{uri: props.uri}} />
    {
      !props.loaded && <View style={styles.loadingView}>
        <Image style={styles.loadingImage} source={loading} />
      </View>
    }
  </View>)
}

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imgList: [
        'https://gitlab.pro/yuji/demo/uploads/d6133098b53fe1a5f3c5c00cf3c2d670/DVrj5Hz.jpg_1',
        'https://gitlab.pro/yuji/demo/uploads/2d5122a2504e5cbdf01f4fcf85f2594b/Mwb8VWH.jpg',
        'https://gitlab.pro/yuji/demo/uploads/4421f77012d43a0b4e7cfbe1144aac7c/XFVzKhq.jpg',
        'https://gitlab.pro/yuji/demo/uploads/576ef91941b0bda5761dde6914dae9f0/kD3eeHe.jpg'
      ],
      loadQueue: [0, 0, 0, 0]
    }
    this.loadHandle = this.loadHandle.bind(this)
  }
  loadHandle (i) {
    let loadQueue = this.state.loadQueue
    loadQueue[i] = 1
    this.setState({
      loadQueue
    })
  }
  render () {
    return (
          <View style={{flex: 1, paddingBottom: 30, paddingLeft: 10, paddingRight: 10}}>
            <Swiper loadMinimal loadMinimalSize={1} style={{}} loop={false}>
              {
                this.state.imgList.map((item, i) => <Slide
                loadHandle={this.loadHandle}
                loaded={!!this.state.loadQueue[i]}
                uri={item}
                i={i}
                key={i} />)
              }
            </Swiper>
          <ScrollView>
             <Text style={{color: '#0277bd', fontSize: 20}}>Compatibility together</Text>
              <View style = {{borderWidth: 0.3, borderColor:'#b0aeae',}} />
              <View style={{flexDirection: 'row', paddingTop: 30}}>
                 <View style={{paddingRight: 10}}>
                    <AnimatedCircularProgress
                      size={90}
                      width={3}
                      fill={80}
                      tintColor="#ea0e79"
                      onAnimationComplete={() => console.log('onAnimationComplete')}
                      backgroundColor="#d9d9db">
                      {
                        (fill) => (
                          <Text style={styles.points}>
                            80
                          </Text>
                        )
                      }
                    </AnimatedCircularProgress>
                    <Text style={{fontSize: 11, paddingTop: 5}}>Overall compatibility</Text>
                  </View>

                  <View style = {{borderWidth: 0.3, borderColor:'#b0aeae',}} />

                    <View style={{flexDirection: 'column', paddingLeft: 10}}>
                        <AnimatedCircularProgress
                          size={60}
                          width={3}
                          fill={80}
                          tintColor="#05c4ff"
                          onAnimationComplete={() => console.log('onAnimationComplete')}
                          backgroundColor="#d9d9db">
                          {
                            (fill) => (
                              <Text style={styles.points}>
                                80
                              </Text>
                            )
                          }
                        </AnimatedCircularProgress>
                        <Text style={{fontSize: 11, paddingTop: 5, paddingBottom: 5}}>    Values</Text>

                        <AnimatedCircularProgress
                          size={60}
                          width={3}
                          fill={80}
                          tintColor="#b5003c"
                          onAnimationComplete={() => console.log('onAnimationComplete')}
                          backgroundColor="#d9d9db">
                          {
                            (fill) => (
                              <Text style={styles.points}>
                                80
                              </Text>
                            )
                          }
                        </AnimatedCircularProgress>
                        <Text style={{fontSize: 11, paddingTop: 5, paddingBottom: 10}}>Intellectual</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                      <View style={{flexDirection: 'column', paddingLeft: 10}}>
                        <AnimatedCircularProgress
                          size={60}
                          width={3}
                          fill={80}
                          tintColor="#fffa05"
                          onAnimationComplete={() => console.log('onAnimationComplete')}
                          backgroundColor="#d9d9db">
                          {
                            (fill) => (
                              <Text style={styles.points}>
                                80
                              </Text>
                            )
                          }
                        </AnimatedCircularProgress>
                        <Text style={{fontSize: 11, paddingTop: 5, paddingBottom: 10}}>Relationship</Text>

                        <AnimatedCircularProgress
                          size={60}
                          width={3}
                          fill={80}
                          tintColor="#cc05ff"
                          onAnimationComplete={() => console.log('onAnimationComplete')}
                          backgroundColor="#d9d9db">
                          {
                            (fill) => (
                              <Text style={styles.points}>
                                80
                              </Text>
                            )
                          }
                        </AnimatedCircularProgress>
                        <Text style={{fontSize: 11, paddingTop: 5, paddingBottom: 10}}>Relationship</Text>
                      </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                      <View style={{flexDirection: 'column', paddingLeft: 10}}>
                        <AnimatedCircularProgress
                          size={60}
                          width={3}
                          fill={80}
                          tintColor="#8dd802"
                          onAnimationComplete={() => console.log('onAnimationComplete')}
                          backgroundColor="#d9d9db">
                          {
                            (fill) => (
                              <Text style={styles.points}>
                                80
                              </Text>
                            )
                          }
                        </AnimatedCircularProgress>
                        <Text style={{fontSize: 11, paddingTop: 5, paddingBottom: 5}}>  Emotional</Text>

                        <AnimatedCircularProgress
                          size={60}
                          width={3}
                          fill={80}
                          tintColor="#00e0ff"
                          onAnimationComplete={() => console.log('onAnimationComplete')}
                          backgroundColor="#d9d9db">
                          {
                            (fill) => (
                              <Text style={styles.points}>
                                80
                              </Text>
                            )
                          }
                        </AnimatedCircularProgress>
                        <Text style={{fontSize: 11, paddingTop: 5, paddingBottom: 5}}>     Social</Text>
                      </View>
                    </View>
              </View>

              <View style={{paddingTop: 30}}>
                <Text style={{color: '#0277bd', fontSize: 20}}>Personal details{'\n'}</Text>
                <View style = {{borderWidth: 0.3, borderColor:'#b0aeae',}} />

                  <View style={{flex:1, flexDirection: 'row', paddingTop: 10,}}>
                    <View style={{paddingLeft: 30}}>
                      <FontAwesome name='bell' style={{fontSize: 26, color: '#00e0ff'}}/>
                      <Text style={{color: '#000000', fontSize: 12}}>Hindu{"\n"}Maheshwari</Text>
                    </View>
                    <View style={{paddingLeft: 50}}>
                      <FontAwesome name='align-right' style={{fontSize: 26, color: '#00e0ff'}}/>
                      <Text style={{color: '#000000', fontSize: 12}}>5ft 3in{'\n'}</Text>
                    </View>
                    <View style={{paddingLeft: 70}}>
                      <FontAwesome name='language' style={{fontSize: 26, color: '#00e0ff'}}/>
                      <Text style={{color: '#000000', fontSize: 12}}>Hindi{'\n'}</Text>
                    </View>
                  </View>

                  <View style={{flex:1, flexDirection: 'row', paddingTop: 10,}}>
                    <View style={{paddingLeft: 30}}>
                      <FontAwesome name='male' style={{fontSize: 26, color: '#00e0ff'}}/>
                      <Text style={{color: '#000000', fontSize: 12}}>Hindu{"\n"}Maheshwari</Text>
                    </View>
                    <View style={{paddingLeft: 50}}>
                      <FontAwesome name='coffee' style={{fontSize: 26, color: '#00e0ff'}}/>
                      <Text style={{color: '#000000', fontSize: 12}}>5ft 3in{'\n'}</Text>
                    </View>
                    <View style={{paddingLeft: 70}}>
                      <FontAwesome name='home' style={{fontSize: 26, color: '#00e0ff'}}/>
                      <Text style={{color: '#000000', fontSize: 12}}>Hindi{'\n'}</Text>
                    </View>
                  </View>

              </View>

              <View style={{paddingTop: 30}}>
                <Text style={{color: '#0277bd', fontSize: 20}}>Education and career{'\n'}</Text>
                <View style = {{borderWidth: 0.3, borderColor:'#b0aeae',}} />

                  <View style={{flex:1, flexDirection: 'row', paddingTop: 10,}}>
                    <View style={{paddingLeft: 30}}>
                      <FontAwesome name='bell' style={{fontSize: 26, color: '#00e0ff'}}/>
                      <Text style={{color: '#000000', fontSize: 12}}>Hindu{"\n"}Maheshwari</Text>
                    </View>
                    <View style={{paddingLeft: 50}}>
                      <FontAwesome name='align-right' style={{fontSize: 26, color: '#00e0ff'}}/>
                      <Text style={{color: '#000000', fontSize: 12}}>5ft 3in{'\n'}</Text>
                    </View>
                    <View style={{paddingLeft: 70}}>
                      <FontAwesome name='language' style={{fontSize: 26, color: '#00e0ff'}}/>
                      <Text style={{color: '#000000', fontSize: 12}}>Hindi{'\n'}</Text>
                    </View>
                  </View>

                  <View style={{flex:1, flexDirection: 'row', paddingTop: 10,}}>
                    <View style={{paddingLeft: 30}}>
                      <FontAwesome name='male' style={{fontSize: 26, color: '#00e0ff'}}/>
                      <Text style={{color: '#000000', fontSize: 12}}>Hindu{"\n"}Maheshwari</Text>
                    </View>
                    <View style={{paddingLeft: 50}}>
                      <FontAwesome name='coffee' style={{fontSize: 26, color: '#00e0ff'}}/>
                      <Text style={{color: '#000000', fontSize: 12}}>5ft 3in{'\n'}</Text>
                    </View>
                    <View style={{paddingLeft: 70}}>
                      <FontAwesome name='home' style={{fontSize: 26, color: '#00e0ff'}}/>
                      <Text style={{color: '#000000', fontSize: 12}}>Hindi{'\n'}</Text>
                    </View>
                  </View>

              </View>

          </ScrollView>
        </View>
    )
  }
}
