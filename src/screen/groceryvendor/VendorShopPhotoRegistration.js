import { StatusBar, StyleSheet, View, Image, Text, TextInput, TouchableOpacity, FlatList, ScrollView, Dimensions, TouchableWithoutFeedback, SafeAreaView, ActivityIndicator } from "react-native"
import Colors from "../../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useRef, useState } from "react";

import {useRoute} from "@react-navigation/native"
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { CustomToast } from "../components/CustomToast.js";
import DatePicker from 'react-native-date-picker'
import { VendorRegistration } from "../groceryvenodr_api/Registration.js";
import DeviceInfo from 'react-native-device-info';


//vendor details - api

const VendorShopPhotoRegistrationScreen = () => {
  const navigation = useNavigation()

  const route = useRoute()
  const [deviceToken, setDeviceToken] = useState(null);


  const [shop1, set_shop1] = useState(null);
  const [shop2, set_shop2] = useState(null);

  const [loading, set_loading] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');

  const step_1 = route.params.data.step_1.step_1.data
  const step_2 = route.params.data

  console.log("ffff",step_2.trade_license)

  const [opening_time, set_opening_time] = useState(new Date())
  const [closing_time, set_closing_time] = useState(new Date())


  const [selected_opening_time,set_selected_opening_time] = useState("Choose Opening Time")
  const [selected_closing_time,set_selected_closing_time] = useState("Choose Closing Time")




  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)



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


  const openCamerashop1 = () => {
    launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'back',
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          set_shop1(response.assets[0].uri);
          console.log(response.assets[0].uri)
        }
      },
    );
  };

  
  const openCamerashop2 = () => {
    launchCamera(
      {
        mediaType: 'photo',
        cameraType: 'back',
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          set_shop2(response.assets[0].uri);
          console.log(response.assets[0].uri)
        }
      },
    );
  };

  const handleSendForVerification = async () => {
    try {
      console.log("dddd"+selected_opening_time)
    set_loading(true)

        if(shop1==null){
          set_loading(false)


           showToast("Please upload shop 1 image","failure")
           return


        }

        if(shop2==null){
          set_loading(false)


           showToast("Please upload shop 2 image","failure")
           return


        }

        if(selected_opening_time=="Choose Opening Time"){
          set_loading(false)


           showToast("Please choose opening time","failure")
           return


        }

        if(selected_closing_time=="Choose Closing Time"){
          set_loading(false)


           showToast("Please choose closing time","failure")
           return


        }
        

        

      
      
       
       const response = await VendorRegistration(deviceToken,step_1.vendor_name,step_1.owner_name,step_1.phone,step_1.email,step_1.address_line_1,step_1.address_line_2,step_1.city,step_1.state,step_1.p_code,"23.98989","86.5434",selected_opening_time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),selected_closing_time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }),"grocery",shop1,shop2,step_2.trade_license);
       if(response.status){
        set_loading(false)

        showToast(response.message,"success")
          //  const data = {
          //      phone: mobileNumber,
          //      otp: response.otp,
              
          //  }
   
          navigation.navigate("HomeScreen")
       }else{
        set_loading(false)

        showToast(response.message,"failure")
       }
    } catch (error) {
      set_loading(false)
        navigation.navigate("HomeScreen")

        showToast(error.message)
        return
    }
};
  
  const showToast = (message, type) => {
    setToastVisible(true);
    setToastMessage(message);
    setToastType(type);

};

  


  return <SafeAreaView style={styles.container}>

    <StatusBar backgroundColor={Colors.black} />


    <View style={{ alignItems: 'center', flex: 1 }}>

      <Image style={{ width: '40%', height: 60, marginTop: '10%' }} source={require('../../../assets/logotwo.png')} />
      <Text style={{ color: Colors.textcolor, fontFamily: 'urbanistbold', fontSize: 13, letterSpacing: 1 }}>APP FOR VENDORS</Text>


      <Text numberOfLines={1} style={{ color: Colors.textcolor, fontFamily: 'urbanistbold', fontSize: 18, letterSpacing: 1, marginTop: '10%', textAlign: 'center', borderBottomWidth: 1 }}>STEP - 3 : SHOP DETAILS</Text>


      <ScrollView showsVerticalScrollIndicator={false} style={{ width: '90%', alignSelf: 'center', marginTop: '4%' }}>
        <View>
         
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
Photo 1 (This will be used in app)

