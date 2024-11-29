import { router } from 'expo-router';
import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, FlatList, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import tw  from 'twrnc';

const Galeria = () => {
    const width = Dimensions.get('window').width;

    const MockGaleria = [
        {
          id: 1,
          image: "https://ik.imagekit.io/2ad45z4n7/Bulaya/gaments.jpg?updatedAt=1728726366672",
          title:"Habillement & chaussures"
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


  return (
    <SafeAreaView>
        <View style={tw`bg-white h-full`}>
            <View style={tw`mt-10 justify-center items-center`}>
                <Image resizeMode='stretch' style={tw`h-20 w-80`} source={require('../assets/images/bulayalogo.png')}/>
                <Text style={tw`text-center mt-2`}>Votre business autrement avec l'agence exxpress lubumbashi ,commander et changer vos vie avec le e-commerce autrement</Text>
            </View>

            <View style={tw`mb-0 pt-4 pl-4 pr-4 bg-[#FF9522] mt-5 rounded-t-3xl`}>
                <Text style={tw`text-center text-white text-xl font-bold mt-2`}>What are you looking for ?</Text>
            </View>

            <View style={tw`bg-[#FF9522] h-full`}>
                <FlatList
                    numColumns={2}
                    data={MockGaleria}
                    showsVerticalScrollIndicator={false}
                    style={tw`pt-4 self-center mb-65`}
                    renderItem={({item}) => 
                    <TouchableOpacity onPress={()=> router.push(`/(tabs)`)}>
                        <ImageBackground 
                        source={{uri: item.image}} 
                        style={tw`size-${width/10} m-2`}
                        imageStyle={tw`rounded-2xl`} /> 
                        <Text style={tw`w-40 ml-2 text-white text-lg`}>{item.title}</Text>
                    </TouchableOpacity>}/>
            </View>
        </View>
    </SafeAreaView>
  );
};

export default Galeria;

const styles = StyleSheet.create({
  container: {}
});
