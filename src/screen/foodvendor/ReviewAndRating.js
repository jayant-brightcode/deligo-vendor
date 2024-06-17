import { StatusBar, StyleSheet, View,Image, Text, TextInput, TouchableOpacity ,FlatList,ScrollView,Dimensions, TouchableWithoutFeedback} from "react-native"
import Colors from "../../utils/Color";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";



const FoodReviewAndRatingScreen = () =>{
    const navigation = useNavigation()

    const RatingList = [
      { id: 1, title: 'Snacks',image:require('../../../assets/snacks.png') },
      { id: 2, title: 'Makeup',image:require('../../../assets/makeup.png') },
      { id: 3, title: 'Ice-Creams',image:require('../../../assets/ice.png') },
      { id: 4, title: 'Fruits',image:require('../../../assets/fruit.png')},
      // Add more data items as needed
    ];

     
      const [selectedPackSize, setSelectedPackSize] = useState(null);

      const packSizes = [
        { id: 1, size: 'Small' },
        { id: 2, size: 'Medium' },
        { id: 3, size: 'Large' },
      ];
    
      useEffect(() => {
        // Fetch or set pack sizes data
      
       
    
        // Select the first pack size by default
        setSelectedPackSize(packSizes[0]?.id);
      }, []);

 
      const renderRating = ({item})=>{
       
        return(
          <TouchableOpacity onPress={()=>{
              console.log(item)
      
          }}>
                <View style={{width:'100%',marginBottom:5,borderBottomColor:Colors.grayview,borderBottomWidth:1,marginBottom:13}}>
               
                <View style={{flexDirection:'row',alignItems:'center',padding:3,backgroundColor:Colors.light_green,justifyContent:'center',width:40}}>
                    <Image style={{width:10,height:10,marginStart:'4%',marginTop:'2%',marginEnd:'4%',tintColor:Colors.dark_green}}  source={require('../../../assets/star.png')}/>
      
                   <Text numColumns={1} style={{color:Colors.dark_green,fontFamily:'urbanistbold',fontSize:13,marginStart:3}}>4.5</Text>
      
                </View>
                <Text numberOfLines={4} style={{fontFamily:'urbanistregular',fontSize:12,marginTop:'3%',marginEnd:'4%',marginBottom:10}}>Nice Product by Good day as always .Nice Product by Good day as alwaysNice Product by Good day as always Nice Product by Good day as always </Text>
                
                <Text numberOfLines={4} style={{fontFamily:'urbanistbold',fontSize:12,marginTop:'3%',marginEnd:'4%',marginBottom:10}}>Mohan Roy (22 sep 2023) </Text>
      
                </View>
      
              
      
          </TouchableOpacity>
      
        )
      }







    return <View style={style.container}>

        <StatusBar backgroundColor={Colors.light_green}/>

        <View style={{height:'7%' ,backgroundColor:Colors.light_green}}>

          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>


            <View style={{flexDirection:'row',alignItems:'center',width:'80%',height:'100%',padding:'3'}}>

      

            <Image style={{width:30,height:20,marginStart:'4%',marginTop:'4%'}}  source={require('../../../assets/arrow.png')}/>

            <View style={{marginStart:'2%',marginTop:'4%',height:'58%',width:'0.5%',backgroundColor:Colors.green_light_2}}></View>
            <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.textcolor}}>Rating and Reviews</Text>
            </View>
          
           

          </View>


      


        </View>

     
<View style={{marginStart:'2%',marginTop:'5%',flex:1}}>
<FlatList
data={RatingList}
renderItem={renderRating}
style={{flex:1}}
keyExtractor={(item) => item.id.toString()}

showsHorizontalScrollIndicator={false}
/>
</View>
       
      

       

  
    </View>
}



const style = StyleSheet.create({
   
    container:{
        flex:1,
        backgroundColor:Colors.white
    }


})

export default FoodReviewAndRatingScreen