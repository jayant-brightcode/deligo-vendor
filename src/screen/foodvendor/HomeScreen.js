import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView, TouchableWithoutFeedback, Animated, Easing, Dimensions, PermissionsAndroid, Platform} from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import SwipeButton from 'rn-swipe-button';

import Colors from "../../utils/Color";

const FoodHomeScreen = () =>{
    const navigation = useNavigation()
    const [status, setStatus] = useState('Offline');

    const scrollY = new Animated.Value(0);
    const diffClamp = Animated.diffClamp(scrollY, 0, 64);
    const translateY = diffClamp.interpolate({
      inputRange: [0, 64],
      outputRange: [0, 64],
    });
    const [navVisible, setNavVisible] = useState(true);

    const handleSwipeSuccess = () => {
        setStatus((prevStatus) => (prevStatus === 'Offline' ? 'Online' : 'Offline'));
      };



    
    
    const recomneded = [
        { id: 1, title: 'Biryani',image:require('../../../assets/biryani.jpg') },
        { id: 2, title: 'Cakes',image:require('../../../assets/pizza.png') },
        { id: 3, title: 'Thali',image:require('../../../assets/thali.png') },
        { id: 4, title: 'Chiken Kadai',image:require('../../../assets/pizza.png')},
        { id: 8, title: 'Chole & Bhature',image:require('../../../assets/biryani.jpg') },
        { id: 5, title: 'Ice-Creams',image:require('../../../assets/thali.png')},
        { id: 6, title: 'Pani Puri',image:require('../../../assets/pizza.png') },
        { id: 7, title: 'Mutton Biryani',image:require('../../../assets/biryani.jpg')},
        // Add more data items as needed
      ];

    
    
      // const recomneded = [
      //   { id: 1, title: 'Tomato',image:require('../../../assets/item3.jpg') },
      //   { id: 2, title: 'Spinch',image:require('../../../assets/item3.jpg') },
      //   { id: 3, title: 'Ghee',image:require('../../../assets/item3.jpg') },
      //   { id: 4, title: 'Tata Salt',image:require('../../../assets/item3.jpg')},
      //   { id: 5, title: 'Fresh Meat',image:require('../../../assets/item3.jpg') },
      //   { id: 6, title: 'Milk',image:require('../../../assets/item3.jpg') },
   
      //   // Add more data items as needed
      // ];
         

    

  



   

  







const renderProducts = ({item})=>{
       
  return(
    <TouchableWithoutFeedback onPress={()=>{

      const route = {
        from_page:"pending"
      }
      navigation.navigate("FoodOrderDetailScreen",{page:route})

    }}>
          <View style={{width:'90%',height:220,marginEnd:10,marginStart:10,borderTopColor:Colors.gray,borderTopWidth:0.7,marginBottom:15,backgroundColor:Colors.white,borderRadius:10,elevation:1,alignSelf:'center'}}>


            <View style={{width:'100%',flexDirection:'row'}}>
              <View>
              <Image style={{ width: 100, height: 100,borderTopLeftRadius:10,borderBottomLeftRadius:10,backgroundColor:'rgba(0,0,0,0.5)' }} source={item.image}></Image>

              <Text numberOfLines={2} style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:10,width:'100%',marginStart:4,marginTop:3}}>#DLG878978090</Text>
              </View>
        
            <View style={{marginTop:'3%',marginStart:'4%'}}>
  
            

             <Text numberOfLines={2} style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:15,width:'100%'}}>{item.title}</Text>
             <Text numColumns={2} style={{color:Colors.red,fontFamily:'urbanistmedium',fontSize:13}}></Text>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:13}}>Fruits and Vegetables</Text>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:13,backgroundColor:Colors.altra_gray}}>QTY : 5</Text>

             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistextrabold',fontSize:15,backgroundColor:Colors.altra_gray}}>Total : 235 - paid</Text>
             <Text numColumns={2} style={{color:Colors.black,fontFamily:'urbanistmedium',fontSize:13}}>Instant</Text>

             <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:14}}>Order On -</Text>
             <Image style={{ width: 16, height: 16,marginStart:4}} source={require('../../../assets/clock.png')}></Image>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:14,marginStart:3}}>23 sep , 3:00 pm</Text>
            
             </View>
          
          
             </View>

        

            </View>


          
          
            <Text numColumns={2} style={{color:Colors.dark_green,fontFamily:'urbanistmedium',fontSize:14,marginStart:3}}>Ratu road ranchi , road no 611 , behind yellow shop</Text>
               
            <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center',width:'95%',alignSelf:'center'}}>

              <Text style={{padding:9,fontFamily:'urbanistmedium',fontSize:14,backgroundColor:Colors.dark_green,color:Colors.white,borderRadius:8}}>Accept</Text>
              <Text style={{padding:9,fontFamily:'urbanistmedium',fontSize:14,backgroundColor:Colors.red,color:Colors.white,borderRadius:8,marginStart:20}}>Reject</Text>


              </View>

         





         

            
            
            
           
            

            

          </View>

        

    </TouchableWithoutFeedback>

  )
}




    return <View style={style.container}>

        <StatusBar backgroundColor={Colors.light_green}/>
       
            
      
        <View style={{height:'26%',backgroundColor:Colors.light_green}}>

          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>


          <View style={{alignSelf:'center',padding:10,marginTop:'3%',flexDirection:'row',alignItems:'center'}}>

            <View>
            <Text style={{marginStart:'3%',fontFamily:'urbanistextrabold',fontSize:18,color:Colors.black}}>Rohan Food Corner</Text>

            <Text style={{fontFamily:'urbanistbold',fontSize:13,color:Colors.black,marginStart:'3%'}}>DLGVDR76786</Text>

            </View>

            


            </View>

          



           <View style={{flexDirection:'row',marginEnd:10}}>
           <TouchableWithoutFeedback  onPress={()=>{
           navigation.navigate("NotificationScreen")
          }}>
            <Image style={{width:28,height:28,borderRadius:500,borderWidth:1,borderColor:Colors.black}}  source={require('../../../assets/notification.png')}/>

            </TouchableWithoutFeedback>


            <TouchableWithoutFeedback  onPress={()=>{
              navigation.navigate("FoodAccountScreen")
            }}>
            <Image style={{width:28,height:28,marginStart:20,marginEnd:'1%',borderRadius:500,borderWidth:1,borderColor:Colors.black}}  source={require('../../../assets/user.png')}/>

            </TouchableWithoutFeedback>


           </View>

           
          </View>

         <View style={{width:'90%',flexDirection:'row',alignSelf:'center',justifyContent:'space-between'}}>
            
            <Text style={{padding:8,borderWidth:1,borderColor:Colors.dark_green,backgroundColor:Colors.green_light_2,color:Colors.black,fontFamily:'urbanistbold',width:100,textAlign:'center',borderRadius:8}}>Pending Orders (20)</Text>

               <TouchableWithoutFeedback onPress={()=>{
                 navigation.navigate("FoodConfirmedOrderScreen")
               }}>
                            <Text style={{padding:8,borderWidth:1,borderColor:Colors.dark_green,backgroundColor:Colors.gray,color:Colors.textcolor,fontFamily:'urbanistmedium',width:100,textAlign:'center',borderRadius:8}}>Confirmed Orders (2)</Text>

                </TouchableWithoutFeedback>       

                 <TouchableWithoutFeedback onPress={()=>{
                 navigation.navigate("FoodCancelledOrderScreen")
               }}> 
            <Text style={{padding:8,borderWidth:1,borderColor:Colors.dark_green,backgroundColor:Colors.gray,color:Colors.textcolor,fontFamily:'urbanistmedium',width:100,textAlign:'center',borderRadius:8}}>Cancelled Orders (0)</Text>
