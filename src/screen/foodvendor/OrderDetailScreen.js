import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView, TouchableWithoutFeedback, Animated, Easing, Dimensions, PermissionsAndroid, Platform} from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import SwipeButton from 'rn-swipe-button';
import { useRoute } from '@react-navigation/native';

import Colors from "../../utils/Color";

const FoodOrderDetailScreen = () =>{
    const navigation = useNavigation()
    const [status, setStatus] = useState('Offline');
    const route = useRoute();
    const from_page  = route.params.page.from_page
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



    
    
    const yourDataArray = [
        { id: 1, title: 'Biryani',image:require('../../../assets/biryani.jpg') },
        { id: 2, title: 'Cakes',image:require('../../../assets/pizza.png') },
        { id: 3, title: 'Thali',image:require('../../../assets/thali.png') },
        { id: 4, title: 'Chiken Kadai',image:require('../../../assets/pizza.png')},
        { id: 3, title: 'Chole & Bhature',image:require('../../../assets/biryani.jpg') },
        { id: 5, title: 'Ice-Creams',image:require('../../../assets/thali.png')},
        { id: 6, title: 'Pani Puri',image:require('../../../assets/pizza.png') },
        { id: 7, title: 'Mutton Biryani',image:require('../../../assets/biryani.jpg')},
        // Add more data items as needed
      ];

    
    
      const recomneded = [
        { id: 1, title: 'Tomato',image:require('../../../assets/item3.jpg') },
        { id: 2, title: 'Spinch',image:require('../../../assets/item3.jpg') },
        { id: 3, title: 'Ghee',image:require('../../../assets/item3.jpg') },
        { id: 4, title: 'Tata Salt',image:require('../../../assets/item3.jpg')},
        { id: 5, title: 'Fresh Meat',image:require('../../../assets/item3.jpg') },
        { id: 6, title: 'Milk',image:require('../../../assets/item3.jpg') },
   
        // Add more data items as needed
      ];
         

    

  



   

  







const renderProducts = ({item})=>{
       
  return(
    <TouchableWithoutFeedback onPress={()=>{
      navigation.navigate("OrderDetailScreen")

    }}>
          <View style={{width:'90%',height:370,marginEnd:10,marginStart:10,borderTopColor:Colors.gray,borderTopWidth:0.7,marginBottom:15,backgroundColor:Colors.white,borderRadius:10,elevation:1,alignSelf:'center'}}>


            <View style={{width:'100%',flexDirection:'row'}}>
              <View>
              <Image style={{ width: 100, height: 100,borderTopLeftRadius:10,borderBottomLeftRadius:10,backgroundColor:'rgba(0,0,0,0.5)' }} source={item.image}></Image>

              <Text numberOfLines={2} style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:10,width:'100%',marginStart:4,marginTop:3}}>#DLG878978090</Text>
              </View>
        
            <View style={{marginTop:'3%',marginStart:'4%'}}>
  
            

             <Text numberOfLines={2} style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:15,width:'100%'}}>{item.title}</Text>
             <Text numColumns={2} style={{color:Colors.red,fontFamily:'urbanistmedium',fontSize:13}}>Netsle</Text>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:13}}>Fruits and Vegetables</Text>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:13,backgroundColor:Colors.altra_gray}}>QTY : 5</Text>

             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistextrabold',fontSize:15,backgroundColor:Colors.altra_gray}}>Total : 235 - paid</Text>
             <Text numColumns={2} style={{color:Colors.black,fontFamily:'urbanistmedium',fontSize:13}}>Instant</Text>

          
          
             </View>

        

            </View>


          
            <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:14}}>Order On -</Text>
             <Image style={{ width: 16, height: 16,marginStart:4}} source={require('../../../assets/clock.png')}></Image>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:14,marginStart:3}}>23 sep , 3:00 pm</Text>
            
             </View>
             <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14}}>Accepted On -</Text>
             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14,marginStart:3,backgroundColor:Colors.altra_gray}}>23 sep , 3:00 pm</Text>
            
             </View>
            <Text numColumns={2} style={{color:Colors.dark_green,fontFamily:'urbanistmedium',fontSize:14,marginStart:3}}>Ratu road ranchi , road no 611 , behind yellow shop</Text>
               
               <View style={{height:1,width:'100%',borderBottomWidth:1,borderStyle:'dashed',marginTop:3}}></View>


               <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
               <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistextrabold',fontSize:14,marginTop:8}}>Deliver To - Rakesh Kumar</Text>
               <Text numColumns={2} style={{color:Colors.white,textAlign:'center',fontFamily:'urbanistextrabold',fontSize:14,marginTop:8,backgroundColor:Colors.dark_green,width:80,borderRadius:4,padding:5}}>Call</Text>

               </View>
               <View style={{height:1,width:'100%',borderBottomWidth:1,borderStyle:'dashed',marginTop:6}}></View>

               <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
               <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistextrabold',fontSize:14,marginTop:8}}>Delivery Partner - Shivam Kumar</Text>
               <Text numColumns={2} style={{color:Colors.white,textAlign:'center',fontFamily:'urbanistextrabold',fontSize:14,marginTop:8,backgroundColor:Colors.dark_green,width:80,borderRadius:4,padding:5}}>Call</Text>

               </View>

               <View style={{height:1,width:'100%',borderBottomWidth:1,borderStyle:'dashed',marginTop:6}}></View>

