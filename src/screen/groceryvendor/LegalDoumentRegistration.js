import { StatusBar, StyleSheet, View, Image, Text, TextInput, TouchableOpacity, FlatList, ScrollView, Dimensions, TouchableWithoutFeedback, SafeAreaView } from "react-native"
import Colors from "../../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useRef, useState } from "react";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { CustomToast } from "../components/CustomToast.js";

import {useRoute} from '@react-navigation/native'



const LeagalDocumentRegistrationScreen = () => {
  const navigation = useNavigation()
  
  const route = useRoute()

  console.log(route)


  const [imageUri, setImageUri] = useState(null);
  const [gst, set_gst] = useState('');

  const [loading, set_loading] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');

  
  const showToast = (message, type) => {
    setToastVisible(true);
    setToastMessage(message);
    setToastType(type);

};


  const openCamera = () => {
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
          setImageUri(response.assets[0].uri);
          console.log(response.assets[0].uri)
        }
      },
    );
  };

  const handleGotoThirdStep = async () => {
    try {
         set_loading(true)

        if(imageUri==null){
          set_loading(false)


           showToast("Please upload Trade licence image","failure")
           return


        }

        const step_1= {
           step_1:route.params,
           

        }

        const step_2= {
          gst:gst,
          trade_license:imageUri,
          step_1:step_1
        }
  
        navigation.navigate("VendorShopPhotoRegistrationScreen",{data:step_2})     
         //  const response = await Emaillogin(deviceToken,"",email);
      //  if(response.status){
      //   set_loading(false)

      //   showToast(response.message,"success")
      //     //  const data = {
      //     //      phone: mobileNumber,
      //     //      otp: response.otp,
              
      //     //  }
   
      //     navigation.navigate("OtpScreen")
      //  }else{
      //   set_loading(false)

      //   showToast(response.message,"failure")
      //  }
    } catch (error) {
      set_loading(false)

        showToast(error.message)
        return
    }
};


  return <SafeAreaView style={styles.container}>

    <StatusBar backgroundColor={Colors.black} />


    <View style={{ alignItems: 'center', flex: 1 }}>

      <Image style={{ width: '40%', height: 60, marginTop: '10%' }} source={require('../../../assets/logotwo.png')} />
      <Text style={{ color: Colors.textcolor, fontFamily: 'urbanistbold', fontSize: 13, letterSpacing: 1 }}>APP FOR VENDORS</Text>


      <Text numberOfLines={1} style={{ color: Colors.textcolor, fontFamily: 'urbanistbold', fontSize: 18, letterSpacing: 1, marginTop: '10%', textAlign: 'center', borderBottomWidth: 1 }}>STEP - 2 : LEGAL DOCUMENTS</Text>


      <ScrollView showsVerticalScrollIndicator={false} style={{ width: '90%', alignSelf: 'center', marginTop: '4%' }}>
        <View>
          <Text style={styles.label}>GST Number:</Text>
          <TextInput
            style={styles.input}
          
            onChangeText={(text)=>set_gst(text)}
            placeholder="Enter GST number (optional)"
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
TRADE LICENCE (UPLOAD PHOTO)

</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>


   <TouchableWithoutFeedback onPress={()=>{
          openCamera()
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


{imageUri !=null && (
  <View>
  <Image style={{width:'100%',marginTop:20,height:300,resizeMode:'contain'}} source={{uri:imageUri}}/>

</View>
)}

          <TouchableOpacity style={{ width: '100%', marginTop: '3%', marginBottom: 30 }} onPress={() => {
             handleGotoThirdStep()
          }}>
            <Text style={{ backgroundColor: Colors.dark_blue, width: '100%', padding: 10, borderRadius: 10, textAlign: 'center', color: Colors.white }}>NEXT</Text>
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

export default LeagalDocumentRegistrationScreen