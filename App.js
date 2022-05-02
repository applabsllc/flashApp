import React , { useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';


const App = ()  => {

  const [flashActive, setFlashActive] = useState(false);

  const labelButton1 = "Turn Flashlight " + (flashActive?"Off":"On");
  const labelButton2 = "Strobe";
  const labelButton3 = "SOS";

  const operateFlashlight = () => { //function to turn on an off simple flashlight
    const currentActive = flashActive;
    console.log("currentActive:", currentActive);
    setFlashActive(!currentActive);
  }

  const operateStrobe = () => { //function to turn flash on/off on interval
    console.log("click operateStrobe");

  }

  const operateSOS = () => { // call sequenced operateStrobe()
    console.log("click operateSOS");
    
  }

  return (
    <View style={styles.container}>
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
    </View>
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