<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
<Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistextrabold',fontSize:14,marginTop:8}}>Captain Info - Reaching shop in 10 minutes</Text>

</View>

            <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center',width:'95%',alignSelf:'center'}}>
           
            <Text style={{padding:9,fontFamily:'urbanistmedium',fontSize:14,backgroundColor:Colors.dark_blue,color:Colors.white,borderRadius:8}}>Pickup For Delivery</Text>


              <Text style={{padding:9,fontFamily:'urbanistmedium',fontSize:14,backgroundColor:Colors.red,color:Colors.white,borderRadius:8,marginStart:10}}>Cancel</Text>


              </View>

         





         

            
            
            
           
            

            

          </View>

        

    </TouchableWithoutFeedback>

  )
}




    return <View style={style.container}>

        <StatusBar backgroundColor={Colors.light_green}/>
       
            
      
       
       
        <View style={{height:'7%' ,backgroundColor:Colors.light_green}}>

          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>


            <View style={{flexDirection:'row',alignItems:'center',width:'80%',height:'100%',padding:'3'}}>

      

            <Image style={{width:30,height:20,marginStart:'4%',marginTop:'4%'}}  source={require('../../../assets/arrow.png')}/>

            <View style={{marginStart:'2%',marginTop:'4%',height:'58%',width:'0.5%',backgroundColor:Colors.green_light_2}}></View>
            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.textcolor}}>Tomato - #DLG780707009</Text>
            </View>
          

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
            <Text style={{ fontSize: 17, fontFamily: 'urbanistbold', color: Colors.textcolor,letterSpacing:3 }}>ORDER DETAILS</Text>
            <View style={{width:'20%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>

          </View>
        );
      case 'recommended':
        return (

       

<View style={{width:'90%',flex:1,marginEnd:10,marginStart:10,borderTopColor:Colors.gray,marginBottom:15,backgroundColor:Colors.white,alignSelf:'center'}}>


<View style={{width:'100%',flexDirection:'row',marginTop:'6%'}}>
  <View>
  <Image style={{ width: 100, height: 100,borderTopLeftRadius:10,borderBottomLeftRadius:10,backgroundColor:'rgba(0,0,0,0.5)' }} source={require('../../../assets/item3.jpg')}></Image>

  <Text numberOfLines={2} style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:10,width:'100%',marginStart:4,marginTop:3}}>#DLG878978090</Text>
  </View>

