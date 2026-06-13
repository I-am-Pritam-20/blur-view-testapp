import React, { useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, useColorScheme} from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import {BlurView} from 'react-native-blur-vibe';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
        <AppContent />
    </SafeAreaProvider>
  );
}
 
const AppContent = React.memo(() => {
  const insets = useSafeAreaInsets();
 
  return (
    <View style={[styles.outer]}>
      <ScrollView style={[styles.container,{paddingTop: insets.top, paddingBottom: insets.bottom}]} contentContainerStyle={[styles.content]}>
        {Array.from({length: 20}).map((_, index) => (
          <View key={index} style={styles.dummyview}>
            <Image key={index} source={require('./src/assets/jaadui.jpeg')} resizeMode='cover'/>
            <Text key={index+ 1} style={styles.dummyText}>This is View {index + 1}</Text>
          </View>
        ))}
      </ScrollView>

      <BlurView blurAmount={100} noiseFactor={0} overlayColor='#0594cc54' style={[styles.tabBar, {borderRadius: 50, borderWidth: 2, borderColor: 'red'}]}/>
    </View>
    
  );
});

export default App;
 
const styles = StyleSheet.create({
  outer: { flex: 1, backgroundColor: '#000969',},
  container: { flex: 1, backgroundColor: 'transparent' , },
  content: { gap: 14 },
  dummyview: {height : 140, borderWidth: 1, borderRadius: 12, borderColor: '#bdbdbd', backgroundColor: '#66666675', overflow: 'hidden', textAlign: 'center'},
  dummyText: {fontSize: 14, fontWeight: 'bold', color: '#ffffff', zIndex: 5, position: 'absolute', alignSelf: 'center'},
  tabBar: { position: 'absolute', zIndex: 100, bottom: 8, height: 64, width: '100%'},
});
