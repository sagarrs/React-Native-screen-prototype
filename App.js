import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions, ScrollView, Button,
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
    borderRadius: 30,
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
      loadQueue: [0, 0, 0, 0],
      data: ''
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

  componentDidMount = () => {
    var myObj = require('./JsonData.json');
      this.setState({
        data: myObj
      })
    }

  render () {
    return (
      <ScrollView>
          <View style={{flex: 1, paddingBottom: 30, paddingLeft: 20, paddingRight: 20, paddingTop: 30}}>
            <View style={{borderRadius: 10}}>
              <Swiper loadMinimal loadMinimalSize={1} height={190} removeClippedSubviews={false} loop={false}>
                {
                  this.state.imgList.map((item, i) => <Slide
                  loadHandle={this.loadHandle}
                  loaded={!!this.state.loadQueue[i]}
                  uri={item}
                  i={i}
                  key={i} />)
                }
              </Swiper>
            </View>

          <View style={{paddingBottom: 20, paddingTop: 20}}>
            <View style={{flexDirection: 'row',}}>
              <View>
                <Text style={{color: '#565C66', fontSize: 20, paddingRight: 100}}>{this.state.data.first_name}</Text>
              </View>
              <View style={{position: 'absolute', right: 15}}>
                <Button title="Connect" color="#0277bd" onPress={() => {}}/>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('./Images/bday.png')} style={{width:25, height: 25}}/>
                <Text style={{color: '#616975', fontSize: 16}}>  25</Text>
              </View>
              <View style={{flexDirection: 'row', paddingLeft:5}}>
                <Image source={require('./Images/location.png')} style={{width:20, height: 20}}/>
                <Text style={{color: '#616975', fontSize: 16}}>{this.state.data.current_city}, {this.state.data.current_country}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image source={require('./Images/9.png')} style={{width:20, height: 20}}/>
              <Text style={{color: '#616975', fontSize: 16}}>  {this.state.data.job_title}, {this.state.data.company_name}</Text>
            </View>
          </View>


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
                    <Text style={{fontSize: 11, paddingTop: 5, color: '#616975'}}>Overall compatibility</Text>
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
                        <Text style={{fontSize: 11, paddingTop: 5, paddingBottom: 5, color: '#616975'}}>    Values</Text>

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
                        <Text style={{fontSize: 11, paddingTop: 5, paddingBottom: 10, color: '#616975'}}>Intellectual</Text>
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
                        <Text style={{fontSize: 11, paddingTop: 5, paddingBottom: 10, color: '#616975'}}>Relationship</Text>

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
                        <Text style={{fontSize: 11, paddingTop: 5, paddingBottom: 10, color: '#616975'}}>Relationship</Text>
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
                        <Text style={{fontSize: 11, paddingTop: 5, paddingBottom: 5, color: '#616975'}}>  Emotional</Text>

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
                        <Text style={{fontSize: 11, paddingTop: 5, paddingBottom: 5, color: '#616975'}}>     Social</Text>
                      </View>
                    </View>
              </View>

              <View style={{paddingTop: 30}}>
                <Text style={{color: '#0277bd', fontSize: 20}}>About me{'\n'}</Text>
                <View style = {{borderWidth: 0.3, borderColor:'#b0aeae',}} />
                <View style={{paddingTop: 10}}>
                  <Text style={{fontSize: 14, color: '#616975', lineHeight: 25}}>{this.state.data.about_myself} {'\n'}</Text>
                </View>
              </View>

              <View style={{paddingTop: 30}}>
                <Text style={{color: '#0277bd', fontSize: 20}}>Personal details{'\n'}</Text>
                <View style = {{borderWidth: 0.3, borderColor:'#b0aeae',}} />
                  <View style={{flex:1, flexDirection: 'row'}}>
                    <View style={{flex:1, flexDirection: 'column', paddingTop: 10,}}>
                      <View>
                        <Image source={require('./Images/1.png')} style={{width:40, height: 40}}/>
                        <Text style={{color: '#616975', fontSize: 12}}>{this.state.data.religion}{"\n"}{this.state.data.caste}</Text>
                      </View>
                      <View style={{paddingTop: 10}}>
                        <Image source={require('./Images/4.png')} style={{width:40, height: 40}}/>
                        <Text style={{color: '#616975', fontSize: 12, paddingTop:5, paddingLeft: 15}}>{this.state.data.smoke}{'\n'}</Text>
                      </View>
                    </View>

                    <View style={{flex:1, flexDirection: 'column', paddingTop: 10, paddingLeft: 30}}>
                      <View>
                        <Image source={require('./Images/2.png')} style={{width:40, height: 40}}/>
                        <Text style={{color: '#616975', fontSize: 12}}>{this.state.data.height_num}{'\n'}</Text>
                      </View>
                      <View style={{paddingTop: 10}}>
                        <Image source={require('./Images/5.png')} style={{width:40, height: 40}}/>
                        <Text style={{color: '#616975', fontSize: 12}}>{this.state.data.drink}{"\n"}</Text>
                      </View>
                    </View>

                    <View style={{flex:1, flexDirection: 'column', paddingTop: 10, paddingLeft: 30}}>
                      <View>
                        <Image source={require('./Images/3.png')} style={{width:40, height: 40}}/>
                        <Text style={{color: '#616975', fontSize: 12}}>{this.state.data.mother_tongue}</Text>
                      </View>
                      <View style={{paddingTop: 10}}>
                        <Image source={require('./Images/6.png')} style={{width:40, height: 40}}/>
                        <Text style={{color: '#616975', fontSize: 12}}>{this.state.data.food_type}</Text>
                      </View>
                    </View>
                  </View>
              </View>

              <View style={{paddingTop: 30}}>
                <Text style={{color: '#0277bd', fontSize: 20}}>Education and career{'\n'}</Text>
                <View style = {{borderWidth: 0.3, borderColor:'#b0aeae',}} />
                  <View style={{flex:1, flexDirection: 'row'}}>
                    <View style={{flex:1, flexDirection: 'column', paddingTop: 10, paddingRight: 10}}>
                      <View>
                        <Image source={require('./Images/7.png')} style={{width:40, height: 40}}/>
                        <Text style={{color: '#616975', fontSize: 12,}}>{this.state.data.higher_education}</Text>
                      </View>
                      <View style={{paddingTop: 10}}>
                        <Image source={require('./Images/10.png')} style={{width:40, height: 40}}/>
                        <Text style={{color: '#616975', fontSize: 12}}>{this.state.data.income}</Text>
                      </View>
                    </View>

                    <View style={{flex:1, flexDirection: 'column', paddingTop: 10, paddingLeft: 30}}>
                      <View>
                        <Image source={require('./Images/8.png')} style={{width:40, height: 40}}/>
                        <Text style={{color: '#616975', fontSize: 12, paddingRight: 20}}>{this.state.data.college_name}{'\n'}</Text>
                      </View>
                    </View>

                    <View style={{flex:1, flexDirection: 'column', paddingTop: 10, paddingLeft: 30}}>
                      <View>
                        <Image source={require('./Images/9.png')} style={{width:40, height: 40}}/>
                        <Text style={{color: '#616975', fontSize: 12}}>{this.state.data.job_title}, {this.state.data.company_name}</Text>
                      </View>
                    </View>
                  </View>
              </View>

              <View style={{paddingTop: 30}}>
                <Text style={{color: '#0277bd', fontSize: 20}}>Profile verification{'\n'}</Text>
                <View style = {{borderWidth: 0.3, borderColor:'#b0aeae',}} />

                  <View style={{flex:1, flexDirection: 'row'}}>
                    <View style={{flex:1, flexDirection: 'column'}}>
                      <View style={{paddingTop: 10, flexDirection: 'row'}}>
                        <Text style={{color: '#616975', fontSize: 12}}>Mobile   </Text>
                        <FontAwesome name='check-circle' style={{fontSize: 16, color: '#0277bd'}}/>
                      </View>
                      <View style={{paddingTop: 10, flexDirection: 'row'}}>
                        <Text style={{color: '#616975', fontSize: 12}}>LinkedIn   </Text>
                        <FontAwesome name='check-circle' style={{fontSize: 16, color: '#fcfc05'}}/>
                      </View>
                    </View>

                    <View style={{flex:1, flexDirection: 'column'}}>
                      <View style={{paddingTop: 10, flexDirection: 'row'}}>
                        <Text style={{color: '#616975', fontSize: 12}}>Work email   </Text>
                        <FontAwesome name='exclamation-circle' style={{fontSize: 16, color: '#0277bd'}}/>
                      </View>
                      <View style={{paddingTop: 10, flexDirection: 'row'}}>
                        <Text style={{color: '#616975', fontSize: 12}}>Facebook   </Text>
                        <FontAwesome name='check-circle' style={{fontSize: 16, color: '#fcfc05'}}/>
                      </View>
                    </View>

                    <View style={{flex:1, flexDirection: 'column'}}>
                      <View style={{paddingTop: 10, flexDirection: 'row'}}>
                        <Text style={{color: '#616975', fontSize: 12}}>Personal email   </Text>
                        <FontAwesome name='exclamation-circle' style={{fontSize: 16, color: '#0277bd'}}/>
                      </View>
                      <View style={{paddingTop: 10, flexDirection: 'row'}}>
                        <Text style={{color: '#616975', fontSize: 12}}>Government ID   </Text>
                        <FontAwesome name='check-circle' style={{fontSize: 16, color: '#fcfc05'}}/>
                      </View>
                    </View>
                  </View>

              </View>
        </View>
      </ScrollView>
    )
  }
}