<View style={{marginTop:'3%',marginStart:'4%'}}>



 <Text numberOfLines={2} style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:15,width:'100%'}}>Tomato</Text>
 <Text numColumns={2} style={{color:Colors.red,fontFamily:'urbanistmedium',fontSize:13}}>Netsle</Text>
 <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:13}}>Fruits and Vegetables</Text>
 <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:13,backgroundColor:Colors.altra_gray}}>QTY : 5</Text>

 <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistextrabold',fontSize:15,backgroundColor:Colors.altra_gray}}>Total : 235 - paid</Text>
 <Text numColumns={2} style={{color:Colors.black,fontFamily:'urbanistmedium',fontSize:13}}>Instant</Text>



 </View>



</View>




{from_page=="pending" && (
  <View>
       
       <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:14}}>Order On -</Text>
             <Image style={{ width: 16, height: 16,marginStart:4}} source={require('../../../assets/clock.png')}></Image>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:14,marginStart:3}}>23 sep , 3:00 pm</Text>
            
             </View>
          
          
          

        



          
          
            <Text numColumns={2} style={{color:Colors.dark_green,fontFamily:'urbanistmedium',fontSize:14,marginStart:3}}>Ratu road ranchi , road no 611 , behind yellow shop</Text>
               
            <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center',width:'95%',alignSelf:'center'}}>

              <Text style={{padding:9,fontFamily:'urbanistmedium',fontSize:14,backgroundColor:Colors.dark_green,color:Colors.white,borderRadius:8}}>Accept</Text>
              <Text style={{padding:9,fontFamily:'urbanistmedium',fontSize:14,backgroundColor:Colors.red,color:Colors.white,borderRadius:8,marginStart:20}}>Reject</Text>


              </View>
              <View style={{height:1,width:'100%',borderBottomWidth:1,borderStyle:'dashed',marginTop:6}}></View>

              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
               <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistextrabold',fontSize:14,marginTop:8}}>Deliver To - Rakesh Kumar</Text>
               <Text numColumns={2} style={{color:Colors.white,textAlign:'center',fontFamily:'urbanistextrabold',fontSize:14,marginTop:8,backgroundColor:Colors.dark_green,width:80,borderRadius:4,padding:5}}>Call</Text>

               </View>
               <View style={{height:1,width:'100%',borderBottomWidth:1,borderStyle:'dashed',marginTop:6}}></View>

               <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
               <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.black,fontFamily:'urbanistbold',fontSize:14}}>Estimated Delivery Time  -</Text>
             <Image style={{ width: 16, height: 16,marginStart:4}} source={require('../../../assets/clock.png')}></Image>
             <Text numColumns={2} style={{color:Colors.black,fontFamily:'urbanistbold',fontSize:14,marginStart:3}}>33 min</Text>
            
             </View>
                            
               </View>
               <View style={{height:1,width:'100%',borderBottomWidth:1,borderStyle:'dashed',marginTop:6}}></View>
           
  </View>  
)}


{from_page=="confirmed" && (
  <View>
           <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:14}}>Order On -</Text>
             <Image style={{ width: 16, height: 16,marginStart:4}} source={require('../../../assets/clock.png')}></Image>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:14,marginStart:3}}>23 sep , 3:00 pm</Text>
            
             </View>
             <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14}}>Accepted On -</Text>
             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14,marginStart:3,backgroundColor:Colors.altra_gray}}>23 sep , 3:00 pm</Text>
            
             </View>
            <Text numColumns={2} style={{color:Colors.dark_green,fontFamily:'urbanistmedium',fontSize:14,marginStart:3}}>Ratu road ranchi , road no 611 , behind yellow shop</Text>
               
               <View style={{height:1,width:'100%',borderBottomWidth:1,borderStyle:'dashed',marginTop:3}}></View>


               <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistextrabold',fontSize:14,marginTop:8}}>Deliver To - Rakesh Kumar</Text>
               <View style={{height:1,width:'100%',borderBottomWidth:1,borderStyle:'dashed',marginTop:6}}></View>
               <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.black,fontFamily:'urbanistbold',fontSize:14}}>Estimated Delivery Time  -</Text>
             <Image style={{ width: 16, height: 16,marginStart:4}} source={require('../../../assets/clock.png')}></Image>
             <Text numColumns={2} style={{color:Colors.black,fontFamily:'urbanistbold',fontSize:14,marginStart:3}}>33 min</Text>
            
             </View>
             <View style={{height:1,width:'100%',borderBottomWidth:1,borderStyle:'dashed',marginTop:6}}></View>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center',width:'95%',alignSelf:'center'}}>

          
              <Text style={{padding:9,fontFamily:'urbanistmedium',fontSize:14,backgroundColor:Colors.red,color:Colors.white,borderRadius:8}}>Cancel</Text>


              </View>

  </View>  
)}


