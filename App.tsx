import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, useColorScheme, StatusBar, ImageBackground} from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'react-native-blur-vibe';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'light-content'} translucent backgroundColor={'#00000001'}/>
      <AppContent />
    </SafeAreaProvider>
  );
}
 
const AppContent = React.memo(() => {
  const insets = useSafeAreaInsets();
  const {width , height} = Dimensions.get('window');
 
  return (
    <View style={[styles.outer]}>
      <ScrollView overScrollMode='never' alwaysBounceVertical={false} alwaysBounceHorizontal={false} style={[styles.container]} contentContainerStyle={[styles.content,{paddingTop: insets.top, paddingBottom: insets.bottom + 80}]}>
        {Array.from({length: 100}).map((_, index) => (
          <View key={index} style={styles.dummyview}>
            <Image key={index} source={require('./src/assets/jaadui.jpeg')} resizeMode='cover'/>
            <Text key={index+ 1} style={styles.dummyText}>This is View {index + 1}</Text>
            <BlurView
              blurAmount={2}
              overlayColor="#ffffff12"
              style={StyleSheet.absoluteFill}
              autoUpdate={false}
            />
          </View>
        ))}
      </ScrollView>
      
      {/* <Image source={require('./src/assets/jaadui.jpeg')} resizeMode='cover' style={{height: '100%'}}/> */}

      <View style={[styles.blurContainer, {width : width - 16 , bottom: insets.bottom + 8,}]}>
        <BlurView blurAmount={1} noiseFactor={0} overlayColor='#0594cc54' autoUpdate style={[StyleSheet.absoluteFill]} />
        {/* <BlurView blurAmount={100} progressiveBlurDirection="bottomToTop"
          progressiveStartIntensity={1}
          progressiveEndIntensity={0}
          style={StyleSheet.absoluteFill}
          noiseFactor={0} autoUpdate={true}
        /> */}
      </View>
      
    </View>
    
  );
});

export default App;
 
const styles = StyleSheet.create({
  outer: { flex: 1, backgroundColor: '#00052f', borderWidth: 2, borderColor: 'red'},
  container: { flex: 1, backgroundColor: 'transparent' , },
  content: { gap: 14 , paddingHorizontal: 14},
  dummyview: {height : 140, borderWidth: 1, borderRadius: 12, borderColor: '#bdbdbd', backgroundColor: '#66666675', overflow: 'hidden', textAlign: 'center'},
  dummyText: {fontSize: 14, fontWeight: 'bold', color: '#ffffff', zIndex: 5, position: 'absolute', alignSelf: 'center'},
  blurContainer: {position: 'absolute', zIndex: 100, height: 64, marginInline: 8, borderRadius: 80, overflow: 'hidden', borderWidth: 1, borderColor: '#0594cc00', }
});
