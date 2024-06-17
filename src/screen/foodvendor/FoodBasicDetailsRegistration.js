import { StatusBar, StyleSheet, View, Image, Text, TextInput, TouchableOpacity, FlatList, ScrollView, Dimensions, TouchableWithoutFeedback, SafeAreaView } from "react-native"
import Colors from "../../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useRef, useState } from "react";





const FoodBasicDetailRegistration = () => {
  const navigation = useNavigation()



  //food , grocery
  const [selected_item, set_selected_item] = useState('food')




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
            placeholder="Enter Vendor Name"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>Restaurant Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Shop Name"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>Owner Name:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Owner Name"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>Business Phone:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Business Phone"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>Business Email:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Business Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
          />

          {/* Address Details */}
          <Text style={styles.heading}>Address Details</Text>
          <Text style={styles.label}>Street Address Line 1:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Street Address Line 1"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>Street Address Line 2:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Street Address Line 2"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>City:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter City"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>State/Province/Region:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter State/Province/Region"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>Postal/Zip Code:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Postal/Zip Code"
            placeholderTextColor="#999"
          />
          <Text style={styles.label}>Country:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Country"
            placeholderTextColor="#999"
          />


          <TouchableOpacity style={{ width: '100%', marginTop: '3%', marginBottom: 30 }} onPress={() => {
            navigation.navigate("FoodLeagalDocumentRegistrationScreen")
          }}>
            <Text style={{ backgroundColor: Colors.dark_blue, width: '100%', padding: 10, borderRadius: 10, textAlign: 'center', color: Colors.white }}>NEXT</Text>
          </TouchableOpacity>

        </View>

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
    height: 40,
    borderColor: Colors.dark_gray,
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 10,

    marginBottom: 10,
    paddingHorizontal: 10,
  },


})

export default FoodBasicDetailRegistration