{from_page=="cancelled" && (
  <View>
         
         <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:14}}>Order On -</Text>
             <Image style={{ width: 16, height: 16,marginStart:4}} source={require('../../../assets/clock.png')}></Image>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:14,marginStart:3}}>23 sep , 3:00 pm</Text>
            
             </View>
             <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14}}>Cancelled On -</Text>
             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14,marginStart:3,backgroundColor:Colors.altra_gray}}>23 sep , 3:00 pm  (By User)</Text>
            
             </View>
            <Text numColumns={2} style={{color:Colors.dark_green,fontFamily:'urbanistmedium',fontSize:14,marginStart:3}}>Ratu road ranchi , road no 611 , behind yellow shop</Text>
               
               <View style={{height:1,width:'100%',borderBottomWidth:1,borderStyle:'dashed',marginTop:3}}></View>


               <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistextrabold',fontSize:14,marginTop:8}}>Reason - Delay in delivery</Text>
               <View style={{height:1,width:'100%',borderBottomWidth:1,borderStyle:'dashed',marginTop:6}}></View>

            <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center',width:'95%',alignSelf:'center'}}>


              </View>


  </View>  
)}



{from_page=="pickup" && (
  <View>
         
         <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:14}}>Order On -</Text>
             <Image style={{ width: 16, height: 16,marginStart:4}} source={require('../../../assets/clock.png')}></Image>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:14,marginStart:3}}>23 sep , 3:00 pm</Text>
            
             </View>
             <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14}}>Accepted On -</Text>
             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14,marginStart:3,backgroundColor:Colors.altra_gray}}>23 sep , 3:00 pm</Text>
            
             </View>
            <Text numColumns={2} style={{color:Colors.dark_green,fontFamily:'urbanistmedium',fontSize:14,marginStart:3}}>Ratu road ranchi , road no 611 , behind yellow shop</Text>
               
               <View style={{height:1,width:'100%',borderBottomWidth:1,borderStyle:'dashed',marginTop:3}}></View>


               <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
               <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistextrabold',fontSize:14,marginTop:8}}>Deliver To - Rakesh Kumar</Text>
               <Text numColumns={2} style={{color:Colors.white,textAlign:'center',fontFamily:'urbanistextrabold',fontSize:14,marginTop:8,backgroundColor:Colors.dark_green,width:80,borderRadius:4,padding:5}}>Call</Text>

               </View>
               <View style={{height:1,width:'100%',borderBottomWidth:1,borderStyle:'dashed',marginTop:6}}></View>

               <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
               <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistextrabold',fontSize:14,marginTop:8}}>Delivery Partner - Shivam Kumar</Text>
               <Text numColumns={2} style={{color:Colors.white,textAlign:'center',fontFamily:'urbanistextrabold',fontSize:14,marginTop:8,backgroundColor:Colors.dark_green,width:80,borderRadius:4,padding:5}}>Call</Text>

               </View>

               <View style={{height:1,width:'100%',borderBottomWidth:1,borderStyle:'dashed',marginTop:6}}></View>

<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
<Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistextrabold',fontSize:14,marginTop:8}}>Captain Info - Reaching shop in 10 minutes</Text>

</View>
<View style={{height:1,width:'100%',borderBottomWidth:1,borderStyle:'dashed',marginTop:6}}></View>

