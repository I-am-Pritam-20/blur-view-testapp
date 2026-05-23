import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Platform,
  Switch,
  StatusBar, useColorScheme
} from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import { BlurView } from 'react-native-blur-vibe';
import type { BlurType } from 'react-native-blur-vibe';
import Slider from '@react-native-community/slider';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
        <AppContent />
    </SafeAreaProvider>
  );
}
 
// const BG_IMAGE = {
//   uri: './src/assets/jaadui.jpeg',
// };
 
const BLUR_TYPES: BlurType[] = [
  'light',
  'dark',
  'extraLight',
  'regular',
  'prominent',
  'systemUltraThinMaterial',
  'systemThinMaterial',
  'systemMaterial',
  'systemThickMaterial',
  'systemChromeMaterial',
];
 
const OVERLAY_COLORS = [
  { label: 'transparent (pure blur)', value: '#00000000' },
  { label: '#RGB shorthand', value: '#000' },
  { label: '#RRGGBB (no alpha)', value: '#000000' },
  { label: '25% black tint', value: '#00000040' },
  { label: '50% black tint', value: '#00000080' },
  { label: '75% black tint', value: '#000000C0' },
  { label: '100% black (blur hidden)', value: '#000000FF' },
  { label: '30% white tint', value: '#FFFFFF50' },
  { label: '50% red tint', value: '#FF000080' },
  { label: 'default (no prop)', value: undefined },
];
 
const AppContent = React.memo(() => {
  const insets = useSafeAreaInsets();
  const [showChildren, setShowChildren] = useState(true);
 
  return (
    <View style={[styles.outer]}>
      <Slider style={{height: 12, width: '86%', alignSelf: 'center'}}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor='#ffffff'
        maximumTrackTintColor='#66666675'
        thumbSize={16}
        thumbTintColor='#ffffff'
      />
      <ScrollView style={[styles.container,{paddingTop: insets.top, paddingBottom: insets.bottom}]} contentContainerStyle={[styles.content]}>
        {Array.from({length: 20}).map((_, index) => (
          <View key={index} style={styles.dummyview}>
            <Image key={index} source={require('./src/assets/jaadui.jpeg')} resizeMode='cover'/>
            <Text key={index+ 1} style={styles.dummyText}>This is View {index + 1}</Text>
          </View>
        ))}
      </ScrollView>

      <BlurView blurAmount={60} overlayColor='#c6efffad' style={styles.tabBar}/>
    </View>
    
  );
});
 
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

export default App;
 
const styles = StyleSheet.create({
  outer: { flex: 1, backgroundColor: '#1a0067',},
  container: { flex: 1, backgroundColor: 'transparent' , paddingHorizontal: 14},
  content: { gap: 14 },
  dummyview: {height : 140, borderWidth: 1, borderRadius: 12, borderColor: '#bdbdbd', backgroundColor: '#66666675', overflow: 'hidden', textAlign: 'center'},
  dummyText: {fontSize: 14, fontWeight: 'bold', color: '#ffffff', zIndex: 5, position: 'absolute', alignSelf: 'center'},
  tabBar: { position: 'absolute', zIndex: 100, marginHorizontal: 8, bottom: 8, height: 64, width: '95%', borderRadius: 100, borderWidth: 1, borderColor: '#ffffff'},
  header: { fontSize: 22, fontWeight: '700', color: '#ffffff', marginTop: 48, marginBottom: 4 },
  subheader: { fontSize: 14, color: '#888', marginBottom: 4 },
  platform: { fontSize: 12, color: '#555', marginBottom: 24 },
  section: { marginBottom: 32 },
  sectionTitle: {
    fontSize: 13, fontWeight: '600', color: '#00D4AA',
    marginBottom: 12, textTransform: 'uppercase', letterSpacing: 0.5,
  },
  note: { fontSize: 11, color: '#666', marginTop: 8, fontStyle: 'italic', lineHeight: 16 },
  row: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  smallBox: {
    width: 80, height: 80, borderRadius: 8, overflow: 'hidden',
    justifyContent: 'flex-end', alignItems: 'center', paddingBottom: 4,
  },
  tallBox: {
    height: 80, borderRadius: 8, overflow: 'hidden',
    marginBottom: 8, justifyContent: 'center', alignItems: 'center',
  },
  label: {
    color: '#fff', fontSize: 11, fontWeight: '600',
    textShadowColor: '#000', textShadowOffset: { width: 0, height: 1 }, textShadowRadius: 3,
  },
  overlayLabel: {
    color: '#fff', fontSize: 13, fontWeight: '600',
    textShadowColor: '#000', textShadowOffset: { width: 0, height: 1 }, textShadowRadius: 4,
  },
  overlayValue: {
    color: '#ddd', fontSize: 11,
    textShadowColor: '#000', textShadowOffset: { width: 0, height: 1 }, textShadowRadius: 3,
  },
  childBox: { alignItems: 'center', gap: 8 },
  childText: { color: '#fff', fontSize: 14, fontWeight: '600' },
});
