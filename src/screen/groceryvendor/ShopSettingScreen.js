import { StatusBar, StyleSheet, View, Image, Text, TextInput, TouchableOpacity, FlatList, ScrollView, Dimensions, TouchableWithoutFeedback, SafeAreaView } from "react-native"
import Colors from "../../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useRef, useState } from "react";

import SwipeButton from 'rn-swipe-button';






const ShopSettingScreen = () => {
  const navigation = useNavigation()


  const [status, setStatus] = useState('Close Shop');

  const handleSwipeSuccess = () => {
      setStatus((prevStatus) => (prevStatus === 'Open Shop' ? 'Close Shop' : 'Open Shop'));
    };



  return <SafeAreaView style={styles.container}>

    <StatusBar backgroundColor={Colors.light_green} />


    <View style={{ alignItems: 'center', flex: 1 }}>

    <View style={{height:'7%' ,backgroundColor:Colors.light_green,width:'100%'}}>

<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>


  <View style={{flexDirection:'row',alignItems:'center',width:'80%',height:'100%',padding:'3'}}>



  <Image style={{width:30,height:20,marginStart:'4%',marginTop:'4%'}}  source={require('../../../assets/arrow.png')}/>

  <View style={{marginStart:'2%',marginTop:'4%',height:'58%',width:'0.5%',backgroundColor:Colors.green_light_2}}></View>
  <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.textcolor}}>Shop Setting</Text>
  </View>


</View>





</View>





      <ScrollView showsVerticalScrollIndicator={false} style={{ width: '90%', alignSelf: 'center', marginTop: '4%' }}>
        <View>
          <Text style={styles.label}>Shop Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Shop Name Here"
            placeholderTextColor="#999"
          />
        
        <View style={{backgroundColor:Colors.white,marginTop:'5%',borderRadius:10,elevation:2,padding:8,width:'97%',alignSelf:'center'}}>



<View>
<Text
style={{
  marginStart: 4,
  fontWeight: '700',
  fontSize: 15,
  marginStart: 4,
  marginTop:'2%',
  marginBottom:'2%',
  color: '#1E5060',
}}>
Shop Cover Photo

</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

    <Image
          style={{width: '100%', height: 130, resizeMode: 'center',borderWidth:1,borderRadius:10,borderColor:Colors.gray}}
          source={require('../../../assets/chooseimage.png')}></Image>


    


      

            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
     


    

            </View>

   
</View>


</View>

          <TouchableOpacity style={{ width: '100%', marginTop: '3%', marginBottom: 30 }} onPress={() => {
            navigation.navigate("VendorShopPhotoRegistrationScreen")
          }}>
            <Text style={{ backgroundColor: Colors.dark_blue, width: '100%', padding: 10, borderRadius: 10, textAlign: 'center', color: Colors.white }}>NEXT</Text>
          </TouchableOpacity>

        </View>


        
        <SwipeButton
        style={{position:'absolute',bottom:0}}
       title={`Swipe to go ${status === 'Open Shop' ? 'Close Shop' : 'Open Shop'}`}
       onSwipeSuccess={()=>{
        handleSwipeSuccess()
       }}
       thumbIconBackgroundColor="#FFFFFF"
       thumbIconBorderColor="#000000"
       railBackgroundColor= {Colors.light_green}

       railFillBackgroundColor="#4CD964"
       railFillBorderColor="#4CD964"
     />


      </ScrollView>




    </View>












  </SafeAreaView>
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  heading: {
    fontFamily: 'urbanistextrabold',
    fontSize: 20,
    marginBottom: 10,
    color: Colors.dark_blue
  },
  label: {
    fontFamily: 'urbanistmedium',
    fontSize: 16,
    marginTop: 10,
    color: Colors.textcolor
  },
  input: {
    fontFamily: 'urbanistregular',
    height: 50,
    borderColor: Colors.dark_gray,
    borderWidth: 1,
    marginTop: 8,

    borderRadius: 10,

    marginBottom: 10,
    paddingHorizontal: 10,
  },
  productContainer: {
    marginBottom: 20,
  },

  addButton: {
    backgroundColor: Colors.dark_gray,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop:8
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },


})

export default ShopSettingScreen