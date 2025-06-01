import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { StyleSheet, View } from "react-native";

const PlaceholderImage = require('@/assets/images/background-image.png')

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme='primary' label='Choose a photo' />
        <Button label='Use This Photo' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: "#25292e",
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#fff',
    },
    button:{
      fontSize: 20,
      color: '#fff',
      borderColor: '#fff',
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      marginTop: 20,
    },
    imageContainer: {
      width: 320,
      height:440,
      borderRadius:18,
    },
    footerContainer:{
      flex: 1 / 3,
      alignItems: 'center',
    },
  }
);