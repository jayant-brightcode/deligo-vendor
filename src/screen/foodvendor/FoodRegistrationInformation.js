import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback, SafeAreaView} from "react-native"
import Colors from "../../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useRef, useState } from "react";





const FoodRegistrationInformationScreen = () =>{
    const navigation = useNavigation()
  
   

     //food , grocery
    const [selected_item ,set_selected_item] = useState('food')




    return <SafeAreaView style={style.container}>

        <StatusBar backgroundColor={Colors.black}/>


        <View style={{alignItems:'center',flex:1}}>

          <Image style={{width:'40%',height:60,marginTop:'10%'}} source={require('../../../assets/logotwo.png')}/>
          <Text style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:13,letterSpacing:1}}>APP FOR VENDORS</Text>


          <Text numberOfLines={1} style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:18,letterSpacing:1,marginTop:'10%',textAlign:'center',borderBottomWidth:1}}>Important Notice for Food Vendors</Text>
 


           <ScrollView showsVerticalScrollIndicator={false} style={{width:'90%',alignSelf:'center',marginTop:'3%'}}>
               
           <Text style={{color:Colors.dark_blue,fontFamily:'urbanistbold',fontSize:16,letterSpacing:1}}>Requirements for Registration</Text>
           <Text style={{fontFamily:'urbanistregular',fontSize:15,marginTop:3}}>Before you begin the registration process, please ensure you have the following information and documents ready:</Text>

           <Text style={{color:Colors.black,fontFamily:'urbanistmedium',fontSize:16,letterSpacing:1,textDecorationLine:'underline',marginTop:10,backgroundColor:Colors.altra_gray}}>Basic Information</Text>

           <Text style={{color:Colors.textcolor,fontFamily:'urbanistregular',fontSize:14,marginTop:10}}> ‣ Vendor Name</Text>
           <Text style={{color:Colors.textcolor,fontFamily:'urbanistregular',fontSize:14,marginTop:10}}> ‣ Restaurant Name</Text>
           <Text style={{color:Colors.textcolor,fontFamily:'urbanistregular',fontSize:14,marginTop:10}}> ‣ Owner Name</Text>
           <Text style={{color:Colors.textcolor,fontFamily:'urbanistregular',fontSize:14,marginTop:10}}> ‣ Contact Information (name and email address)</Text>
           <Text style={{color:Colors.textcolor,fontFamily:'urbanistregular',fontSize:14,marginTop:10}}> ‣ Business Full Address</Text>

           <Text style={{color:Colors.black,fontFamily:'urbanistmedium',fontSize:16,letterSpacing:1,textDecorationLine:'underline',marginTop:10,backgroundColor:Colors.altra_gray}}>Leagal Documents</Text>
 
           <Text style={{color:Colors.textcolor,fontFamily:'urbanistregular',fontSize:14,marginTop:10}}> ‣ Food License/Certificate</Text>
           <Text style={{color:Colors.textcolor,fontFamily:'urbanistregular',fontSize:14,marginTop:10}}> ‣ GST Number (if applicable)</Text>


           <Text style={{color:Colors.black,fontFamily:'urbanistmedium',fontSize:16,letterSpacing:1,textDecorationLine:'underline',marginTop:10,backgroundColor:Colors.altra_gray}}>Menu Information:</Text>
 
            <Text style={{color:Colors.textcolor,fontFamily:'urbanistregular',fontSize:14,marginTop:10}}> ‣ List of Menu Categories (e.g., appetizers, main courses, desserts)</Text>
            <Text style={{color:Colors.textcolor,fontFamily:'urbanistregular',fontSize:14,marginTop:10}}> ‣ Sample Menu List including - Name , Description and Price</Text>
            
            
            <Text style={{color:Colors.black,fontFamily:'urbanistmedium',fontSize:16,letterSpacing:1,textDecorationLine:'underline',marginTop:10,backgroundColor:Colors.altra_gray}}>Additional Details</Text>
 
 <Text style={{color:Colors.textcolor,fontFamily:'urbanistregular',fontSize:14,marginTop:10}}> ‣ Shop Photos</Text>

 <Text style={{ fontFamily: 'urbanistextrabold', fontSize: 24, marginBottom: 10,color:Colors.dark_blue,marginTop:'3%' }}>
        Additional Notice:
      </Text>
      <Text style={{ fontFamily: 'urbanistmedium', fontSize: 18, marginTop: 10 ,color:Colors.black}}>
        Accurate Information:
      </Text>
      <Text style={{ fontFamily: 'urbanistregular', fontSize: 16, marginBottom: 10 }}>
      Ensure all provided information is accurate and up-to-date. Misleading information may result in delays or rejection of your application.
      </Text>
      
      <Text style={{ fontFamily: 'urbanistmedium', fontSize: 18, marginTop: 10,color:Colors.black }}>
        Document Verification:
      </Text>
      <Text style={{ fontFamily: 'urbanistregular', fontSize: 16, marginBottom: 10 }}>
        All legal documents must be valid and clearly legible. Documents that are expired or illegible will not be accepted.
      </Text>

      <Text style={{ fontFamily: 'urbanistmedium', fontSize: 18, marginTop: 10,color:Colors.black }}>
        Quality Photos:
      </Text>
      <Text style={{ fontFamily: 'urbanistregular', fontSize: 16, marginBottom: 10 }}>
        Photos of your shop should be clear and professional. This helps in building trust with customers and improves the visibility of your listing.
      </Text>

      <Text style={{ fontFamily: 'urbanistmedium', fontSize: 18, marginTop: 10,color:Colors.black }}>
        Menu Listings:
      </Text>
      <Text style={{ fontFamily: 'urbanistregular', fontSize: 16, marginBottom: 10 }}>
      Provide a comprehensive menu with accurate descriptions and prices. This helps customers make informed choices and improves their ordering experience.
      </Text>

      <Text style={{ fontFamily: 'urbanistmedium', fontSize: 18, marginTop: 10 ,color:Colors.black}}>
        Compliance:
      </Text>
      <Text style={{ fontFamily: 'urbanistregular', fontSize: 16, marginBottom: 10 }}>
        Ensure your business complies with all local regulations and requirements. Possessing a valid business registration and GST number (if applicable) is mandatory.
      </Text>

      <Text style={{ fontFamily: 'urbanistmedium', fontSize: 18, marginTop: 10 ,color:Colors.black}}>
        Approval Process:
      </Text>
      <Text style={{ fontFamily: 'urbanistregular', fontSize: 16, marginBottom: 10 }}>
        After submitting your application, our admin team will review the information and documents. You will be notified via email about the status of your application. If approved, you will receive access to our vendor portal to start listing your products.
      </Text>

      <Text style={{ fontFamily: 'urbanistmedium', fontSize: 18, marginTop: 10 ,color:Colors.black}}>
        Customer Support:
      </Text>
      <Text style={{ fontFamily: 'urbanistregular', fontSize: 16, marginBottom: 10 }}>
        In case you need any assistance during the registration process, please contact our support team at [deligo@gmail.com].
      </Text>

      <Text style={{ fontFamily: 'urbanistregular', fontSize: 16, marginTop: 20 }}>
      By preparing the required details and documents, you can expedite the registration process and start showcasing your delicious food offerings to our customers. Thank you for your cooperation.
      </Text>
      

<TouchableOpacity style={{width:'100%',marginTop:'3%',marginBottom:30}} onPress={()=>{
  navigation.navigate("FoodBasicDetailRegistrationScreen")
}}>
<Text style={{backgroundColor:Colors.dark_blue,width:'100%',padding:10,borderRadius:10,textAlign:'center',color:Colors.white}}>CONTINUE</Text>
</TouchableOpacity>





           </ScrollView>
          

          


        

        </View>

     
    



       




  
    </SafeAreaView>
}



const style = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor:Colors.white
    }


})

export default FoodRegistrationInformationScreen