<View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.black,fontFamily:'urbanistbold',fontSize:14}}>Estimated Delivery Time  -</Text>
             <Image style={{ width: 16, height: 16,marginStart:4}} source={require('../../../assets/clock.png')}></Image>
             <Text numColumns={2} style={{color:Colors.black,fontFamily:'urbanistbold',fontSize:14,marginStart:3}}>33 min</Text>
            
             </View>
             <View style={{height:1,width:'100%',borderBottomWidth:1,borderStyle:'dashed',marginTop:6}}></View>


           


            <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center',width:'95%',alignSelf:'center'}}>
           
            <Text style={{padding:9,fontFamily:'urbanistmedium',fontSize:14,backgroundColor:Colors.dark_blue,color:Colors.white,borderRadius:8}}>Pickup For Delivery</Text>


              <Text style={{padding:9,fontFamily:'urbanistmedium',fontSize:14,backgroundColor:Colors.red,color:Colors.white,borderRadius:8,marginStart:10}}>Cancel</Text>


              </View>



  </View>  
)}


{from_page=="delivery" && (
  <View>
         
         <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:14}}>Order On -</Text>
             <Image style={{ width: 16, height: 16,marginStart:4}} source={require('../../../assets/clock.png')}></Image>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:14,marginStart:3}}>23 sep , 3:00 pm</Text>
            
             </View>
             <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14}}>Accepted On -</Text>
             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14,marginStart:3,backgroundColor:Colors.altra_gray}}>23 sep , 3:00 pm</Text>
            
             </View>

             <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14}}>Out For delivery -</Text>
             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14,marginStart:3,backgroundColor:Colors.altra_gray}}>23 sep , 3:00 pm</Text>
            
             </View>
            <Text numColumns={2} style={{color:Colors.dark_green,fontFamily:'urbanistmedium',fontSize:14,marginStart:3}}>Ratu road ranchi , road no 611 , behind yellow shop</Text>
               
               <View style={{height:1,width:'100%',borderBottomWidth:1,borderStyle:'dashed',marginTop:3}}></View>


               <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
               <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistextrabold',fontSize:14,marginTop:8}}>Deliver To - Rakesh Kumar</Text>
               <Text numColumns={2} style={{color:Colors.white,textAlign:'center',fontFamily:'urbanistextrabold',fontSize:14,marginTop:8,backgroundColor:Colors.dark_green,width:80,borderRadius:4,padding:5}}>Call</Text>

               </View>
               <View style={{height:1,width:'100%',borderBottomWidth:1,borderStyle:'dashed',marginTop:6}}></View>

               <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
               <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistextrabold',fontSize:14,marginTop:8}}>Delivery Partner - Shivam Kumar</Text>
               <Text numColumns={2} style={{color:Colors.white,textAlign:'center',fontFamily:'urbanistextrabold',fontSize:14,marginTop:8,backgroundColor:Colors.dark_green,width:80,borderRadius:4,padding:5}}>Call</Text>

               </View>

               <View style={{height:1,width:'100%',borderBottomWidth:1,borderStyle:'dashed',marginTop:6}}></View>

<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
<Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistextrabold',fontSize:14,marginTop:8}}>Captain Info - Order Picked Up</Text>

</View>
<Text numColumns={2} style={{color:Colors.dark_blue,fontFamily:'urbanistextrabold',fontSize:14,marginTop:8,backgroundColor:Colors.altra_gray}}>Estimated Delivery Time - 65 mins</Text>


            


         

            
            


  </View>  
)}



