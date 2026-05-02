import { StatusBar, StyleSheet, useColorScheme, View, Image } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
// import { BlurView } from 'react-native-blur-vibe';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <View style={{backgroundColor: '#000000', flex: 1}}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppContent />
      </View>
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <Image source={require('./src/assets/jaadui.jpeg')} style={styles.bgImage} resizeMode='cover'/>
      {/* <BlurView blurAmount={10} style={styles.dummyView}></BlurView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bgImage: {
    flex: 1,
    zIndex: 10,
  },
  dummyView: {
    position: 'absolute',
    zIndex: 15,
    height: 120,
    width: 250,
    borderWidth: 1,
    borderColor: '#444444'
  }
});

export default App;
