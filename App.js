import React , { useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Platform,
  StyleSheet,
  Text,
  Button,
  View,
  ToastAndroid,
} from 'react-native';
import Torch from 'react-native-torch';

const App = ()  => {

  const [flashActive, setFlashActive] = useState(false);

  const labelButton1 = "Turn Flashlight " + (flashActive?"Off":"On");
  const labelButton2 = "Strobe";
  const labelButton3 = "SOS";

  const operateFlashlight = async () => { //function to turn on and off simple flashlight
    const currentActive = flashActive;
    console.log("currentActive:", currentActive);
        
      if (Platform.OS === 'ios') {// IOS

          Torch.switchState(!currentActive);
          setFlashActive(!currentActive);

      } else { //Android

          try {

              const cameraAllowed = await Torch.requestCameraPermission(
                'Camera Permissions',
                'This app requires camera permissions to use the Flashlight feature' // dialog body
              );

              Torch.switchState(!currentActive);
              setFlashActive(!currentActive);

           } catch (e) {

              ToastAndroid.show(
                'There was an issue accessing your FlashLight',
                ToastAndroid.SHORT
              );

          }//end try/catch
      }//end else
  }

  const operateStrobe = () => { //function to turn flash on/off on interval
    console.log("click operateStrobe");

  }

  const operateSOS = () => { // call sequenced operateStrobe()
    console.log("click operateSOS");
    
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer} />
      <View style={styles.bottomContainer} >
        <View style={styles.buttonWrapper}>
          <Button
            onPress={operateFlashlight}
            title={labelButton1}
          />
        </View>
        <View style={styles.buttonWrapper}>
        <Button
          onPress={operateStrobe}
          title={labelButton2}
        />
        </View>
        <View style={styles.buttonWrapper}>
        <Button
          onPress={operateSOS}
          title={labelButton3}
        />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  topContainer: {
    flex: 1,
    backgroundColor: "#9ec5f7",
  },
  bottomContainer: {
    flex: 1.7,
    backgroundColor: "#9ec5f7",
  },
  buttonWrapper: {
    margin: 10,
  }
});

export default App;