{from_page=="delivered" && (
  <View>
         
        
         <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:14}}>Order On -</Text>
             <Image style={{ width: 16, height: 16,marginStart:4}} source={require('../../../assets/clock.png')}></Image>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:14,marginStart:3}}>23 sep , 3:00 pm</Text>
            
             </View>
             <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14}}>Accepted On -</Text>
             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14,marginStart:3,backgroundColor:Colors.altra_gray}}>23 sep , 3:00 pm</Text>
            
             </View>

             <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14}}>Out For delivery -</Text>
             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14,marginStart:3,backgroundColor:Colors.altra_gray}}>23 sep , 3:00 pm</Text>
            
             </View>

             <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14}}>Delivered On -</Text>
             <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistmedium',fontSize:14,marginStart:3,backgroundColor:Colors.altra_gray}}>23 sep , 3:00 pm</Text>
            
             </View>
            <Text numColumns={2} style={{color:Colors.dark_green,fontFamily:'urbanistmedium',fontSize:14,marginStart:3}}>Ratu road ranchi , road no 611 , behind yellow shop</Text>
               
               <View style={{height:1,width:'100%',borderBottomWidth:1,borderStyle:'dashed',marginTop:3}}></View>


               <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
               <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistextrabold',fontSize:14,marginTop:8}}>Deliver To - Rakesh Kumar</Text>
               <Text numColumns={2} style={{color:Colors.white,textAlign:'center',fontFamily:'urbanistextrabold',fontSize:14,marginTop:8,backgroundColor:Colors.dark_green,width:80,borderRadius:4,padding:5}}>Call</Text>

               </View>
               <View style={{height:1,width:'100%',borderBottomWidth:1,borderStyle:'dashed',marginTop:6}}></View>

               <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
               <Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistextrabold',fontSize:14,marginTop:8}}>Delivery Partner - Shivam Kumar</Text>
               <Text numColumns={2} style={{color:Colors.white,textAlign:'center',fontFamily:'urbanistextrabold',fontSize:14,marginTop:8,backgroundColor:Colors.dark_green,width:80,borderRadius:4,padding:5}}>Call</Text>

               </View>

               <View style={{height:1,width:'100%',borderBottomWidth:1,borderStyle:'dashed',marginTop:6}}></View>

<View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
<Text numColumns={2} style={{color:Colors.textcolor,fontFamily:'urbanistextrabold',fontSize:14,marginTop:8}}>Captain Info - Order Delivered to customer</Text>

</View>


            


         



         

            
            


  </View>  
)}


<View style={{ width: '100%', alignSelf: 'center', marginTop: '14%',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
            <View style={{width:'20%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>
            <Text style={{ fontSize: 17, fontFamily: 'urbanistbold', color: Colors.textcolor,letterSpacing:3 }}>PRICE DETAILS</Text>
            <View style={{width:'20%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>

          </View>


          

<View style={{width:'97%',height:120,marginBottom:15,backgroundColor:Colors.white,borderRadius:10,alignSelf:'center',elevation:1,marginTop:20,padding:8}}> 


   <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

          <Text style={{padding:3,fontSize:14,color:Colors.textcolor,fontFamily:'urbanistregular',letterSpacing:2}}>Item Total</Text>   
          <Text style={{padding:3,fontSize:16,color:Colors.textcolor,fontFamily:'urbanistextbold'}}>₹ 455</Text>   


 </View>
 <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

<Text style={{padding:3,fontSize:14,color:Colors.textcolor,fontFamily:'urbanistregular',letterSpacing:2}}>GST and Restaurent Charges</Text>   
<Text style={{padding:3,fontSize:16,color:Colors.textcolor,fontFamily:'urbanistextbold'}}>₹ 65</Text>   


</View>
<View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

<Text style={{padding:3,fontSize:14,color:Colors.textcolor,fontFamily:'urbanistregular',letterSpacing:2}}>Delivery partner fee</Text>   
<Text style={{padding:3,fontSize:16,color:Colors.textcolor,fontFamily:'urbanistextbold'}}>₹ 30</Text>   


</View>


<View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>

<Text style={{padding:3,fontSize:14,color:Colors.textcolor,fontFamily:'urbanistregular',letterSpacing:2}}>Platform Fee</Text>   
<Text style={{padding:3,fontSize:16,color:Colors.textcolor,fontFamily:'urbanistextbold'}}>₹ 30</Text>   


</View>
 </View>  


 <View style={{width:'95%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',alignSelf:"center"}}>

<Text style={{padding:3,fontSize:14,color:Colors.red,fontFamily:'urbanistbold',letterSpacing:2}}>GRAND TOTAL</Text>   
<Text style={{padding:3,fontSize:16,color:Colors.textcolor,fontFamily:'urbanistextrabold'}}>₹ 3000</Text>   


</View>













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

export default FoodOrderDetailScreen