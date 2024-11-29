import { Link, Stack } from 'expo-router';
import { ImageBackground, Text, StyleSheet, View, TouchableOpacity,Image } from 'react-native';
import tw from 'twrnc'
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { AntDesign, Entypo, FontAwesome5, Ionicons, MaterialIcons, Octicons, SimpleLineIcons } from '@expo/vector-icons';


export default function NotFoundScreen() {
  return (
   <View style={tw` h-full bg-white`}>
           <View style={tw`h-70`}>
              <View style={tw`relative`}>
                  <TouchableOpacity style={tw`relative`} activeOpacity={0.5}>
                    <ImageBackground style={tw`bg-[#dc5c36] h-70`} imageStyle={tw`h-70 opacity-8`} source={{uri:'https://ik.imagekit.io/nbuckpbcy/market.jpeg?updatedAt=1729000313125'}}/>
                  </TouchableOpacity>
                  <View style={tw`flex-row absolute`}>
                       <View style={tw`bg-white h-10 w-35 rounded-full ml-4 mt-58 flex-row`}>
                         <TouchableOpacity activeOpacity={0.5}>
                            <Text style={tw`text-center mt-3 ml-4 text-black`}>Sign in</Text>
                          </TouchableOpacity>
                          <View style={tw`border-l-[0.2] ml-[11] my-2`}></View>
                          <TouchableOpacity activeOpacity={0.5}>
                            <Text style={tw`text-center mt-3 ml-2 text-black`}> Register</Text>
                          </TouchableOpacity>
                        </View>
                      
                        <View style={tw`border-2 w-7 h-7 mt-10 ml-20 rounded-full`}>
                          <TouchableOpacity activeOpacity={0.5}>
                            <Image style={tw`p-[13] rounded-full`} source={{uri:'https://ik.imagekit.io/nbuckpbcy/republic-congo-flag-brush-stroke-national-flag-free-vector.jpg?updatedAt=1729001557037'}}/>
                          </TouchableOpacity>
                        </View>
                     
                      <TouchableOpacity activeOpacity={0.5}>
                        <Ionicons name="settings" size={23} color="white"  style={tw`mt-[42] ml-4`} />
                      </TouchableOpacity>
                      
                      <TouchableOpacity activeOpacity={0.5}>
                        <Ionicons name="notifications-outline" size={24} color="white" style={tw`mt-[42] ml-4`} />
                      </TouchableOpacity>
                      
                  </View>
                    <View style={tw`absolute ml-5 mt-25 flex-row`}>
                      <View>
                        <Text style={tw` w-48 text-white font-bold text-8 pb-2 leading-none`}>Welcome to BulayaExpress</Text>
                        <Text style={tw`italic w-40 text-white font-medium pb-2`}>Lorem ipsum dolor sit amet, consectetur adipisicing</Text>
                      </View>
                      
                      <Image style={tw`h-40 w-40 ml-8`} source={{uri:'https://ik.imagekit.io/nbuckpbcy/Screenshot_2024-10-15_at_17.46.40-removebg-preview%20(1).png?updatedAt=1729076751520'}}/>
                    </View>
              </View>

               <View>
                  <View style={tw`h-22 bg-gray-200 mt-10 mx-5 rounded-2xl`}>
                     <TouchableOpacity activeOpacity={0.5}>
                        <View style={tw`flex-row ml-3 mt-4 pb-2`}>
                            <View style={tw`h-5 w-5 bg-white`}>
                              <FontAwesome5 name="store" size={10} color="black" style={tw`mt-[5] ml-[4]`}/>
                            </View>
                            <Text style={tw`ml-2 mt-1 mr-[2]`}>My stores</Text>
                            <View></View>
                            <AntDesign name="arrowright" size={14} color="black" style={tw`ml-57 mt-1`} />
                          </View>
                     </TouchableOpacity>
                     
                        <View style={tw`h-[0.1] bg-orange-600 mx-3`}></View>

                        <TouchableOpacity activeOpacity={0.5}>
                          <View style={tw`flex-row ml-3 mt-2`}>
                            <View style={tw`h-5 w-5 bg-white`}>
                             <SimpleLineIcons name="support" size={12} color="black"  style={tw`mt-[4] ml-[4]`}/>
                            </View>
                            <Text style={tw`ml-2 mt-1 `}>Support</Text>
                            <AntDesign name="arrowright" size={14} color="black" style={tw`ml-60 mt-1`} />
                          </View>
                        </TouchableOpacity>
                  </View>
               
               </View>
                <View style={tw`ml-8 mt-4`}>
                  <Text style={tw``}>Preferences</Text>
                </View>
                
                <View>
                  <View style={tw`h-47 bg-gray-200 mt-4 mx-5 rounded-2xl`}>
                  <TouchableOpacity activeOpacity={0.5}>
                    <View style={tw`flex-row ml-3 mt-4 pb-3`}>
                          <View style={tw`h-5 w-5 bg-white`}>
                          <Ionicons name="notifications-outline" size={14} color="black" style={tw`mt-[3] ml-[3]`} />
                          </View>
                          <Text style={tw`ml-2 mt-1 mr-[2]`}>Push notifications</Text>
                          <View></View>
                          
                        </View>
                  </TouchableOpacity>
                     
                        <View style={tw`h-[0.1] bg-orange-600 mx-3`}></View>

                  <TouchableOpacity activeOpacity={0.5}>
                    <View style={tw`flex-row ml-3 mt-3`}>
                      <View style={tw`h-5 w-5 bg-white`}>
                        <Ionicons name="scan-outline" size={14} color="black" style={tw`mt-[3] ml-[3]`} />
                      </View>
                      <Text style={tw`ml-2 mt-1 pb-4`}>Face ID</Text>
                          
                    </View>
                  </TouchableOpacity>
                     
                    <View style={tw`h-[0.1] bg-orange-600 mx-3`}></View>

                   <TouchableOpacity activeOpacity={0.5}>
                      <View style={tw`flex-row ml-3 mt-3 pb-3`}>
                        <View style={tw`h-5 w-5 bg-white`}>
                          <AntDesign name="qrcode" size={13} color="black" style={tw`mt-[3] ml-[3]`}/>
                        </View>
                        <Text style={tw`ml-2 mt-1 mr-[2]`}>PIN Code</Text>
                        <AntDesign name="arrowright" size={14} color="black" style={tw`ml-57 mt-1`} />
                      </View>
                   </TouchableOpacity>
                        
                    <View style={tw`h-[0.1] bg-orange-600 mx-3`}></View>   

                    <TouchableOpacity activeOpacity={0.5}>
                      <View style={tw`flex-row ml-3 mt-3`}>
                        <View style={tw`h-5 w-5 bg-pink-100`}>
                          <MaterialIcons name="logout" size={14} color="red" style={tw`mt-[3] ml-[3]`} />
                        </View>
                        <Text style={tw`ml-2 mt-1 text-red-500 `}>Logout</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
               </View>
           </View>
   </View>
  );
}