import { AntDesign, EvilIcons, Feather, Ionicons } from '@expo/vector-icons';
import { router, useNavigation } from 'expo-router';
import { Input } from 'postcss';
import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TextInput, Image, Dimensions, FlatList, ImageBackground, TouchableOpacity, Modal } from 'react-native';
import tailwind from 'twrnc';
import tw  from 'twrnc';

const SearchView = () => {
    const width = Dimensions.get('window').width;
    const [modalVisible, setModalVisible] = useState(false);

    const MockGaleria = [
        {
          id: 1,
          image: "https://ik.imagekit.io/2ad45z4n7/Bulaya/gaments.jpg?updatedAt=1728726366672",
          title:"Habillement & chaussures Habillement & chaussures"
        },
        {
          id: 2,
          image: "https://ik.imagekit.io/2ad45z4n7/Bulaya/computing.jpg?updatedAt=1728726367366",
          title:"Gamming"
        },
        {
           id: 3,
            image: "https://ik.imagekit.io/2ad45z4n7/Bulaya/Fuji_BTF_Quad_Cards_2x_Desktops._SY232_CB558654384_.jpg?updatedAt=1728729267176",
          title:"Computing"
          },
          {
            id: 4,
            image: "https://ik.imagekit.io/2ad45z4n7/Bulaya/Shoes_2X._SY232_CB563194051_.jpg?updatedAt=1728729267205",
          title:"Womens Clothes"
          },
          {
              id: 5,
              image: "https://ik.imagekit.io/2ad45z4n7/Bulaya/Smartphone_2x._SY232_CB566164844_.jpg?updatedAt=1728729266985",
          title:"Phones & electronique"
            },
            {
              id: 6,
              image: "https://ik.imagekit.io/2ad45z4n7/Bulaya/Beauty_2X._SY232_CB563194051_.jpg?updatedAt=1728729267207",
          title:"Beauticienne"
            }
      ]
    const navigation = useNavigation ();
  return (
    <View style={tailwind`bg-white`}>
        <Modal visible={modalVisible} transparent={true} animationType="slide">
            <View style={tailwind`h-full pt-33 rounded-lg`}>
                <View style={tailwind`h-180 bg-white `}>
                    
                    <View style={tw`flex-row`}>
                        <View style={tw`mx-36`}>
                            <Text style={tw`font-bold text-lg`}>All Filters</Text>
                        </View>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <View style={tailwind`h-5 w-5`}>
                        <AntDesign name="close" size={22} color="black" />
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View style={tw`mx-5 pt-4`}>
                        <View>
                            <Text style={tw`font-bold text-lg`}>Delivery options & services</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.5} style={tw`h-10 w-33 rounded-lg bg-[#eeeeee] mt-1`}>
                            <Text style={tw`text-center mt-3`}>Free shipping</Text>
                        </TouchableOpacity>
                        <View style={tw`pt-7`}>
                            <Text style={tw`font-bold text-lg`}>Price</Text>
                        </View>

                        <View style={tw`flex-row`}>
                            <View style={tw`h-10 w-42 rounded-lg bg-[#eeeeee] mt-1 flex-row `}>
                                <Text style={tw`text-center mt-2 ml-4 text-lg`}>USD</Text>
                                <TextInput
                                   style={tw`ml-2`}
                                   placeholder='Min..'
                                   placeholderTextColor={'gray'}
                                />
                            </View>
                            <Text style={tw`mt-4 mx-1`}>-</Text>
                            <View style={tw`h-10 w-42 rounded-lg bg-[#eeeeee] mt-1 flex-row `}>
                                <Text style={tw`text-center mt-2 ml-4 text-lg`}>USD</Text>
                                <TextInput
                                   style={tw`ml-2`}
                                   placeholder='Max..'
                                   placeholderTextColor={'gray'}
                                />
                            </View>
                        </View>
                        
                        <View style={tw`flex-row pt-1`}>
                            <TouchableOpacity activeOpacity={0.5} style={tw`h-12 w-28 mr-[5] rounded-lg bg-[#eeeeee] mt-1  `}>
                                <Text style={tw`text-center mt-3`}>177261-345616</Text>
                                <Text style={tw`text-center text-[#515151]`}>Chosen by 41%</Text>
                            </TouchableOpacity>
                     
                            <TouchableOpacity activeOpacity={0.5} style={tw`h-12 w-28 mr-[5] rounded-lg bg-[#eeeeee] mt-1  `}>
                                <Text style={tw`text-center mt-3`}>377261-445616</Text>
                                <Text style={tw`text-center text-[#515151]`}>Chosen by 51%</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.5} style={tw`h-12 w-28 mr-[5] rounded-lg bg-[#eeeeee] mt-1  `}>
                                <Text style={tw`text-center mt-3`}>577261-745616</Text>
                                <Text style={tw`text-center text-[#515151]`}>Chosen by 31%</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                
                    <View style={tw`h-2 bg-[#eeeeee] mt-4`}></View>

                    <View style={tw`mx-5 pt-4`}>
                      <View>
                         <Text style={tw`font-black pb-1 text-lg`}>View as</Text>
                      </View>
                      <View style={tw`flex-row`}>
                            <TouchableOpacity activeOpacity={0.5} style={tw`flex-row h-10 w-20 rounded-lg bg-[#eeeeee] mt-1 mr-2 `}>
                                <Feather name="menu" size={30} color="black" style={tw`ml-2 mt-[5]`}/>
                                <Text style={tw`ml-1 mt-2 text-lg  text-[4]`}>List</Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity activeOpacity={0.5} style={tw`flex-row h-10 w-24 rounded-lg bg-pink-100 mt-1 border-[#E50914] border-2`}>
                                <Ionicons name="grid-outline" size={27} color="black"  style={tw`ml-2 mt-[4]`}/>
                                <Text style={tw`mt-2 ml-1 text-lg text-[#E50914] text-[4]`}>Gallery</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={tw`mx-5 pt-4 mt-55`}>
                        <View style={tw`mt-4 mx-1`}></View>
                        <View style={tw`flex-row`}>
                                <TouchableOpacity activeOpacity={0.5} style={tw`h-11 w-25 rounded-full bg-[#eeeeee] mt-1 mr-2 `}>
                                    <Text style={tw`text-center mt-[10] text-lg font-bold`}>Reset</Text>
                                </TouchableOpacity>
                              
                                <TouchableOpacity activeOpacity={0.5} style={tw`h-11 w-60 rounded-full bg-[#E50914] mt-1 `}>
                                    <Text style={tw`text-center mt-[10] text-lg text-white font-bold`}>Show 1000+ results</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                </View>
            </View>
        </Modal>
        <View style={tw`bg-white h-full mt-7`}>
            <View style={tw`h-15 pt-7 flex-row flex justify-between`}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back-outline" size={20} color="black" style={tw`mt-1`}/>
           </TouchableOpacity>
                <Image style={tw`h-10 w-30 ml-[-200]`} source={require('../assets/images/bulayalogo.png')}/>
                <Feather name="bell" size={24} color="black" style={tw`mr-4 mt-2`}/>
            </View>

            <View style={tw`h-11 w-90 mx-4 mt-4`} >
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.input}
                placeholder='text here..'
                placeholderTextColor={'black'}
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

            <View style={tw`flex-row justify-center items-center justify-between ml-4 mr-4 mt-2 mb-2`}>
                <View style={tw`flex-row `}>
                    <View style={tw`h-8 border-b-2 mr-4`}>
                        <Text style={tw`font-semibold text-4`}>Playstation</Text>
                    </View>
                    <View style={tw`h-8 border-b-0 mr-4`}>
                        <Text style={tw`text-gray-400 text-4 font-semibold`}>Manette</Text>
                    </View>
                    <View style={tw`h-8 border-b-0`}>
                        <Text style={tw`text-gray-400 text-4 font-semibold`}>Chargeurs</Text>
                    </View>
                </View>

                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <View style={tw`h-15 w-15 justify-center items-center rounded-xl bg-[#000000]`}>
                        <Ionicons name="filter-sharp" size={24} color="white" />
                    </View>
                </TouchableOpacity>

            </View>

            <View style={tw`h-full`}>
                <View style={tw``}>
                    <View style={tw`h-full`}>
                        <FlatList
                            numColumns={2}
                            data={MockGaleria}
                            showsVerticalScrollIndicator={false}
                            style={tw`pt-4 self-center`}
                            renderItem={({item}) => 
                            <View>
                                <ImageBackground 
                                source={{uri: item.image}} 
                                style={tw`size-${width/9} m-2`}
                                imageStyle={tw`rounded-xl`} /> 
                                <Text style={tw`ml-2 w-40 text-black text-sm`}>{item.title}</Text>
                                <View style={tw`flex-row w-40`}>
                                    <Text style={tw`ml-2 text-[#FF9522] text-sm text-5 font-bold`}>$0.99</Text>
                                    <Text style={tw`ml-2 text-black text-sm line-through `}>$ 2.00</Text>
                                </View>
                            </View>}/>
                    </View>
                </View>
            </View>
        </View>
    </View>
  );
};

export default SearchView;

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:'row',
        alignItems:'center',
        position:'relative'
        
      },
      input:{
        flex:1,
        borderColor:'gray',
        height:40,
        borderWidth:1,
        borderRadius:20,
        paddingLeft:10,
      
        
      },
  icon:{
    margin:-54,
    backgroundColor:'black',
    padding:9,
    borderRadius:20,
    width:50,
    }
});
