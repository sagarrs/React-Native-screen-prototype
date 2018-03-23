import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions, ScrollView, Button, TouchableOpacity, TextInput
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
    height: 300,
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
  ButtonStyle: {
     backgroundColor:'#0277bd',
     borderRadius:5,
     padding:10,
   },

   TextStyle:{
       color:'#fff',
       textAlign:'center',
   }
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
        'https://s3.ap-south-1.amazonaws.com/imagesv1/betterhalf_profiles/e3879294-f375-4ddf-abe9-2c993156322b/profile_pic.jpg',
        'https://s3.ap-south-1.amazonaws.com/imagesv1/betterhalf_profiles/e3879294-f375-4ddf-abe9-2c993156322b/1_Guo4Qiz.jpg',
        'https://s3.ap-south-1.amazonaws.com/imagesv1/betterhalf_profiles/e3879294-f375-4ddf-abe9-2c993156322b/1_Guo4Qiz.jpg',
        'https://s3.ap-south-1.amazonaws.com/imagesv1/betterhalf_profiles/e3879294-f375-4ddf-abe9-2c993156322b/1_Guo4Qiz.jpg',
        'https://s3.ap-south-1.amazonaws.com/imagesv1/betterhalf_profiles/e3879294-f375-4ddf-abe9-2c993156322b/1_Guo4Qiz.jpg'
      ],
      loadQueue: [0, 0, 0, 0],
      data: '',
      ButtonText : 'Connect',
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
              <Swiper loadMinimal loadMinimalSize={1} height={350} removeClippedSubviews={false} loop={false} dotColor="#ffffff" activeDotColor="#ea0e79">
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

          <View>
              <View style={{flexDirection: 'row',}}>
                <View>
                  <Text style={{color: '#565C66', fontSize: 30, fontWeight: '400', paddingRight: 100}}>{this.state.data.first_name}{"\n"}</Text>
                </View>
                <View style={{position: 'absolute', right: 5, top: 20}}>
                  <TouchableOpacity style={styles.ButtonStyle} activeOpacity = { .5 }>
                   <Text style={styles.TextStyle}> {this.state.ButtonText} </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection: 'row', paddingTop: 5}}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={require('./Images/03.png')} style={{width:15, height: 15}}/>
                  <Text style={{color: '#616975', fontSize: 13}}> 25</Text>
                </View>
                <View style={{flexDirection: 'row', paddingLeft:5}}>
                  <Image source={require('./Images/02.png')} style={{width:14, height: 14}}/>
                  <Text style={{color: '#616975', fontSize: 13}}> {this.state.data.current_city}, {this.state.data.current_country}{"\n"}</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', paddingTop: 2}}>
                <Image source={require('./Images/01.png')} style={{width:14, height: 14}}/>
                <Text style={{color: '#616975', fontSize: 13}}>  {this.state.data.job_title}, {this.state.data.company_name}{"\n"}</Text>
              </View>
          </View>

          <View style={{paddingTop: 35}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{width: 8, height: 25, backgroundColor: '#ea0e79'}} />
                  <Text style={{color: '#0277bd', fontSize: 18}}>  Compatibility together</Text>
                </View>
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
                        <View>
                          <AnimatedCircularProgress
                            size={60}
                            width={2}
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
                        </View>
                        <View style={{paddingTop: 20}}>
                          <AnimatedCircularProgress
                            size={60}
                            width={2}
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
                      </View>

                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'column', paddingLeft: 10}}>
                          <View>
                            <AnimatedCircularProgress
                              size={60}
                              width={2}
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
                          </View>
                          <View style={{paddingTop: 20}}>
                            <AnimatedCircularProgress
                              size={60}
                              width={2}
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
                            <Text style={{fontSize: 11, paddingTop: 5, paddingBottom: 5, color: '#616975'}}>Relationship</Text>
                          </View>
                        </View>
                      </View>

                      <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'column', paddingLeft: 10}}>
                          <View>
                            <AnimatedCircularProgress
                              size={60}
                              width={2}
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
                          </View>
                          <View style={{paddingTop: 20}}>
                            <AnimatedCircularProgress
                              size={60}
                              width={2}
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
                </View>
          </View>

          <View style={{paddingTop: 35}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{width: 8, height: 25, backgroundColor: '#ea0e79'}} />
                  <Text style={{color: '#0277bd', fontSize: 18}}>  About me{'\n'}</Text>
                </View>
                <View style = {{borderWidth: 0.3, borderColor:'#b0aeae',}} />
                <View style={{paddingTop: 10}}>

                  <TextInput value={this.state.data.about_myself} multiline={true} numberOfLines = {4} underlineColorAndroid='rgba(0,0,0,0)' style={{borderBottomColor: '#000000', borderBottomWidth: 1}} />
                </View>
          </View>

          <View style={{paddingTop: 35}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{width: 8, height: 25, backgroundColor: '#ea0e79'}} />
                  <Text style={{color: '#0277bd', fontSize: 18}}>  Personal details{'\n'}</Text>
                </View>
                <View style = {{borderWidth: 0.3, borderColor:'#b0aeae',}} />
                  <View style={{flex:1, flexDirection: 'row'}}>
                    <View style={{flex:1, flexDirection: 'column', paddingTop: 10, paddingLeft: 30}}>
                      <View>
                        <Image source={require('./Images/1.png')} style={{width:24, height: 24}}/>
                        <Text style={{color: '#616975', fontSize: 13,}}>{this.state.data.religion}</Text>
                        <Text style={{color: '#616975', fontSize: 13, right: 10}}>{this.state.data.caste}</Text>
                      </View>
                      <View style={{paddingTop: 15}}>
                        <Image source={require('./Images/4.png')} style={{width:24, height: 24}}/>
                        <Text style={{color: '#616975', fontSize: 13, left: 5}}>{this.state.data.smoke}</Text>
                      </View>
                    </View>

                    <View style={{flex:1, flexDirection: 'column', paddingTop: 10, paddingLeft: 30}}>
                      <View>
                        <Image source={require('./Images/2.png')} style={{width:24, height: 24}}/>
                        <Text style={{color: '#616975', fontSize: 13,}}>{this.state.data.height_num}</Text>
                      </View>
                      <View style={{paddingTop: 25}}>
                        <Image source={require('./Images/5.png')} style={{width:24, height: 24}}/>
                        <Text style={{color: '#616975', fontSize: 13, right: 15}}>{this.state.data.drink}</Text>
                      </View>
                    </View>

                    <View style={{flex:1, flexDirection: 'column', paddingTop: 10, paddingLeft: 30}}>
                      <View>
                        <Image source={require('./Images/3.png')} style={{width:24, height: 24}}/>
                        <Text style={{color: '#616975', fontSize: 13,}}>{this.state.data.mother_tongue}</Text>
                      </View>
                      <View style={{paddingTop: 25}}>
                        <Image source={require('./Images/6.png')} style={{width:24, height: 24}}/>
                        <Text style={{color: '#616975', fontSize: 13,}}>{this.state.data.food_type}</Text>
                      </View>
                    </View>
                  </View>
          </View>

          <View style={{paddingTop: 35}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{width: 8, height: 25, backgroundColor: '#ea0e79'}} />
                  <Text style={{color: '#0277bd', fontSize: 18}}>  Education and career{'\n'}</Text>
                </View>
                <View style = {{borderWidth: 0.3, borderColor:'#b0aeae',}} />
                  <View style={{flex:1, flexDirection: 'row'}}>
                    <View style={{flex:1, flexDirection: 'column', paddingTop: 10, paddingLeft: 30}}>
                      <View>
                        <Image source={require('./Images/7.png')} style={{width:24, height: 24}}/>
                        <Text style={{color: '#616975', fontSize: 13, right: 10}}>{this.state.data.higher_education}</Text>
                      </View>
                      <View style={{paddingTop: 25}}>
                        <Image source={require('./Images/10.png')} style={{width:24, height: 24}}/>
                        <Text style={{color: '#616975', fontSize: 13, right: 10}}>{this.state.data.income}</Text>
                      </View>
                    </View>

                    <View style={{flex:1, flexDirection: 'column', paddingTop: 10, paddingLeft: 30}}>
                      <View>
                        <Image source={require('./Images/8.png')} style={{width:24, height: 24}}/>
                        <Text style={{color: '#616975', fontSize: 13, paddingRight: 10}}>{this.state.data.college_name}{'\n'}</Text>
                      </View>
                    </View>

                    <View style={{flex:1, flexDirection: 'column', paddingTop: 10, paddingLeft: 30}}>
                      <View>
                        <Image source={require('./Images/9.png')} style={{width:24, height: 24, left: 5}}/>
                        <Text style={{color: '#616975', fontSize: 13,}}>{this.state.data.job_title}, {this.state.data.company_name}</Text>
                      </View>
                    </View>
                  </View>
          </View>

          <View style={{paddingTop: 35}}>
                <View style={{flexDirection: 'row'}}>
                  <View style={{width: 8, height: 25, backgroundColor: '#ea0e79'}} />
                  <Text style={{color: '#0277bd', fontSize: 18}}>  Profile verification{'\n'}</Text>
                </View>
                <View style = {{borderWidth: 0.3, borderColor:'#b0aeae',}} />

                  <View style={{flex:1, flexDirection: 'row'}}>
                    <View style={{flex:1, flexDirection: 'column'}}>
                      <View style={{paddingTop: 10, flexDirection: 'row'}}>
                        <Text style={{color: '#616975', fontSize: 13}}>Mobile</Text>
                        <Image source={require('./Images/71.png')} style={{width:14, height: 14, left: 20}}/>
                      </View>
                      <View style={{paddingTop: 10, flexDirection: 'row'}}>
                        <Text style={{color: '#616975', fontSize: 13}}>LinkedIn</Text>
                        <Image source={require('./Images/71.png')} style={{width:14, height: 14, left: 10}}/>
                      </View>
                    </View>

                    <View style={{flex:1, flexDirection: 'column'}}>
                      <View style={{paddingTop: 10, flexDirection: 'row'}}>
                        <Text style={{color: '#616975', fontSize: 13}}>Work email</Text>
                        <Image source={require('./Images/61.png')} style={{width:14, height: 14, left: 5}}/>
                      </View>
                      <View style={{paddingTop: 10, flexDirection: 'row'}}>
                        <Text style={{color: '#616975', fontSize: 13}}>Facebook </Text>
                        <Image source={require('./Images/71.png')} style={{width:14, height: 14, left: 10}}/>
                      </View>
                    </View>

                    <View style={{flex:1, flexDirection: 'column'}}>
                      <View style={{paddingTop: 10, flexDirection: 'row'}}>
                        <Text style={{color: '#616975', fontSize: 13}}>Personal email</Text>
                        <Image source={require('./Images/61.png')} style={{width:14, height: 14, left: 5}}/>
                      </View>
                      <View style={{paddingTop: 10, flexDirection: 'row'}}>
                        <Text style={{color: '#616975', fontSize: 13}}>Government ID</Text>
                        <Image source={require('./Images/71.png')} style={{width:14, height: 14, left: 5}}/>
                      </View>
                    </View>
                  </View>
          </View>

        </View>
      </ScrollView>
    )
  }
}
