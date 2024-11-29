import { ImageBackground, StyleSheet, TouchableOpacity, useColorScheme, View } from 'react-native';
import tw from 'twrnc';

export function CardBanner({thumbimage}:any) {

  return (
    <View style={tw`h-50 bg-[#eeeeee]`}>
      <ImageBackground imageStyle={tw`h-50`} source={{uri:thumbimage.uri}}/>
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
