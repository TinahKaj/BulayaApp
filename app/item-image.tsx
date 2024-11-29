import { ImageBanner } from '@/components/Image-Banner';
import { AntDesign } from '@expo/vector-icons';
import { router, useNavigation } from 'expo-router';
import * as React from 'react';
import { Text, View, StyleSheet, SafeAreaView, Image, FlatList, Dimensions, ImageBackground, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import tw  from 'twrnc';



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
 export default function Item() {
 const width = Dimensions.get('window').width;
 const navigation = useNavigation ();

  return (
   <View style={tw`h-full bg-black`}>
       
          <View style={tw`bg-white mt-12 ml-89 h-7 w-7 rounded-full`}>
             <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
                <AntDesign name="close" size={22} color="black" style={tw`mt-[3] ml-[3]`}/>
             </TouchableOpacity>
            </View>
      
           <Carousel
                 style={tw`mt-55`}
                 loop
                 width={width}
                 height={width}
                 autoPlay={false}
                 data={productImage}
                 scrollAnimationDuration={1000}
                 renderItem={({ item }) => (
                     <ImageBanner productimage={item}/>
                )}
            />

            <View style={tw`mb-70`}>
               <Text style={tw`text-white text-center font-bold`}>Swipe</Text>
            </View>
   </View>
  );
};



const styles = StyleSheet.create({
  container: {}
});
