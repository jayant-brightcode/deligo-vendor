import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Colors from "../../utils/Color";
import { validateEmail } from "../../utils/Validators";
import DeviceInfo from 'react-native-device-info';
import { CheckRegistrationStatus } from "../groceryvenodr_api/Registration";


const AccountScreen = () =>{
    const navigation = useNavigation()

   


     

    const [deviceToken, setDeviceToken] = useState(null);
    const [reg_status, set_reg_status] = useState("");
    const [rejected_reason, set_rejected_reason] = useState(null);

      
    useEffect(() => {
      const getDeviceId = async () => {
        try {
          // Get the unique device ID
          const uniqueId = await DeviceInfo.getUniqueId();
          console.log(uniqueId)
          
          // Store the device ID in AsyncStorage if not already stored
        
          // Set the device token state
          setDeviceToken(uniqueId);
          CheckRegStatus(uniqueId);
        } catch (error) {
          console.log('Error retrieving device ID:', error);
        }
      };
  
      getDeviceId();
    }, []);
 
   


    const CheckRegStatus = async (id) => {
      try {
          
  
       
         const response = await CheckRegistrationStatus(id);
        
         if(response.status){
  
          const reg_details = response.data.status
  
         
              if(reg_details!=null && reg_details=="Accept"){
                set_reg_status("Accept")
       
              }else if(reg_details!=null && reg_details=="Rejected"){
               set_reg_status("Rejected")
               set_rejected_reason(response.data.rej_reason)

       
              }else if(reg_details!=null && reg_details=="Pending"){
           
               set_reg_status("Pending")
            }else{
               navigation.replace('ChooseVendorTypeScreen'); // Navigate to the SignupScreen
              }
              
             
       
            }
             
         
      } catch (error) {
      
          return
      }
  };








    return <View style={style.container}>

        <StatusBar backgroundColor={Colors.light_green}/>

        <View style={{height:'7%' ,backgroundColor:Colors.light_green}}>

          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>


            <View style={{flexDirection:'row',alignItems:'center',width:'80%',height:'100%',padding:'3'}}>

      

            <Image style={{width:30,height:20,marginStart:'4%',marginTop:'4%'}}  source={require('../../../assets/arrow.png')}/>

            <View style={{marginStart:'2%',marginTop:'4%',height:'58%',width:'0.5%',backgroundColor:Colors.green_light_2}}></View>
            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.textcolor}}>My Account</Text>
            </View>
          

          </View>


      


        </View>



<ScrollView style={{flex:1}}>

        <View>

         {reg_status=="Pending" && (
            
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',width:'100%',backgroundColor:Colors.light_purple,padding:10}}>
 
        <Text style={{fontFamily:'urbanistmedium',color:Colors.black}}>Your request to become a vendor has been received and is currently being processed. Please feel free to contact us in case of any significant delays.</Text>
       
       
       </View>
         )}


{reg_status=="Accept" && (
<View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',width:'100%',backgroundColor:Colors.light_purple,padding:10}}>
 
 <Image style={{width:20,height:20}} source={require('../../../assets/insurance.png')}></Image>
 <Text style={{marginStart:10,fontFamily:'urbanistmedium',color:Colors.black}}>Vendor Registration Approved and Verified By Deligo.</Text>


</View>  )}

