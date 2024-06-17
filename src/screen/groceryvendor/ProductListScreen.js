import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView, TouchableWithoutFeedback, Animated, Easing, Dimensions, PermissionsAndroid, Platform} from "react-native"
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import SwipeButton from 'rn-swipe-button';

import Colors from "../../utils/Color";
import { RadioButton, Switch } from "react-native-paper";

const ProductListScreen = () => {
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
        { id: 2, title: 'Ashirwad Aata',image:require('../../../assets/item3.jpg') },
        { id: 3, title: 'Ice-Cream',image:require('../../../assets/item3.jpg') },
        { id: 4, title: 'Daal',image:require('../../../assets/item3.jpg')},
        { id: 5, title: 'Rice',image:require('../../../assets/item3.jpg') },
        { id: 6, title: 'Mutton',image:require('../../../assets/item3.jpg') },
   
        // Add more data items as needed
      ];
         

    

  



    

  







const renderProducts = ({item})=>{
       
  return(
    <TouchableWithoutFeedback onPress={()=>{


    }}>
          <View style={{width:'90%',height:160,marginEnd:10,marginStart:10,borderTopColor:Colors.gray,borderTopWidth:0.7,marginBottom:15,backgroundColor:Colors.white,borderRadius:10,elevation:1,alignSelf:'center'}}>


            <View style={{width:'100%',flexDirection:'row'}}>
            <Image style={{ width: 100, height: 100,borderTopLeftRadius:10,borderBottomLeftRadius:10,backgroundColor:'rgba(0,0,0,0.5)' }} source={item.image}></Image>

            <View style={{marginTop:'3%',marginStart:'4%'}}>
  

             <Text numberOfLines={2} style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:15,width:'100%'}}>{item.title}</Text>
             <Text numColumns={2} style={{color:Colors.red,fontFamily:'urbanistmedium',fontSize:13}}>Netsle</Text>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:13}}>Vegetable</Text>
             <View style={{flexDirection:'row',alignItems:'center',marginTop:10,alignItems:'center'}}>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:14,marginStart:3}}>Stock -</Text>
             <Image style={{ width: 16, height: 16,marginStart:4}} source={require('../../../assets/clock.png')}></Image>
             <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:14,marginStart:3}}>20</Text>
          
             </View>
          
          
             </View>

            
        

            </View>
            <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text numColumns={2} style={{color:Colors.navcolor,fontFamily:'urbanistmedium',fontSize:14,marginStart:3,marginTop:15}}>Online Status</Text>

            <Switch style={{alignSelf:'flex-end'}}></Switch>
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
  <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.textcolor}}>Product List</Text>
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
            <Text style={{ fontSize: 17, fontFamily: 'urbanistbold', color: Colors.textcolor,letterSpacing:3 }}>MANAGE PRODUCTS</Text>
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

export default ProductListScreen