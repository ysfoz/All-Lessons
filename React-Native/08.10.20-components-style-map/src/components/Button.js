import React from 'react';
import {TouchableOpacity,Text,StyleSheet} from 'react-native';

const MyButton = (props)=>{
    return (
        <TouchableOpacity style={{alignItems:'center'}}
                            
        >
            <Text style = {styles.button}>{props.buttonTitle}</Text>
        </TouchableOpacity>
    )
}

export default MyButton;

const styles = StyleSheet.create({
    button:{
        backgroundColor:'lightgreen',
        margin:10,
        padding:10,
        marginTop:15,
        width: 200,
        justifyContent:'center',
        textAlign:'center',
        
        
    }
})