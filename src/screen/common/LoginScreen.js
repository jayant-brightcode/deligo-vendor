import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback, SafeAreaView, ActivityIndicator} from "react-native"
import Colors from "../../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useRef, useState } from "react";


import { CustomToast } from "../components/CustomToast.js";
import { validateEmail } from "../../utils/Validators";
import {  Emaillogin } from "../groceryvenodr_api/Auth.js";

import DeviceInfo from 'react-native-device-info';




const LoginScreen = () =>{
    const navigation = useNavigation()
  
    const [toastVisible, setToastVisible] = useState(false);
    const [email, set_email] = useState('');
    const [loading, set_loading] = useState(false);

    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('');

    const [deviceToken, setDeviceToken] = useState(null);

    const showToast = (message, type) => {
        setToastVisible(true);
        setToastMessage(message);
        setToastType(type);

    };

    useEffect(() => {
      const getDeviceId = async () => {
        try {
          // Get the unique device ID
          const uniqueId = await DeviceInfo.getUniqueId();
          console.log(uniqueId)
          
          // Store the device ID in AsyncStorage if not already stored
        
          // Set the device token state
          setDeviceToken(uniqueId);
        } catch (error) {
          console.log('Error retrieving device ID:', error);
        }
      };
  
      getDeviceId();
    }, []);

    const handleLogin = async () => {
      try {
           set_loading(true)

          if(!validateEmail(email)){
            set_loading(false)


             showToast("Please enter valid email address","failure")
             return


          }
         const response = await Emaillogin(deviceToken,"",email);
         if(response.status){
          set_loading(false)

          showToast(response.message,"success")
            //  const data = {
            //      phone: mobileNumber,
            //      otp: response.otp,
                
            //  }
     
            navigation.navigate("OtpScreen")
         }else{
          set_loading(false)

          showToast(response.message,"failure")
         }
      } catch (error) {
        set_loading(false)

          showToast(error.message)
          return
      }
  };





    return <SafeAreaView style={style.container}>

        <StatusBar backgroundColor={Colors.black}/>


        <View style={{alignItems:'center'}}>

          <Image style={{width:'40%',height:60,marginTop:'10%'}} source={require('../../../assets/logotwo.png')}/>
          <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:13,letterSpacing:1}}>APP FOR VENDORS</Text>


          <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:21,letterSpacing:1,marginTop:'10%'}}>Sign in to your account</Text>

          <Text style={{color:Colors.textcolor,fontFamily:'urbanistregular',textAlign:'center',fontSize:14,marginTop:'1%',width:'100%'}}>Login or create an account</Text>

           <TextInput onChangeText={(text)=>set_email(text)} style={{marginTop:'10%',width:'90%',alignSelf:'center',borderWidth:1,borderRadius:10,borderColor:Colors.dark_gray,paddingStart:10}} placeholder="Enter Email Address"></TextInput>
           <Text style={{color:Colors.textcolor,fontFamily:'urbanistregular',marginStart:'10%',fontSize:14,marginTop:'1%',width:'100%',color:Colors.navcolor}}>Enter valid email address number</Text>

           
           {loading && (
                   <ActivityIndicator style={{marginTop:20}} />
           )}

        

        </View>

    



        <View style={{position:'absolute',bottom:10,width:'90%',alignSelf:'center',alignItems:'center'}}>


            <TouchableOpacity style={{width:'100%'}} onPress={()=>{
              // navigation.navigate("ChooseVendorTypeScreen")
              handleLogin()
            }}>
   <Text style={{backgroundColor:Colors.dark_blue,width:'100%',padding:10,borderRadius:10,textAlign:'center',color:Colors.white}}>CONTINUE</Text>
            </TouchableOpacity>
        
           <Text style={{color:Colors.textcolor,fontFamily:'urbanistregular',textAlign:'center',fontSize:14,width:'100%',marginTop:'2%'}}>By continiuing your are agree to our 
            
              <Text style={{color:Colors.dark_blue,fontFamily:'urbanistregular',}}> Terms of Services</Text>
            </Text>

          </View>


          <CustomToast
                    message={toastMessage}
                    visible={toastVisible}
                    onRequestClose={() => setToastVisible(false)}
                    message_type={toastType}
                />

  
    </SafeAreaView>
}



const style = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor:Colors.white
    }


})

export default LoginScreen