</TouchableWithoutFeedback>
         </View>

    
         <View style={{width:'90%',flexDirection:'row',alignSelf:'center',justifyContent:'space-between',marginTop:'2%'}}>
            
         <TouchableWithoutFeedback onPress={()=>{
                 navigation.navigate("FoodWaitingForPickupScreen")
               }}>
            <Text style={{padding:8,borderWidth:1,borderColor:Colors.dark_green,backgroundColor:Colors.gray,color:Colors.textcolor,fontFamily:'urbanistmedium',width:100,textAlign:'center',borderRadius:8}}>Waiting For Pickup (20)</Text>
</TouchableWithoutFeedback>
          
<TouchableWithoutFeedback onPress={()=>{
                 navigation.navigate("FoodOutForDeliveryScreen")
               }}>
            <Text style={{padding:8,borderWidth:1,borderColor:Colors.dark_green,backgroundColor:Colors.gray,color:Colors.textcolor,fontFamily:'urbanistmedium',width:100,textAlign:'center',borderRadius:8}}>Out for delivery (2)</Text>
           </TouchableWithoutFeedback>
           
           <TouchableWithoutFeedback onPress={()=>{
                 navigation.navigate("FoodDeliveredOrderScreen")
               }}>
            <Text style={{padding:8,borderWidth:1,borderColor:Colors.dark_green,backgroundColor:Colors.gray,color:Colors.textcolor,fontFamily:'urbanistmedium',width:100,textAlign:'center',borderRadius:8}}>Delivered Orders (0)</Text>
            </TouchableWithoutFeedback>
         </View>

        </View>
        

       
  
      
        



        <FlatList
  data={[
    { type: 'header', id: 'header' },
    {type:'recommended',id:'recommended'}

  ]}
  renderItem={({ item }) => {
    switch (item.type) {
      case 'header':
        return (
          <View style={{ width: '95%', alignSelf: 'center', marginTop: '4%',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
            <View style={{width:'20%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>
            <Text style={{ fontSize: 17, fontFamily: 'urbanistbold', color: Colors.textcolor,letterSpacing:3 }}>PENDING ORDERS</Text>
            <View style={{width:'20%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>

          </View>
        );
      case 'recommended':
        return (

       
<View style={{ marginTop: '5%' }}>
             <FlatList
      data={recomneded}
      renderItem={renderProducts}
      keyExtractor={(item) => item.id}
         
     
    />
          </View>


         
        );
    
    
      default:
        return null;
    }
  }}
  keyExtractor={(item) => item.id}
  onScroll={e => {
    scrollY.setValue(e.nativeEvent.contentOffset.y);
  }}
  showsVerticalScrollIndicator={false}

/>

         {/* navigation */}
        
        <Animated.View
      style={{
     
        transform: [{translateY: translateY}],
    
      }}>
         {navVisible && (
 <View style={{width:'100%',position:'absolute',bottom:0,height:70,borderTopColor:Colors.gray,borderTopWidth:3,backgroundColor:Colors.white,justifyContent:'space-around',flexDirection:'row'}}>
 <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:Colors.white,width:50}}>
    <Image style={{width:23,height:23,tintColor:Colors.textcolor}}  source={require('../../../assets/home.png')}/>
    <Text style={{fontFamily:'urbanistmedium',fontSize:12}}>Home</Text>
 </View>


 <TouchableWithoutFeedback onPress={()=>{
   navigation.navigate("FoodNotificationScreen")
 }}>
<View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:Colors.white,width:70,marginStart:10}}>
    <Image style={{width:25,height:25,tintColor:Colors.textcolor}}  source={require('../../../assets/notification.png')}/>
    <Text style={{fontFamily:'urbanistmedium',fontSize:12}}>Notification</Text>
 </View>
 </TouchableWithoutFeedback>



<TouchableWithoutFeedback onPress={()=>{
   navigation.navigate("ProductListScreen")
}}>
<View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:Colors.white,width:50,marginStart:10}}>
    <Image style={{width:27,height:27,tintColor:Colors.textcolor}}  source={require('../../../assets/order.png')}/>
    <Text style={{fontFamily:'urbanistmedium',fontSize:12}}>Products</Text>
 </View>

</TouchableWithoutFeedback>

 <TouchableWithoutFeedback onPress={()=>{
   navigation.navigate("FoodShopSettingScreen")
 }}>
<View style={{flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:Colors.white,width:50,marginStart:10}}>
    <Image style={{width:27,height:27}}  source={require('../../../assets/user.png')}/>
    <Text style={{fontFamily:'urbanistmedium',fontSize:12}}>Setting</Text>
 </View>
 </TouchableWithoutFeedback>


</View>
         )}
         </Animated.View>


         
        


        

    </View>



}



const style = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor:Colors.white
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    statusText: {
        fontSize: 24,
        marginBottom: 20,
      },
      swipeButton: {
        width: '80%',
        height: 60,
      },


})

export default FoodHomeScreen