{reg_status=="Rejected" && (
<View style={{justifyContent:'flex-start',width:'100%',backgroundColor:Colors.light_purple,padding:10}}>
 
 <Text style={{marginStart:10,fontFamily:'urbanistmedium',color:Colors.black}}>Vendor Registration has been rejected.</Text>

 <Text style={{marginStart:10,fontFamily:'urbanistmedium',color:Colors.red}}>{rejected_reason}</Text>

 <TouchableWithoutFeedback onPress={()=>{
      navigation.replace("RegistrationInformationScreen")
 }}>
<Text style={{marginStart:10,fontFamily:'urbanistmedium',color:Colors.white,textAlign:'center',backgroundColor:Colors.dark_blue,padding:8,borderRadius:8,marginTop:20}}>submit again</Text>

 </TouchableWithoutFeedback>
 
</View> )}

        <View style={{width:'100%',backgroundColor:Colors.light_green,marginTop:20}}>

          <View>

        
               

               <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',padding:20}}>


                      <Image style={{width:50,height:50}}  source={require('../../../assets/u2.png')}/>

                      <View style={{marginStart:'7%'}}>
                         <Text style={{fontFamily:'urbanistbold',fontSize:18}}>Rohan Grocerry Store</Text>
                         <Text style={{fontFamily:'urbanistmedium',fontSize:13}}>rohan_090@gmail.cpm</Text>
                         <Text style={{fontFamily:'urbanistregular',fontSize:13,marginTop:4}}>+91 9102757673</Text>
                         <Text style={{fontFamily:'urbanistregular',fontSize:13,marginTop:4}}>VENDOR ID - #DLGVDR232432</Text>
                      </View>

                         {/* <TouchableWithoutFeedback onPress={()=>{
                          navigation.navigate("EditAccountScreen")
                         }}>
                         <Text style={{fontFamily:'urbanistmedium',fontSize:13,backgroundColor:Colors.dark_green,padding:8,marginStart:30,borderRadius:8,color:Colors.white}}>EDIT</Text>

                         </TouchableWithoutFeedback> */}


               </View>




          </View>



        </View>

        <View style={{marginTop:20}}>


        <TouchableWithoutFeedback onPress={()=>{
           navigation.navigate("AddProductScreen")
        }}>
        <View style={{padding:16,borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>

         <View style={{borderRadius:50,width:30,height:30,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:Colors.dark_green}}>
         <Image style={{width:16,height:16,tintColor:Colors.white}}  source={require('../../../assets/order.png')}/>

         </View>
       
        <Text style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>Add Product</Text>

        </View>
        </TouchableWithoutFeedback>
      

      
        <TouchableWithoutFeedback onPress={()=>{
           navigation.navigate("ProductListScreen")
        }}>
        <View style={{padding:16,borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>

         <View style={{borderRadius:50,width:30,height:30,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:Colors.dark_green}}>
         <Image style={{width:16,height:16,tintColor:Colors.white}}  source={require('../../../assets/order.png')}/>

         </View>
       
        <Text style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>Product List</Text>

        </View>
        </TouchableWithoutFeedback>
      


        <TouchableWithoutFeedback onPress={()=>{
           navigation.navigate("ReviewAndRatingScreen")
        }}>
        <View style={{padding:16,borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>

         <View style={{borderRadius:50,width:30,height:30,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:Colors.dark_green}}>
         <Image style={{width:16,height:16,tintColor:Colors.white}}  source={require('../../../assets/order.png')}/>

         </View>
       
        <Text style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>Review And Rating</Text>

        </View>
        </TouchableWithoutFeedback>
      

     

        <TouchableWithoutFeedback onPress={()=>{
           navigation.navigate("NotificationScreen")
        }}>
          <View style={{padding:16,borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>
          <View style={{borderRadius:50,width:30,height:30,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:Colors.dark_green}}>
         <Image style={{width:15,height:15,tintColor:Colors.white}}  source={require('../../../assets/bell.png')}/>

         </View>
            <Text style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>Notifications</Text>

            </View>

        </TouchableWithoutFeedback>

      

        <View style={{padding:16,borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>
        <View style={{borderRadius:50,width:30,height:30,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:Colors.dark_green}}>
         <Image style={{width:15,height:15,tintColor:Colors.white}}  source={require('../../../assets/headphones.png')}/>

         </View>
        <Text style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>Support</Text>

        </View>

        <View style={{padding:16,borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>
        <View style={{borderRadius:50,width:30,height:30,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:Colors.dark_green}}>
         <Image style={{width:15,height:15,tintColor:Colors.white}}  source={require('../../../assets/insurance.png')}/>

         </View>
        <Text style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>Privacy Policy</Text>

        </View>

        <View style={{padding:16,borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>
        <View style={{borderRadius:50,width:30,height:30,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:Colors.dark_green}}>
         <Image style={{width:15,height:15,tintColor:Colors.white}}  source={require('../../../assets/terms-and-conditions.png')}/>

         </View>
        <Text style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>Terms & Conditions</Text>

        </View>



        <View style={{padding:16,borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>
        <View style={{borderRadius:50,width:30,height:30,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:Colors.dark_green}}>
         <Image style={{width:15,height:15,tintColor:Colors.white}}  source={require('../../../assets/turn-off.png')}/>

         </View>
        <Text style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>Logout</Text>

        </View>



        </View>

        </View>
          
</ScrollView>
      

       

     
        

       


      


       










      

       
 
     



  
    </View>
}



const style = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor:Colors.white
    }


})

export default AccountScreen