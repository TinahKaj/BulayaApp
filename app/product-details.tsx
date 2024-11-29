import { ImageBackground, Text, View, Image, FlatList, TouchableOpacity, Pressable, Dimensions } from 'react-native'
import React, { Component } from 'react'
import tw from 'twrnc'
import { AntDesign, EvilIcons, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { ImageBanner } from '@/components/Image-Banner';
import Item from './item-image';
import Carousel from 'react-native-reanimated-carousel';
import { router, useNavigation, } from 'expo-router';



const productdata =[
    {key:'1', uri:'https://ik.imagekit.io/nbuckpbcy/611Oyzb2dHL._AC_UL320_.jpg?updatedAt=1728734596118'},
    {key:'2', uri:'https://ik.imagekit.io/nbuckpbcy/61QnbjeYqOL._AC_UL320_.jpg?updatedAt=1728734595981'},
    {key:'3', uri:'https://ik.imagekit.io/nbuckpbcy/81ZUYHzvchL._AC_UL320_.jpg?updatedAt=1728734595773'},
    {key:'4', uri:'https://ik.imagekit.io/nbuckpbcy/61ijZm+Oi7L._AC_UL320_.jpg?updatedAt=1728734563389'}
  ]

const productImage =[
  {id:1,
   uri:'https://ik.imagekit.io/nbuckpbcy/R.jpeg?updatedAt=1729852342924'
  },

  {id:2,
   uri:'https://ik.imagekit.io/nbuckpbcy/T1270-Front.jpg?updatedAt=1729852342076'
  },

  {id:3,
   uri:'https://ik.imagekit.io/nbuckpbcy/Winmate_M101B_01.jpg?updatedAt=1729852341762'
  },

  {id:4,
   uri:'https://ik.imagekit.io/nbuckpbcy/OIP%20(1).jpeg?updatedAt=1729852341370'
  }
]
  

export default function ProductDetails() {
  const width = Dimensions.get('window').width;
  const navigation = useNavigation ();
    return (
      <View style={tw`h-full bg-white`}>
         <View style={tw`h-60`}>
          <TouchableOpacity activeOpacity={0.8}  onPress={() => router.push(`/item-image`)} >
           <Carousel
                 loop
                 width={width}
                 height={width}
                 autoPlay={true}
                 data={productImage}
                 scrollAnimationDuration={1000}
                 renderItem={({ item }) => (
                     <ImageBanner productimage={item}/>
                )}
            />
          </TouchableOpacity>
         
            <View style={tw`flex-row absolute w-full`}>
               <TouchableOpacity style={tw`mt-7 mr-2 mr-74`} >
                    
                  </TouchableOpacity>
                <View style={tw`flex-row ml-2 mt-5`}>
                    <TouchableOpacity activeOpacity={0.5}>
                      <View style={tw`bg-white h-8 w-8 rounded-full mr-2 opacity-80`}>
                        <EvilIcons name="search" size={30} color="black" style={tw`mt-1`} />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.5}>
                      <View style={tw`bg-white h-8 w-8 rounded-full opacity-80`}>
                        <EvilIcons name="share-google" size={31} color="black" style={tw`mt-1`}/>      
                      </View>
                    </TouchableOpacity>
                </View>
            </View>
              <View style={tw`flex-row absolute`}>
                <View style={tw`flex-row bg-white w-28 rounded-2xl p-1 ml-3 mt-50 relative  opacity-80 `}>
                <TouchableOpacity activeOpacity={0.5}>
                    <Text style={tw`ml-2`}>item 4/7</Text>
                </TouchableOpacity>
                <View style={tw`border-l-[0.2] ml-2`}></View>
                <TouchableOpacity activeOpacity={0.5}>
                    <Text style={tw`ml-2 text-gray-500`}>Color</Text>
                </TouchableOpacity>
                </View>               
              </View>
              <View style={tw`flex-row ml-78 bg-white w-16 absolute rounded-2xl p-1 mt-50 opacity-80`}>
               <TouchableOpacity activeOpacity={0.5}>
                  <EvilIcons name="heart" size={20} color="black" />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5}>
                  <Text style={tw`ml-1`}>5.1k+</Text>
                </TouchableOpacity>
              </View>
         </View>

        <ScrollView style={tw`bg-white`}>
        <View style={tw`h-15 mt-5 ml-2 shadow`}>
                    <FlatList 
                          horizontal
                          data={productdata}
                          renderItem={({item}) =>
                            <TouchableOpacity activeOpacity={0.5}>
                              <View style={tw`h-10 ml-2`}>
                                <View style={tw`bg-[#eeeeee] h-10 w-11 `}>
                                <Image style={tw`h-12 bg-[#eeeeee]`} source={{uri: item.uri}}/>
                                </View>
                              </View>
                            </TouchableOpacity>
                          } 
                        />
                    
                  </View>
                  <View style={tw`flex-row ml-3`}>
                    <Text style={tw`text-2xl font-black`}>$20.00</Text>
                    <Text style={tw`mt-2 ml-2 text-red-600`}>53% off</Text>
                  </View> 
                  <View style={tw`ml-3`}>
                    <Text style={tw`text-gray-400`}>Prices shown below tax Extra 5% off with coins</Text>
                  </View>

                  <View style={tw`mt-2 ml-3`}>
                      <Text style={tw`text-lg font-semibold`}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, impedit nul
                      </Text>
                  </View>

                  <View style={tw`flex-row ml-3 mt-1 pb-4`}>
                      <AntDesign name="staro" size={13} color="black"/>
                      <Text style={tw`ml-2`}>4.5</Text>
                      <Text style={tw`ml-2`}>5,000+ sold</Text>
                  </View>
               
               <View style={tw`h-2 bg-gray-200`}></View>
               
               <View style={tw`ml-3 mt-3`}>
                    <Text style={tw`font-bold text-lg`}>BulayaExpress commitment</Text>
                  </View>

                  <View style={tw`ml-3 mt-4`}>
                      <View style={tw`flex-row`}>
                        <MaterialIcons name="local-shipping" size={20} color="black" />
                          <Text style={tw`ml-2 font-semibold text-lg`}>Shipping </Text>
                          <Text style={tw`font-bold text-lg`}>$5.00</Text>
                      </View>
                    <View style={tw`flex-row pb-3`}>
                          <Text style={tw`ml-7`}>Delivery</Text>
                          <Text>22-29 days</Text>
                    </View>
                  </View>
                     
                     <View style={tw`h-[0.2] bg-gray-200 ml-3 mr-3`}/>

                  <View style={tw`ml-3 pt-3 pb-3`}>
                      <View style={tw`flex-row`}>
                          <MaterialIcons name="security" size={17} color="black" style={tw`mt-1`} />
                          <Text style={tw`font-bold text-lg ml-2`}>Security & Privacy</Text>
                      </View>
                      <View style={tw`ml-7 mt-2`}>
                          <Text style={tw`text-gray-500`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore nobis omnis amet corporis itaque quo temporibus saepe dolor</Text>
                      </View>
                  </View>
                  <View style={tw`h-[1.2] bg-gray-200`}></View>
            <View>
              <View style={tw`flex-row mt-4`}>
                  <Text style={tw`font-bold text-lg ml-3`}>Review gallery</Text>
                  <Text style={tw`text-base ml-45 mt-1 `}>See All </Text>
                  <Text></Text>
             </View>
             <View style={tw`h-32 mt-5 ml-2 shadow`}>
                <FlatList 
                      horizontal
                      data={productdata}
                      renderItem={({item}) =>
                        <TouchableOpacity activeOpacity={0.5}>
                          <View style={tw`h-30 ml-2`}>
                            <View style={tw`bg-[#eeeeee] h-30 w-26 rounded-lg `}>
                            <Image style={tw`h-30 bg-[#eeeeee] rounded-lg`} source={{uri: item.uri}}/>
                            </View>
                          </View>
                        </TouchableOpacity>
                      } 
                    />
                
                </View>
            </View>
        </ScrollView>
        <View style={tw`pt-2 h-20 flex-row ml-7`}>
          <TouchableOpacity activeOpacity={0.5}>
            <View style={tw`mt-2`}>
            <MaterialIcons name="storefront" size={24} color="black" />
            </View>
          </TouchableOpacity>
        
          <TouchableOpacity activeOpacity={0.5}>
            <View style={tw`ml-6 mt-2`}>
            <Ionicons name="chatbox-ellipses-outline" size={24} color="black" />
            </View>
          </TouchableOpacity>
        
          <TouchableOpacity activeOpacity={0.5}>
            <View style={tw`border-[0.3] h-10 w-30 rounded-full ml-6`}>
                <Text style={tw`text-center mt-2 font-bold text-base`}>Add to Chart</Text>
            </View>
          </TouchableOpacity>
          
            <TouchableOpacity activeOpacity={0.5}>
              <View style={tw`bg-orange-500 h-10 w-30 rounded-full ml-2`}>
                  <Text style={tw`text-center mt-2 font-bold text-lg text-white`}>Buy now</Text>
              </View>
            </TouchableOpacity>
 
        </View>
      </View>
      
    );
  }
