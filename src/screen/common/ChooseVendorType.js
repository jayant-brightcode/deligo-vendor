import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback, SafeAreaView} from "react-native"
import Colors from "../../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useRef, useState } from "react";





const ChooseVendorTypeScreen = () =>{
    const navigation = useNavigation()
  
   

     //food , grocery
    const [selected_item ,set_selected_item] = useState('food')




    return <SafeAreaView style={style.container}>

        <StatusBar backgroundColor={Colors.black}/>


        <View style={{alignItems:'center'}}>

          <Image style={{width:'40%',height:60,marginTop:'10%'}} source={require('../../../assets/logotwo.png')}/>
          <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:13,letterSpacing:1}}>APP FOR VENDORS</Text>


          <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:21,letterSpacing:1,marginTop:'10%'}}>Whar are you registering for?</Text>

          <Text style={{color:Colors.textcolor,fontFamily:'urbanistregular',textAlign:'center',fontSize:14,marginTop:'1%',width:'100%'}}>We are offering two services for vendors</Text>

          

          


        

        </View>

        <View style={{width:'100%',marginTop:'10%'}}>
              
              <TouchableOpacity onPress={()=>{
                  set_selected_item('food')
              }}>
  <View style={{padding:10,height:70,backgroundColor:Colors.grayview,width:'90%',alignSelf:'center',borderRadius:10,justifyContent:'center',backgroundColor:selected_item=='food'?Colors.parrot_green:Colors.grayview}}>
                <Text style={{marginStart:'3%',fontFamily:'urbanistextrabold',fontSize:20,color:selected_item=='food'?Colors.dark_green:Colors.black,letterSpacing:2}}>DELIGO FOODS</Text>
              </View>
              </TouchableOpacity>
            
                
              <TouchableOpacity onPress={()=>{
                  set_selected_item('grocery')

              }}>
              
              <View style={{marginTop:'2%',padding:10,height:70,backgroundColor:Colors.grayview,width:'90%',alignSelf:'center',borderRadius:10,justifyContent:'center',backgroundColor:selected_item=='grocery'?Colors.parrot_green:Colors.grayview}}>
                <Text style={{marginStart:'3%',fontFamily:'urbanistextrabold',fontSize:20,color:selected_item=='grocery'?Colors.dark_green:Colors.black,letterSpacing:2}}>DELIGO GROCERY</Text>
              </View>
              </TouchableOpacity>
          </View>

    



        <View style={{position:'absolute',bottom:10,width:'90%',alignSelf:'center',alignItems:'center'}}>


            <TouchableOpacity style={{width:'100%'}} onPress={()=>{

              if(selected_item=='food'){
                navigation.navigate("FoodRegistrationInformationScreen")
                
              }else if(selected_item=='grocery'){
                navigation.navigate("RegistrationInformationScreen")
              }

            
            }}>
   <Text style={{backgroundColor:Colors.dark_blue,width:'100%',padding:10,borderRadius:10,textAlign:'center',color:Colors.white}}>CONTINUE</Text>
            </TouchableOpacity>
        
            
       

          </View>




  
    </SafeAreaView>
}



const style = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor:Colors.white
    }


})

export default ChooseVendorTypeScreen