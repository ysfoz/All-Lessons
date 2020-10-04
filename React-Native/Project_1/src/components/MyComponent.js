import React from "react";
import{View,Text,StyleSheet} from 'react-native';

const MyComponent =() => {
    return (
        <View style={styles.container}>
            <Text>Selamlar!</Text>
            <Text>Clarusway App e Hosgeldiniz!</Text>
            <View>
                <Text>Fullstack Developer olmaya hazir olun!</Text>
            </View>
        </View>
    )
};

export default MyComponent;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        margin:10,
        padding:10,
        borderWidth:3,
        borderColor:'gray',
        borderRadius:25,
        
    }
})
