import React , { useState } from 'react';
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

  const [flashOn, setFlashOn] = useState(false);
  const [flashlightActive, setFlashlightActive] = useState(false);
  const [strobeActive, setStrobeActive] = useState(false);
  const [sosActive, setSosActive] = useState(false);

  const labelButton1 = "Turn Flashlight " + (flashlightActive?"Off":"On");
  const labelButton2 = "Strobe (" + (strobeActive ? "ON" : "Off" ) + ")";
  const labelButton3 = "SOS";

  global.cameraPermAllowed = false;

  const getCurrentTime = () => {
    let rightNow = new Date();
    return rightNow.getSeconds();
  }

  const callFlashApi = (isOn = null, interval = 0) => {

    const currentFlashOn = flashOn;
    const finalOn = isOn === null ? !currentFlashOn : isOn;
    console.log("= Flash " + (finalOn ? "On" : "Off"));
    setFlashOn(finalOn);
    Torch.switchState(finalOn);

    if(interval && setStrobeActive)
    setTimeout(() => callFlashApi(!finalOn, interval), interval);
  }

  const getCameraAllowed = async () => {

    if(global.cameraPermAllowed) return true;

    try {
      let cameraAllowed = await Torch.requestCameraPermission(
        'Camera Permissions',
        'This app requires camera permissions to use the Flashlight feature'
      );
      global.cameraPermAllowed = cameraAllowed;
      return cameraAllowed;
    } catch (e) {
      handleCameraPermError();
    }//end try/catch
  }

  const handleCameraPermError = () => {

    ToastAndroid.show(
      'There was an issue accessing your FlashLight',
      ToastAndroid.SHORT
    );
    setFlashlightActive(false);
    setStrobeActive(false);
    setSosActive(false);
    callFlashApi(false);
  }

  const operateFlashlight = () => { //function to turn on and off simple flashlight
    const currentActive = flashlightActive;
    const allowed = getCameraAllowed();

    if(allowed){
      setFlashlightActive(!currentActive);
      callFlashApi(!currentActive);
      setStrobeActive(false);
    }else{
      handleCameraPermError();
    }
     
  }

  const operateStrobe = () => { //function to turn flash on/off on interval
    console.log("click operateStrobe:", strobeActive);
    const allowed = getCameraAllowed();

    if(!allowed){ handleCameraPermError(); return; }

    if(strobeActive){ //case strobe was on, turn off
      setStrobeActive(false);
      console.log("Strobe turned OFF");
    } else { //case strobe was off, turn on
      console.log("Strobe turne ON");
      setFlashlightActive(false);
      setSosActive(false);
      setStrobeActive(true);

      let interval = 1500;
      callFlashApi(null, interval);
      
    }

  }

  const operateSOS = () => { // call sequenced flash
	
	console.log("= operateSOS ON");
	
	const ticks = [500,500,500,2000,2000,500,500];//sequence for SOS in duration
	
	//logic to loop through ticks
	
    
	
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
