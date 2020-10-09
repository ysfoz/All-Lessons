import React from 'react';
import {View,Text,StyleSheet} from 'react-native';



const Banner = (proms) => {
    // bu sekilde ust kisimda fonksiyon tanimlayarak yapilabilir, ama ternary olarak yazilabilecek fonksiyonlari direk 
    //alt tarafa yazmak gerekir.
    // function checkActiveStaus(){
    //     if(proms.IsActive){
    //         return null
    //     }else{
    //         return <Text>Aktif degil</Text>
    //     }
    // }
    return(
        // yeniden stil vermek istedigimizde arrya yapisinda yazilir.bu sekilde tanimlanan stiller her 
        // proms icin degistirilebilir
        <View style = {[styles.container, {backgroundColor: proms.color}]}>
            <View style={{
                flexDirection:'row',
                alignItems:'center'
                
            }}>
                <View style={{flex:1 }}>
                    <Text style={styles.text}>{proms.title}</Text>
                    <Text>{proms.desc}</Text>
                </View>
                {/* en kisa ve en guncel yazimi bu sekilde, ama true dondurdugu icin ! isareti konuldu. */}
                { !proms.IsActive && <Text>Aktif Degil</Text>}
                {/* {proms.IsActive ? null: <Text>Aktif degil</Text>}  yukardaki fonksiyon bu sekilde de olabilir*/}
                {/* {checkActiveStaus()} */}
            
                </View>
        </View>
        // <Text style={styles.text}>Corbalar</Text> bunu coklu olarak yazmak istedigimizde 
        //fonksiyon icerisine proms eklenir. bunu sayesinde , proms. olarak girilen tim propertyler ekrana basilir
    )
}

export default Banner;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'lightgreen',
        margin:10,
        padding:10,


        
    },
    text:{
        fontWeight:'bold',
        fontSize:20,
    }
})