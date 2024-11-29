import { ImageBackground, StyleSheet, TouchableOpacity, useColorScheme, View } from 'react-native';
import tw from 'twrnc';

export function ImageBanner({productimage}:any) {

  return (
    <View style={tw`h-40 bg-white`}>
      <ImageBackground imageStyle={tw`h-60 relative`} source={{uri:productimage.uri}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
});
