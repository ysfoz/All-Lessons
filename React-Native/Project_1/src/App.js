import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import MyComponent from './components/MyComponent'
/**
 * style=""
 * style={}
 *
 * attribute={}
 *
 *  Inline Style (!)
 *  <View style={{ backgroundColor: 'purple', padding: 10, margin: 20, }}>
 */
const App = () => {
  const my_name = 'ezran onur bayantemur'
  const dogrumu= true
  function myFunction(){
    return 'Hello ysf ilk fonk'
  }

  function myFunction2 (){
    return <Text>direk olarak text ile yaptik2.fonk</Text>
  }

  function myFunction3(){
    const isAdmin = true;

    if(isAdmin){
      return <Text>Admin kullanicisi 3.fonk</Text>;
    } else{
      return <Text>uye kullanicisi</Text>
    }
  }

  function myFunction4(username){
  return <Text style={{color:'red',fontSize:40}}>{username}</Text>
  }

  function myFunction5(){
    const myCities = ['ankara', 'istanbul','hatay'];
    return myCities.map((city)=>{
    return <Text style={{color:'green',fontSize:40}}>{city}5.fonk</Text>
    })
  }

  return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.text}>Clarusway</Text>
        </View>

        <MyComponent />
  <Text style={styles.hello}>Hosgeldin {my_name} 🥶</Text>
  <Text style={styles.hello}>sonuc = {4+5}</Text>
  <Text>{myFunction()}</Text>
    {myFunction2()}
    {myFunction3()}
    

    {dogrumu && <Text style={{fontSize:40,color:'blue'}}>He dogru ternary && ile</Text>}

    {myFunction4("ysf,ysf 4.fonk")}
    {myFunction5()}

      </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    padding: 10,
    margin: 20,
    borderRadius:50
  },
  text:{
    color: 'black',
    fontWeight:'bold',
    fontSize:50,
    textAlign: "center",
    textTransform:"uppercase"
  },
  hello:{
    fontSize:30,
  }
});