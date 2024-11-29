import {TextInput, ScrollView, Image, StyleSheet, Platform, View, Text, ImageBackground,FlatList, TouchableOpacity, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import tw from 'twrnc';
import { EvilIcons, Feather, Ionicons } from '@expo/vector-icons';
import { router, useNavigation } from 'expo-router';
import React from 'react';
import tailwind from 'twrnc';
import { CardBanner } from '@/components/Card-Banner';


const productdata =[
  {key:'1', uri:'https://ik.imagekit.io/nbuckpbcy/611Oyzb2dHL._AC_UL320_.jpg?updatedAt=1728734596118'},
  {key:'2', uri:'https://ik.imagekit.io/nbuckpbcy/61QnbjeYqOL._AC_UL320_.jpg?updatedAt=1728734595981'},
  {key:'3', uri:'https://ik.imagekit.io/nbuckpbcy/81ZUYHzvchL._AC_UL320_.jpg?updatedAt=1728734595773'},
  {key:'4', uri:'https://ik.imagekit.io/nbuckpbcy/61ijZm+Oi7L._AC_UL320_.jpg?updatedAt=1728734563389'}
]

const otherproducts =[
  {key:'1', uri:'https://ik.imagekit.io/nbuckpbcy/91yuQ3m+cvL._AC_UL320_.jpg?updatedAt=1728736266845'},
  {key:'2', uri:'https://ik.imagekit.io/nbuckpbcy/8155XhwTpTL._AC_UL320_.jpg?updatedAt=1728736266571'},
  {key:'3', uri:'https://ik.imagekit.io/nbuckpbcy/61f25dMB-GL._AC_UL320_.jpg?updatedAt=1728736266230'},
  {key:'4', uri:'https://ik.imagekit.io/nbuckpbcy/71pz+vP+3rL._AC_UL320_.jpg?updatedAt=1728736266152'},
  {key:'5', uri:'https://ik.imagekit.io/nbuckpbcy/51VHYUrTNHL._AC_UL320_.jpg?updatedAt=1728736265983'},
  {key:'6', uri:'https://ik.imagekit.io/nbuckpbcy/71gmbq9ScCL._AC_UL320_.jpg?updatedAt=1728736266789'},
  {key:'7', uri:'https://ik.imagekit.io/nbuckpbcy/61f25dMB-GL._AC_UL320_.jpg?updatedAt=1728736266230'},
  {key:'8', uri:'https://ik.imagekit.io/nbuckpbcy/71pz+vP+3rL._AC_UL320_.jpg?updatedAt=1728736266152'},
  {key:'9', uri:'https://ik.imagekit.io/nbuckpbcy/51VHYUrTNHL._AC_UL320_.jpg?updatedAt=1728736265983'},
  {key:'10', uri:'https://ik.imagekit.io/nbuckpbcy/71gmbq9ScCL._AC_UL320_.jpg?updatedAt=1728736266789'}
]

const namesList=[
  {key:'1', name:'Explore'},
  {key:'2', name:'Women'},
  {key:'3', name:'Men'},
  {key:'4', name:'Electronics'}
]

export default function HomeScreen() {
  const width = Dimensions.get('window').width;
  const MockBanner=[
    {
      id:1,
      uri:'https://ik.imagekit.io/nbuckpbcy/R.png?updatedAt=1729602786650'
    },

    {
      id:2,
      uri:'https://ik.imagekit.io/nbuckpbcy/OIP.jpeg?updatedAt=1729602785741'
    }
  ]
  const navigation = useNavigation ();
  return (
    <View style={tw`bg-white h-full`}>
      <View style={tw`h-23 pt-15  flex-row flex justify-between`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
         <Ionicons name="chevron-back-outline" size={20} color="black" style={tw`mt-1`}/>
        </TouchableOpacity>
        <Image style={tw`h-10 w-30 ml-[-200]`} source={require('../../assets/images/bulayalogo.png')}/>
        <Feather name="bell" size={24} color="black" style={tw`mr-4 mt-2`}/>
      </View>
      
    
        <View style={tw`h-11 w-90 mx-4 mt-4`} >
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input}
                placeholder='text here..'
                placeholderTextColor={'black'}
                onPress={()=> router.push ('/searche-view')}
                />
              </View>
              <View style={tw`absolute mt-[57] ml-90`}>
                <TouchableOpacity activeOpacity={0.8}>
                    <View style={styles.icon}>
                    <EvilIcons name="search" size={19} color="white" style={tw`pl-2`}/>
                    </View>
                  </TouchableOpacity>
              </View>
        </View>
    

      <View  style={tw`flex-row ml-5`}>
        <FlatList
          horizontal
          data={namesList}
          renderItem={({item}) =>
          <View style={tw`mt-2`}>
            <Text style={tw`font-bold text-base pr-5`}>{item.name}</Text>
          </View>
        }
        />
      </View>

      <View style={tw`h-[150] pb-4 mt-3 shadow`}>
        <FlatList 
           numColumns={2}
           data={otherproducts}
           renderItem={({item}) =>
            <TouchableOpacity activeOpacity={0.8} onPress={() => router.push(`/product-details`)}>
            <View style={tw`ml-[10] my-5`}>
              <View style={tw`bg-[#eeeeee] h-45 w-45 rounded`}>
              <Image style={tw`h-45 bg-[#eeeeee] rounded`} source={{uri: item.uri}}/>
              </View>
              <Text style={tw`text-sm mt-2`}>Highlight items</Text>
              <Text style={tw`font-black text-xl`}>UGX24,000</Text>
              <Text style={tw`text-sm`}>Free shipping</Text>
            </View>
            </TouchableOpacity>
          }
          ListHeaderComponent={
            <View>
              <Carousel
                 loop
                 width={width}
                 height={width /2}
                 autoPlay={true}
                 data={MockBanner}
                 scrollAnimationDuration={1000}
                 renderItem={({ item }) => (
                     <CardBanner thumbimage={item}/>
                )}
            />
        
              <View style={tw`flex-row mx-7 mt-2`}>
                <Text style={tw`text-gray-500 text-xs pr-5`}>Coins</Text>
                <Text style={tw`text-gray-500 text-xs  pr-5`}>Prize Land</Text>
                <Text style={tw`text-gray-500 text-xs  pr-5`}>Super Deals</Text>
                <Text style={tw`text-gray-500 text-xs  pr-5`}>Clearance</Text>
                <Text style={tw`text-gray-500 text-xs `}>Categories</Text>
              </View>

              <View style={tw` ml-4 mt-5`}>
                <Text style={tw`font-black text-xl`}>SuperDeals</Text>
                <Text style={tw`pt-1`}>Limited time 50% off</Text>
              </View>

              <View style={tw`h-58 mt-5 shadow bg-gray-100 pt-2 pb-2`}>
              <FlatList 
                    horizontal
                    data={productdata}
                    renderItem={({item}) =>
                      <TouchableOpacity activeOpacity={0.5}>
                        <View style={tw`h-50 mr-5 ml-5`}>
                          <View style={tw`bg-[#eeeeee] h-40 w-35 rounded`}>
                          <Image style={tw`h-40 bg-[#eeeeee] rounded`} source={{uri: item.uri}}/>
                          </View>
                          <Text style={tw`font-black text-xl mt-2`}>UGX24,000</Text>
                          <Text style={tw`bg-[#E30610] text-white w-12 text-xs p-1`}>54% off</Text>
                        </View>
                      </TouchableOpacity>
                    } 
                  />
              
              </View>

              <View style={tw`mt-5`}>
                <Text style={tw`text-center`}>More to love</Text>
              </View>
            </View>
          }
        />
         
      </View>     
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
    
  input:{
    flex:1,
    borderColor:'gray',
    height:40,
    borderWidth:1,
    borderRadius:20,
    paddingLeft:10,
  
    
  },

  inputContainer:{
    flexDirection:'row',
    alignItems:'center',
    position:'relative'
    
  },

  icon:{
  margin:-54,
  backgroundColor:'black',
  padding:9,
  borderRadius:20,
  width:50,
  }
});
