
import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Vibration, StatusBar } from 'react-native';
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import { Label, Button, LabelButton } from './styles';
import { AntDesign } from '@expo/vector-icons';

export default function Detalhes ( { route, navigation } ) {

    return (
        <View style={styles.container}>
        <StatusBar backgroundColor="#131418" />
           {route.params ?
                <React.Fragment>
                    <Text style={styles.text}>Codigo de Barras Detectado!</Text> 
                    <Text>{route.params.code}</Text>  
                </React.Fragment> :
                
                <Text>Detalhes</Text> 
            }
             <Button 
                title="Voltar" 
                accessibilityLabel="Voltar" 
                onPress={() => navigation.goBack()}            
                underlayColor="#2c2c2c"
                >             
                    <LabelButton>Voltar</LabelButton>
            </Button>
        </View>
    )

}

const styles = StyleSheet.create( {     
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    text: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
    },
    button: {
        flex: 1,
    }

} );