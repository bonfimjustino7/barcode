import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Vibration } from 'react-native';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { useIsFocused } from '@react-navigation/native';
import { PushButton, Text } from './styles';
import { Ionicons } from '@expo/vector-icons'; 

export default function App( { route, navigation } ) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    
    navigation.navigate('Details', { code: data })
    
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={styles.view}
    >
      {isFocused && 
         <Camera
           onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
           style={{
             alignItems: 'center',
             justifyContent: 'center',
             ...StyleSheet.absoluteFill,
           }}
         />
      }  
      <Ionicons
        name="ios-qr-scanner" 
        size={300} 
        color="white"          
              
      />
      {scanned && 
        <PushButton
          onPress={() => setScanned(false)}
        >
          <Text>Toque para escanear novamente</Text>
        </PushButton>
      }
    </View>
  );

}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

})