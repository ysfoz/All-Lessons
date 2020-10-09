import React from 'react';
import { SafeAreaView, Text, View,StyleSheet,TouchableOpacity } from 'react-native';
import Banner from './components/Banner'
import MyButton from './components/Button'

const food_data = [
    {
      id: 0,
      title: 'Çorbalar',
      desc: 'Birbirinden leziz çorbalar!',
      color: '#e57373',
      isActive: false,
    },
    {
      id: 1,
      title: 'Ara Sıcaklar',
      desc: 'Lezzetlei aparetifler',
      color: '#81d4fa',
      isActive: true,
    },
    {
      id: 2,
      title: 'Ana Yemekler',
      desc: 'Doyurucu lezzetler',
      color: '#ffd54f',
      isActive: false,
    },
    {
      id: 3,
      title: 'Alkolsüz İçecekler',
      desc: 'Buz gibi serinletici lezzetler',
      color: '#cfd8dc',
      isActive: true,
    },
    {
      id: 4,
      title: 'Alkollü İçecekler',
      desc: 'Buz gibi serinletici alkollü lezzetler',
      color: '#c5e1a5',
      isActive: true,
    },
  ];




const App = () => {
// bu kisima fonksiyonlar tanimlanabilir.

    return (
        //banner icerisinde fonksiyon icerisinde olusturdugumuz proms sayesinde artik istedigimiz property  i oncesinde banner a bu atribute eklenerek cagrilabilir

        <SafeAreaView style={{ flex: 1 }}>
            <View>
                
                <MyButton buttonTitle ='Refresh' />
                {/*bu sekilde click ozellilgine erismis olduk. ama diger button proms lu oldugu icin ina erisme yontemi daha farkli olacak  */}
                <TouchableOpacity style={{alignItems:'center'}}
                    onPress ={() => alert('Hello')}
                >
                    <Text style = {styles.button_Main}>Refresh</Text>
                </TouchableOpacity>
                
                <Banner title ='carbalar'
                        desc = 'birbirinden leziz corbalar'
                        color= '#e1bee7'
                        IsActive = {false}
                        
                        /> 

                <Banner title ='Ana Yemekler'
                        desc ='sicacik leziz yemekler'
                        color= '#80deea'
                        IsActive = {true}
                        />      

                <Banner title ='Salatalar'
                        desc ='direk bahcemizden saglikli'
                        color= '#ffd54f'
                        IsActive = {false}
                        /> 
                
            </View>
                
            <View>  
{/* bu kismimda yukarda verdigimiz food-data array icersindeki object leri yazdiracagiz */}
                {food_data.map((food)=>{
                    return <Banner 
                    title ={food.title}
                    desc ={food.desc}
                    color= {food.color}
                    IsActive = {food.isActive}
                    /> ; 
                    
                })}
            </View>
        </SafeAreaView>
    )
}


export default App;

// '* Reusable component -  hem app te tutarlilik adina hemde ayni kodlarin surekli tekrar etmsinin engellmek adina kodlarin surekli kullanilabilecek hale getirilmesi, hem kolatlik saglar hem okunabilriliigi arttirir. 


const styles = StyleSheet.create({
    button_Main:{
        backgroundColor:'lightblue',
        margin:10,
        padding:10,
        marginTop:15,
        width: 200,
        justifyContent:'center',
        textAlign:'center',
        
        
    }
})