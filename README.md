# AppLabs Flashlight App

AppLabs Flashlight App is a mobile app that showcases the use of a mobile device's flash functionality, accessing the native flashlight API to create a flash, sequence of flashes, or an SOS flash for emergencies.

The app is free to use and has no special requirements. The only permissions necessary are access to the devices flashlight module, in some devices this may be the same permission required for the camera due to the device having one module that shares both hardware devices.

The app is built using React Native and react-native-torch package. It is intended only for educational purposes.

## Installation

Use the package manager NPM to install the required dependencies:

```bash
npm install
```
In order to build Android version (apk) you must configure the Gradle properties and assign the proper SDK API level and MIN SDK level you wish to build for.

To build the project and test on a virtual (emulated) device, open a compatible device from Android's AVD Manager and run the following command:

```bash
react-native run-android
```


## Contributing


## License
[MIT](https://choosealicense.com/licenses/mit/)