import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, StatusBar, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import Colors from '../../utils/Color';

const AddFoodProductScreen = () => {
  const [productCategory, setProductCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [productDesc, setProductDesc] = useState('');
  const [gst, setGst] = useState('');
  const [brandName, setBrandName] = useState('');
  const [attributeName, setAttributeName] = useState('');
  const [selectedAttributeValues, setSelectedAttributeValues] = useState([]);

  const attributeOptions = {
    volume: ['10ml', '20ml', '30ml'],
    weight: ['1kg', '2kg', '3kg'],
  };

 

  return (
    <View style={styles.container}>

<StatusBar backgroundColor={Colors.light_green}/>

<View style={{height:'7%' ,backgroundColor:Colors.light_green}}>

  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>


    <View style={{flexDirection:'row',alignItems:'center',width:'80%',height:'100%',padding:'3'}}>



    <Image style={{width:30,height:20,marginStart:'4%',marginTop:'4%'}}  source={require('../../../assets/arrow.png')}/>

    <View style={{marginStart:'2%',marginTop:'4%',height:'58%',width:'0.5%',backgroundColor:Colors.green_light_2}}></View>
    <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.textcolor}}>Add Food Menu</Text>
    </View>
  

  </View>





</View>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginStart:16,marginEnd:16}} >
        
        <Text style={styles.helper_text}>Product Category</Text>


        <Text style={styles.picker}>Choose Category</Text>
   

        <Text style={styles.helper_text}>Product Sub Category</Text>


         <Text style={styles.picker}>Choose SubCategory</Text>


        
      
        <TextInput
          placeholder="Product Name"
          value={productName}
          onChangeText={setProductName}
          style={{backgroundColor:Colors.grayview,fontFamily:'urbanistbold',marginTop:'3%',paddingStart:10}}
        />
        
        <TextInput
          placeholder="Product Description"
          value={productDesc}
          onChangeText={setProductDesc}
          style={{backgroundColor:Colors.grayview,fontFamily:'urbanistbold',marginTop:'3%',paddingStart:10,height:120,textAlign:'left',borderWidth:1,borderStyle:'dashed'}}
        />
        
        <Text style={styles.helper_text}>GST</Text>


        <Text style={styles.picker}>Choose GST %</Text>


      

        
         <Text style={styles.helper_text}>Size Attribute</Text>


       <Text style={styles.picker}>Choose Attribute</Text>


      

       <Text style={styles.helper_text}>Attribute Name</Text>


       <Text style={styles.picker}>Choose Attribute Names</Text>

        
       
       <TextInput
          placeholder="Attribute Price"
          value={productName}
          onChangeText={setProductName}
          style={{backgroundColor:Colors.grayview,fontFamily:'urbanistbold',marginTop:'3%',paddingStart:10}}
        />
        

        <TextInput
          placeholder="Offer Price"
          value={productName}
          onChangeText={setProductName}
          style={{backgroundColor:Colors.grayview,fontFamily:'urbanistbold',marginTop:'3%',paddingStart:10}}
        />

<TextInput
          placeholder="Discount Price"
          value={productName}
          onChangeText={setProductName}
          style={{backgroundColor:Colors.grayview,fontFamily:'urbanistbold',marginTop:'3%',paddingStart:10}}
        />
       
       
<TextInput
          placeholder="Stock Quantity"
          value={productName}
          onChangeText={setProductName}
          style={{backgroundColor:Colors.grayview,fontFamily:'urbanistbold',marginTop:'3%',paddingStart:10}}
        />
       
        
      
        
   
       <TouchableOpacity style={{ width: '100%', marginTop: '3%', marginBottom: 30 }} onPress={() => {
            navigation.navigate("LeagalDocumentRegistrationScreen")
          }}>
            <Text style={{ backgroundColor: Colors.dark_blue, width: '100%', padding: 10, borderRadius: 10, textAlign: 'center', color: Colors.white }}>Upload Product</Text>
          </TouchableOpacity>

       
      </ScrollView>

   

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  input: {
    marginBottom: 16,
  },
  attributeValue: {
    marginVertical: 8,
  },
  helper_text:{
    fontFamily:'urbanistbold',
    color:Colors.dark_green,
    marginTop:'4%'
  },
  picker:{
    fontFamily:'urbanistbold',
    padding:14,
    color:Colors.white,
    backgroundColor:Colors.green_light_2,
    marginTop:'3%'
  }
});


export default AddFoodProductScreen;
