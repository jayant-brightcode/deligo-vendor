import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Colors from "../../utils/Color";


const FoodAccountScreen = () =>{
    const navigation = useNavigation()

   


     

    
      

 









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


        <View style={{width:'100%',backgroundColor:Colors.grayview,marginTop:20}}>

          <View>

               <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start',padding:20}}>


                      <Image style={{width:50,height:50}}  source={require('../../../assets/u2.png')}/>

                      <View style={{marginStart:'7%'}}>
                         <Text style={{fontFamily:'urbanistbold',fontSize:18}}>Rohan Food Corner</Text>
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


        <ScrollView>

   
        <View style={{marginTop:20}}>


        <TouchableWithoutFeedback onPress={()=>{
           navigation.navigate("AddFoodProductScreen")
        }}>
        <View style={{padding:16,borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>

         <View style={{borderRadius:50,width:30,height:30,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:Colors.dark_green}}>
         <Image style={{width:16,height:16,tintColor:Colors.white}}  source={require('../../../assets/order.png')}/>

         </View>
       
        <Text style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>Add Product</Text>

        </View>
        </TouchableWithoutFeedback>
      

      
        <TouchableWithoutFeedback onPress={()=>{
           navigation.navigate("FoodProductListScreen")
        }}>
        <View style={{padding:16,borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>

         <View style={{borderRadius:50,width:30,height:30,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:Colors.dark_green}}>
         <Image style={{width:16,height:16,tintColor:Colors.white}}  source={require('../../../assets/order.png')}/>

         </View>
       
        <Text style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>Product List</Text>

        </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={()=>{
           navigation.navigate("AddDiscountCouponScreen")
        }}>
        <View style={{padding:16,borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>

         <View style={{borderRadius:50,width:30,height:30,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:Colors.dark_green}}>
         <Image style={{width:16,height:16,tintColor:Colors.white}}  source={require('../../../assets/order.png')}/>

         </View>
       
        <Text style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>Add Coupons And Discounts</Text>

        </View>
        </TouchableWithoutFeedback>
      
      

        <TouchableWithoutFeedback onPress={()=>{
           navigation.navigate("CouponListScreen")
        }}>
        <View style={{padding:16,borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>

         <View style={{borderRadius:50,width:30,height:30,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:Colors.dark_green}}>
         <Image style={{width:16,height:16,tintColor:Colors.white}}  source={require('../../../assets/order.png')}/>

         </View>
       
        <Text style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>Manage Coupons And Discounts</Text>

        </View>
        </TouchableWithoutFeedback>
      


        <TouchableWithoutFeedback onPress={()=>{
           navigation.navigate("FoodReviewAndRatingScreen")
        }}>
        <View style={{padding:16,borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>

         <View style={{borderRadius:50,width:30,height:30,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:Colors.dark_green}}>
         <Image style={{width:16,height:16,tintColor:Colors.white}}  source={require('../../../assets/order.png')}/>

         </View>
       
        <Text style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>Review And Rating</Text>

        </View>
        </TouchableWithoutFeedback>
      

        <TouchableWithoutFeedback onPress={()=>{
           navigation.navigate("ComplaintScreen")
        }}>
        <View style={{padding:16,borderBottomColor:Colors.dark_gray,borderBottomWidth:0.5,flexDirection:'row',alignItems:'center'}}>

         <View style={{borderRadius:50,width:30,height:30,alignContent:'center',alignItems:'center',justifyContent:'center',backgroundColor:Colors.dark_green}}>
         <Image style={{width:16,height:16,tintColor:Colors.white}}  source={require('../../../assets/order.png')}/>

         </View>
       
        <Text style={{fontFamily:'urbanistmedium',fontSize:16,color:Colors.textcolor,marginStart:10}}>Complaints</Text>

        </View>
        </TouchableWithoutFeedback>
      

     

        <TouchableWithoutFeedback onPress={()=>{
           navigation.navigate("FoodNotificationScreen")
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

        </ScrollView>
       
      

       

     
        

       


      


       










      

       
 
     



  
    </View>
}



const style = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor:Colors.white
    }


})

export default FoodAccountScreen