</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>



     <TouchableWithoutFeedback onPress={()=>{
        openCamerashop1()
     }}>


    <Image
          style={{width: '100%', height: 130, resizeMode: 'center',borderWidth:1,borderRadius:10,borderColor:Colors.gray}}
          source={require('../../../assets/chooseimage.png')}></Image>


          
</TouchableWithoutFeedback>


      

            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
     


    

            </View>

   
</View>


</View>

{shop1 !=null && (
  <View>
  <Image style={{width:'100%',marginTop:20,height:300,resizeMode:'contain'}} source={{uri:shop1}}/>

</View>
)}

    
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
Photo 2 (This will be used in app)

</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>

            <TouchableWithoutFeedback onPress={()=>{
        openCamerashop2()
     }}>
    <Image
          style={{width: '100%', height: 130, resizeMode: 'center',borderWidth:1,borderRadius:10,borderColor:Colors.gray}}
          source={require('../../../assets/chooseimage.png')}></Image>

</TouchableWithoutFeedback>
    


      

            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
     


    

            </View>

   
</View>


</View>

{shop2 !=null && (
  <View>
  <Image style={{width:'100%',marginTop:20,height:300,resizeMode:'contain',marginBottom:10}} source={{uri:shop2}}/>

</View>
)}


          <TouchableWithoutFeedback onPress={()=>{
            setOpen(true)
          }}>
            <Text style={{textAlign:'center',padding:10,borderRadius:8,backgroundColor:Colors.light_purple}}>
  {selected_opening_time === "Choose Opening Time" 
    ? "Choose Opening Time"
    : "Selected Opening Time: " + selected_opening_time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
</Text>
          </TouchableWithoutFeedback>
          <DatePicker
        modal
        open={open}
         mode="time"
         is24hourSource="locale"
         title={"Choose Opening Time"}
        date={opening_time}
        onConfirm={(date) => {
          setOpen(false)
          set_opening_time(date)
          set_selected_opening_time(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
  <TouchableWithoutFeedback onPress={()=>{
            setOpen2(true)
          }}>
            <Text style={{textAlign:'center',padding:10,marginTop:10,borderRadius:8,backgroundColor:Colors.light_purple}}>
  {selected_closing_time === "Choose Closing Time" 
    ? "Choose Closing Time"
    : "Selected Closing Time: " + selected_closing_time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })}
</Text>
          </TouchableWithoutFeedback>
          <DatePicker
        modal
        open={open2}
         mode="time"
         title={"Choose Closing Time"}
        date={closing_time}
        onConfirm={(date) => {
          setOpen2(false)
          set_closing_time(date)
          set_selected_closing_time(date)
        }}
        onCancel={() => {
          setOpen2(false)
        }
      }
      />
     {loading && (
          < ActivityIndicator size={50} style={{alignSelf:'center',mediaType:10}}/>
          )}
          <TouchableOpacity disabled ={loading}  style={{ width: '100%', marginTop: '3%', marginBottom: 30 }} onPress={() => {
             handleSendForVerification()
          }}>
            <Text style={{ backgroundColor: Colors.dark_blue, width: '100%', padding: 10, borderRadius: 10, textAlign: 'center', color: Colors.white }}>SEND FOR VERIFICATION</Text>
          </TouchableOpacity>


          


        </View>

      </ScrollView>




    </View>









    <CustomToast
                    message={toastMessage}
                    visible={toastVisible}
                    onRequestClose={() => setToastVisible(false)}
                    message_type={toastType}
                />


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
    height: 40,
    borderColor: Colors.dark_gray,
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 10,

    marginBottom: 10,
    paddingHorizontal: 10,
  },


})

export default VendorShopPhotoRegistrationScreen