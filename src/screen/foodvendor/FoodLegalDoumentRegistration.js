import { StatusBar, StyleSheet, View, Image, Text, TextInput, TouchableOpacity, FlatList, ScrollView, Dimensions, TouchableWithoutFeedback, SafeAreaView } from "react-native"
import Colors from "../../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useRef, useState } from "react";





const FoodLeagalDocumentRegistrationScreen = () => {
  const navigation = useNavigation()



  //food , grocery
  const [selected_item, set_selected_item] = useState('food')




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
FSSAI Certificate

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
            navigation.navigate("FoodProductInformationRegistration")
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

export default FoodLeagalDocumentRegistrationScreen