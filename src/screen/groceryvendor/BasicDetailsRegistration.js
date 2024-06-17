import { StatusBar, StyleSheet, View, Image, Text, TextInput, TouchableOpacity, FlatList, ScrollView, Dimensions, TouchableWithoutFeedback, SafeAreaView } from "react-native"
import Colors from "../../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useRef, useState } from "react";


import { CustomToast } from "../components/CustomToast.js";
import {  Emaillogin } from "../groceryvenodr_api/Auth.js";
import { isEmpty, validateEmail } from "../../utils/Validators.js";



const BasicDetailRegistration = () => {
  const navigation = useNavigation()

  const [loading, set_loading] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');

  const [vendor_name, vendor_set_name] = useState('');
  const [shop_name, set_shop_name] = useState('');
  const [owner_name, set_owner_name] = useState('');

  const [phone, set_phone] = useState('');
  const [email, set_email] = useState('');
  const [address_line_1, set_address_line_1] = useState('');
  const [address_line_2, set_address_line_2] = useState('');
  const [city, set_city] = useState('');
  const [state, set_state] = useState('');
  const [p_code, set_p_code] = useState('');
  const [country, set_country] = useState('');


  const showToast = (message, type) => {
      setToastVisible(true);
      setToastMessage(message);
      setToastType(type);

  };




  const handleGotoSecondStep = async () => {
    try {
         set_loading(true)

        if(isEmpty(vendor_name)){
          set_loading(false)


           showToast("Please enter Vendor name","failure")
           return


        }

        if(isEmpty(shop_name)){
          set_loading(false)


           showToast("Please enter Shop name","failure")
           return


        }
        if(isEmpty(owner_name)){
          set_loading(false)


           showToast("Please enter Owner name","failure")
           return


        }
        if(isEmpty(phone)){
          set_loading(false)


           showToast("Please enter Phone number","failure")
           return



        }

        if(!validateEmail(email)){
          set_loading(false)


           showToast("Please enter valid email address","failure")
           return


        }
        if(isEmpty(address_line_1)){
          set_loading(false)


           showToast("Please enter address line 1","failure")
           return


        }

        if(isEmpty(address_line_2)){
          set_loading(false)


           showToast("Please enter address line 2","failure")
           return


        }

        if(isEmpty(city)){
          set_loading(false)


           showToast("Please enter city","failure")
           return


        }
        if(isEmpty(state)){
          set_loading(false)


           showToast("Please enter state","failure")
           return


        }

        if(isEmpty(country)){
          set_loading(false)


           showToast("Please enter country name","failure")
           return


        }


        const step_one = {
          vendor_name:vendor_name,
          shop_name:shop_name,
          owner_name:owner_name,
          phone:phone,
          email:email,
          address_line_1:address_line_1,
          address_line_2:address_line_2,
          city:city,
          state:state,
          p_code:p_code,
          country:country
        }

        navigation.navigate("LeagalDocumentRegistrationScreen",{data:step_one})
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


      <Text numberOfLines={1} style={{ color: Colors.textcolor, fontFamily: 'urbanistbold', fontSize: 18, letterSpacing: 1, marginTop: '10%', textAlign: 'center', borderBottomWidth: 1 }}>STEP - 1 : FILL BASIC INFORMATION</Text>


      <ScrollView showsVerticalScrollIndicator={false} style={{ width: '90%', alignSelf: 'center', marginTop: '4%' }}>
        <View>
          <Text style={styles.label}>Vendor Name:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text)=>vendor_set_name(text)}
            placeholder="Enter Vendor Name"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>Shop Name:</Text>
          <TextInput
            onChangeText={(text)=>set_shop_name(text)}
            style={styles.input}
            placeholder="Enter Shop Name"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>Owner Name:</Text>
          <TextInput
            onChangeText={(text)=>set_owner_name(text)}
            style={styles.input}
            placeholder="Enter Owner Name"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>Business Phone:</Text>
          <TextInput
            style={styles.input}
            maxLength={10}
            keyboardType="number-pad"
            onChangeText={(text)=>set_phone(text)}
            placeholder="Enter Business Phone"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>Business Email:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text)=>set_email(text)}
            placeholder="Enter Business Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
          />

          {/* Address Details */}
          <Text style={styles.heading}>Address Details</Text>
          <Text style={styles.label}>Street Address Line 1:</Text>
          <TextInput
            onChangeText={(text)=>set_address_line_1(text)}
            style={styles.input}
            placeholder="Enter Street Address Line 1"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>Street Address Line 2:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text)=>set_address_line_2(text)}
            placeholder="Enter Street Address Line 2"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>City:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text)=>set_city(text)}
            placeholder="Enter City"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>State/Province/Region:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text)=>set_state(text)}
            placeholder="Enter State/Province/Region"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>Postal/Zip Code:</Text>
          <TextInput
            onChangeText={(text)=>set_p_code(text)}
            style={styles.input}
            keyboardType="number-pad"
            placeholder="Enter Postal/Zip Code"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>Country:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text)=>set_country(text)}
            placeholder="Enter Country"
            placeholderTextColor="#999"
          />


          <TouchableOpacity style={{ width: '100%', marginTop: '3%', marginBottom: 30 }} onPress={() => {
                handleGotoSecondStep()
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

export default BasicDetailRegistration