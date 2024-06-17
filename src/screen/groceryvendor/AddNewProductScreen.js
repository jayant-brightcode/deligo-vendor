import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, StatusBar, Image, Text, TextInput, TouchableOpacity ,TouchableWithoutFeedback, FlatList, ToastAndroid, ActivityIndicator} from 'react-native';
import Colors from '../../utils/Color';
import { GetCategory } from '../groceryvenodr_api/Category';
import { Remote } from '../../utils/Remote';
import { GetSubCategory } from '../groceryvenodr_api/SubCategory';
import { GetLowerCategory } from '../groceryvenodr_api/LowerCategory';
import { GetAllBrand } from '../groceryvenodr_api/brand';
import { GetCatAttributes, GetCatAttributesValues } from '../groceryvenodr_api/SizeAttribute';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { CustomToast } from "../components/CustomToast.js";
import { AddProduct } from '../groceryvenodr_api/ManageProduct.js';
import { isEmpty } from '../../utils/Validators.js';
import { GetProfileDetails } from '../groceryvenodr_api/profile.js';
import DeviceInfo from 'react-native-device-info';

const AddProductScreen = () => {

  const [productCategory, setProductCategory] = useState('');
  const [productCategoryvisible, setProductCategoryvisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [subCategory, setSubCategory] = useState('');
  const [productSubCategoryvisible, setProductSubCategoryvisible] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);


  
  const [lowerCategory, setlowerCategory] = useState('');
  const [lowerCategoryvisible, setLowerCategoryvisible] = useState(false);
  const [selectedLowerCategory, setSelectedLowerCategory] = useState(null);


  const [brands, setBrands] = useState([]);
  const [brandVisible, setbrandVisible] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);






  const [size_attribute , set_size_attribute] = useState([])
  const [size_attribute_visible , set_size_attribute_visible] = useState(false)
  const [selected_size_attribute , set_selectedsize_attribute] = useState(null)


  const [imageUri, setImageUri] = useState(null);



  const [size_attribute_value , set_size_attribute_value] = useState ([])
  const [size_attribute_value_visible , set_size_attribute_value_visible] = useState(false)
  const [selectedSizeAttributeValue, setSelectedSizeAttributeValue] = useState([]);
  const [attributesData, setAttributesData] = useState({});


  const [price, setPrice] = useState(Array(selectedSizeAttributeValue.length).fill(''));
  const [offerPrice, setOfferPrice] = useState(Array(selectedSizeAttributeValue.length).fill(''));
  const [discountPrice, setDiscountPrice] = useState(Array(selectedSizeAttributeValue.length).fill(''));
  const [stock, setStock] = useState(Array(selectedSizeAttributeValue.length).fill(''));


  const [vendor_id, setVendorID] = useState(null);
  const [deviceToken, setDeviceToken] = useState(null);


  const [toastVisible, setToastVisible] = useState(false);

  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState('');


  useEffect(() => {
    const getDeviceId = async () => {
      try {
        // Get the unique device ID
        const uniqueId = await DeviceInfo.getUniqueId();
        console.log(uniqueId)
        
        // Store the device ID in AsyncStorage if not already stored
      
        // Set the device token state
        setDeviceToken(uniqueId);
        CheckRegStatus(uniqueId);
      } catch (error) {
        console.log('Error retrieving device ID:', error);
      }
    };

    getDeviceId();
  }, []);



  const handlePriceAndStockChange = (index, field, value) => {
    switch (field) {
      case 'price':
        const newPrice = [...price];
        newPrice[index] = value;
        setPrice(newPrice);
        break;
      case 'offerPrice':
        const newOfferPrice = [...offerPrice];
        newOfferPrice[index] = value;
        setOfferPrice(newOfferPrice);
        break;
      case 'discountPrice':
        const newDiscountPrice = [...discountPrice];
        newDiscountPrice[index] = value;
        setDiscountPrice(newDiscountPrice);
        break;
      case 'stock':
        const newStock = [...stock];
        newStock[index] = value;
        setStock(newStock);
        break;
      default:
        break;
    }
  };

  const validateFields = () => {
    for (let i = 0; i < selectedSizeAttributeValue.length; i++) {
      if (!price[i] || !offerPrice[i] || !discountPrice[i] || !stock[i]) {
        ToastAndroid.showWithGravity(
          `Please fill all fields for ${selectedSizeAttributeValue[i].name}`,
          ToastAndroid.LONG,
          ToastAndroid.CENTER,
        );
        return false;
      }
    }
    return true;
  };


  const showToast = (message, type) => {
    setToastVisible(true);
    setToastMessage(message);
    setToastType(type);

};

  const handleChange = (item, field, value) => {
    setAttributesData(prev => ({
      ...prev,
      [item]: {
        ...prev[item],
        [field]: value
      }
    }));
  };

  const [loading, set_loading] = useState(false);


  const [productName, setProductName] = useState('');
  const [productDesc, setProductDesc] = useState('');
  const [gst, setGst] = useState('');
  const [brandName, setBrandName] = useState('');
  const [attributeName, setAttributeName] = useState('');
  const [selectedAttributeValues, setSelectedAttributeValues] = useState([]);


  const openGalary = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          setImageUri(response.assets[0].uri);
          console.log(response.assets[0].uri)
        }
      },
    );
  };

  useEffect(()=>{
    GetAllCategory()
    GetVendorDetails()
  },[])
 
  const GetAllCategory = async () => {
    try {
        

       set_loading(true)
       const response = await GetCategory();
      
       if(response.status){

           setProductCategory(response.categoryall_resp)
           set_loading(false)

          
           
     
          }else{
            set_loading(false)

          }
           
       
    } catch (error) {
      set_loading(false)

        return
    }
};

const GetAllSubCategory = async (cat_id) => {
  try {
      

    set_loading(true)

     const response = await GetSubCategory(cat_id);
    
     if(response.status){

         setSubCategory(response.subcategory_resp)
         set_loading(false)

     
        
         
   
        }else{
          set_loading(false)

        }
         
     
  } catch (error) {
    set_loading(false)

      return
  }
};

const GetAllLowerCategory = async (cat_id,subcat_id) => {
  try {
      console.log(cat_id,subcat_id)

    set_loading(true)

     const response = await GetLowerCategory(cat_id,subcat_id);
   
     if(response.status){

         setlowerCategory(response.lowcategory_resp)
         set_loading(false)
         

     
        
         
   
        }else{
          set_loading(false)

        }
         
     
  } catch (error) {
    set_loading(false)

      return
  }
};


const GetAllBrands = async (cat_id) => {
  try {

    set_loading(true)

     const response = await GetAllBrand(cat_id);
   
     if(response.status){

         setBrands(response.subcategory_resp)
         set_loading(false)
         

     
        
         
   
        }else{
          set_loading(false)

        }
         
     
  } catch (error) {
    set_loading(false)

      return
  }
};


const GetSizeAttributes = async (cat_id) => {
  try {

    set_loading(true)

     const response = await GetCatAttributes(cat_id);
   
     if(response.status){

         set_size_attribute(response.cat_attribute)
         set_loading(false)
         

     
        
         
   
        }else{
          set_loading(false)

        }
         
     
  } catch (error) {
    set_loading(false)

      return
  }
};


const GetSizeAttributeValues = async (attr_id) => {
  try {

    set_loading(true)

     const response = await GetCatAttributesValues(attr_id);
   
     if(response.status){



          set_size_attribute_value(response.cat_attribute)
       
         set_loading(false)
         

     
        
         
   
        }else{
          set_loading(false)

        }
         
     
  } catch (error) {
    set_loading(false)

      return
  }
};

const AddNewProduct = async () => {
  try {

    set_loading(true)


    if(selectedCategory==null){
      ToastAndroid.showWithGravity(
        'Please Choose Category First',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
      set_loading(false)
      return
     }

     if(selectedSubCategory==null){
      ToastAndroid.showWithGravity(
        'Please Choose SubCategory First',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
      set_loading(false)

      return
     }

     if(isEmpty(productName)){
      ToastAndroid.showWithGravity(
        'Please Enter Product Name',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
      set_loading(false)

      return
     }

     if(isEmpty(productDesc)){
      ToastAndroid.showWithGravity(
        'Please Enter Product Description',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
      set_loading(false)

      return
     }

     if(isEmpty(gst)){
      ToastAndroid.showWithGravity(
        'Please Enter GST %',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
      set_loading(false)

      return
     }


     if(selectedBrand==null){
      ToastAndroid.showWithGravity(
        'Please choose Brand Name',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
      set_loading(false)

      return
     }

     if(selected_size_attribute==null){
      ToastAndroid.showWithGravity(
        'Please choose Atrribute',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
      set_loading(false)

      return
     }

     if(selectedSizeAttributeValue==null || selectedSizeAttributeValue.length==0){
      ToastAndroid.showWithGravity(
        'Please choose Atrribute Value',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
      set_loading(false)

      return
     }

     if(imageUri==null){
      ToastAndroid.showWithGravity(
        'Please choose Product main image',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
      set_loading(false)

      return
     }


     if(!validateFields()){
      // ToastAndroid.showWithGravity(
      //   'Please fill all the fields',
      //   ToastAndroid.LONG,
      //   ToastAndroid.CENTER,
      // );
      set_loading(false)

      return
     }


     console.log(attributesData)


     const attr_values = []
     const price_var = [1]

     for (let index = 0; index < selectedSizeAttributeValue.length; index++) {
           attr_values.push(selectedSizeAttributeValue[index].id)
      
     }


    //  if()

     const response = await AddProduct(vendor_id,productName,selectedCategory.id,selectedSubCategory.subcat_id,selectedLowerCategory.lowcat_id,gst,selectedBrand.id,productDesc,selected_size_attribute.id,attr_values,price_var,attr_values,price,offerPrice,discountPrice,stock,1,'product',1)

    // const response = await AddProduct(vendor_id,productName,selectedCategory.id,
      selectedSubCategory.subcat_id,
      selectedLowerCategory.lowcat_id
      ,gst,selectedBrand.id
      ,productDesc,attr_values,price_var,price,offerPrice,discountPrice,stock,1,'product',1

 //   );
   
     if(response.status){



      ToastAndroid.showWithGravity(
        response.message,
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
         set_loading(false)
         

     
        
         
   
        }else{
          ToastAndroid.showWithGravity(
            response.message,
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
          );
          set_loading(false)

        }
         
     
  } catch (error) {
    set_loading(false)
    console.log(error)

      return
  }
};


const GetVendorDetails = async () => {
  try {

    set_loading(true)

     const response = await GetProfileDetails(deviceToken);
   
     if(response.status){



          setVendorID(response.data.id)
       
         set_loading(false)
         

     
        
         
   
        }else{
          set_loading(false)

        }
         
     
  } catch (error) {
    set_loading(false)

      return
  }
};


const renderCategories = ({item})=>{
       
  return(
    <TouchableWithoutFeedback onPress={()=>{
     setSelectedCategory(item)
     setProductCategoryvisible(false)

    
    }}>
          <View style={{width:'90%',height:100,marginEnd:10,marginStart:10,borderTopColor:Colors.gray,borderTopWidth:0.7,marginBottom:15,backgroundColor:Colors.white,borderRadius:10,elevation:1,alignSelf:'center'}}>


            <View style={{width:'100%',flexDirection:'row',alignItems:'center'}}>
              <View>
              <Image style={{ width: 100, height: 100,borderTopLeftRadius:10,borderBottomLeftRadius:10,backgroundColor:'rgba(0,0,0,0.5)' }} source={{uri:Remote.IMAGE_URL+item.image_path}}></Image>

              </View>
        
               <View style={{marginStart:'4%'}}>
  
            

               <Text numberOfLines={2} style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:15,width:'100%'}}>{item.name}</Text>
           
            
                  </View>
               </View>
          </View>

        

    </TouchableWithoutFeedback>

  )
}

const renderSubCategories = ({item})=>{
       
  return(
    <TouchableWithoutFeedback onPress={()=>{
     setSelectedSubCategory(item)
     setProductSubCategoryvisible(false)

    
    }}>
          <View style={{width:'90%',height:100,marginEnd:10,marginStart:10,borderTopColor:Colors.gray,borderTopWidth:0.7,marginBottom:15,backgroundColor:Colors.white,borderRadius:10,elevation:1,alignSelf:'center'}}>


            <View style={{width:'100%',flexDirection:'row',alignItems:'center'}}>
              <View>
              <Image style={{ width: 100, height: 100,borderTopLeftRadius:10,borderBottomLeftRadius:10,backgroundColor:'rgba(0,0,0,0.5)' }} source={{uri:Remote.IMAGE_URL+item.image_path}}></Image>

              </View>
        
               <View style={{marginStart:'4%'}}>
  
            

               <Text numberOfLines={2} style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:15,width:'100%'}}>{item.name}</Text>
           
            
                  </View>
               </View>
          </View>

        

    </TouchableWithoutFeedback>

  )
}


const renderLowerCategories = ({item})=>{
       
  return(
    <TouchableWithoutFeedback onPress={()=>{
     setSelectedLowerCategory(item)
     setLowerCategoryvisible(false)

    
    }}>
          <View style={{width:'90%',height:100,marginEnd:10,marginStart:10,borderTopColor:Colors.gray,borderTopWidth:0.7,marginBottom:15,backgroundColor:Colors.white,borderRadius:10,elevation:1,alignSelf:'center'}}>


            <View style={{width:'100%',flexDirection:'row',alignItems:'center'}}>
              <View>
              <Image style={{ width: 100, height: 100,borderTopLeftRadius:10,borderBottomLeftRadius:10,backgroundColor:'rgba(0,0,0,0.5)' }} source={{uri:Remote.IMAGE_URL+item.image_path}}></Image>

              </View>
        
               <View style={{marginStart:'4%'}}>
  
            

               <Text numberOfLines={2} style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:15,width:'100%'}}>{item.name}</Text>
           
            
                  </View>
               </View>
          </View>

        

    </TouchableWithoutFeedback>

  )
}


const renderSizeAttrubute = ({item})=>{
       
  return(
    <TouchableWithoutFeedback onPress={()=>{
  set_selectedsize_attribute(item)
     set_size_attribute_visible(false)

    console.log(typeof(item)) 

    
    }}>
          <View style={{width:'90%',height:50,marginEnd:10,marginStart:10,borderTopColor:Colors.gray,borderTopWidth:0.7,marginBottom:15,backgroundColor:Colors.white,borderRadius:10,elevation:1,alignSelf:'center'}}>


            <View style={{width:'100%',flexDirection:'row',alignItems:'center'}}>
            
               <View style={{marginStart:'4%'}}>
  
            

               <Text numberOfLines={2} style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:15,width:'100%',marginTop:13}}>{item.name}</Text>
           
            
                  </View>
               </View>
          </View>

        

    </TouchableWithoutFeedback>

  )
}

const renderSizeAttrubuteValue = ({ item }) => {
  const isSelected = selectedSizeAttributeValue.some(selectedItem => selectedItem.id === item.id);

  return (
    <TouchableWithoutFeedback onPress={() => {
      if (isSelected) {
        setSelectedSizeAttributeValue(prev => prev.filter(i => i.id !== item.id));
      } else {
        setSelectedSizeAttributeValue(prev => [...prev, item]);
      }
    }}>
      <View style={{
        width: '90%',
        height: 50,
        marginEnd: 10,
        marginStart: 10,
        borderTopColor: Colors.gray,
        borderTopWidth: 0.7,
        marginBottom: 15,
        backgroundColor: isSelected ? Colors.gray : Colors.white,
        borderRadius: 10,
        elevation: 1,
        alignSelf: 'center'
      }}>
        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ marginStart: '4%' }}>
            <Text numberOfLines={2} style={{
              color: Colors.textcolor,
              fontFamily: 'urbanistbold',
              fontSize: 15,
              width: '100%',
              marginTop: 13
            }}>{item.name}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};



const renderBrands = ({item})=>{
       
  return(
    <TouchableWithoutFeedback onPress={()=>{
     setSelectedBrand(item)
     setbrandVisible(false)

    
    }}>
          <View style={{width:'90%',height:100,marginEnd:10,marginStart:10,borderTopColor:Colors.gray,borderTopWidth:0.7,marginBottom:15,backgroundColor:Colors.white,borderRadius:10,elevation:1,alignSelf:'center'}}>


            <View style={{width:'100%',flexDirection:'row',alignItems:'center'}}>
              <View>
              <Image style={{ width: 100, height: 100,borderTopLeftRadius:10,borderBottomLeftRadius:10,backgroundColor:'rgba(0,0,0,0.5)' }} source={{uri:Remote.IMAGE_URL+item.image_path}}></Image>

              </View>
        
               <View style={{marginStart:'4%'}}>
  
            

               <Text numberOfLines={2} style={{color:Colors.textcolor,fontFamily:'urbanistbold',fontSize:15,width:'100%'}}>{item.name}</Text>
           
            
                  </View>
               </View>
          </View>

        

    </TouchableWithoutFeedback>

  )
}



 // Helper function to group items into pairs
 const groupIntoPairs = (items) => {
  const pairs = [];
  for (let i = 0; i < items.length; i += 2) {
    pairs.push(items.slice(i, i + 2));
  }
  return pairs;
};
const handleRemoveItem = (item) => {
  setSelectedSizeAttributeValue(prev => prev.filter(i => i !== item));
};
const renderSelectedItems = () => {
  const pairs = groupIntoPairs(selectedSizeAttributeValue);
  return pairs.map((pair, index) => (
    <View key={index} style={{ flexDirection: 'row', marginTop: 2 }}>
      {pair.map(item => (
        <View key={item.id} style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: 100,
          marginStart: 4,
          marginBottom: 4,
          justifyContent: 'space-between',
          padding: 6,
          borderRadius: 8,
          backgroundColor: Colors.red
        }}>
          <Text style={{ fontFamily: 'urbanistmedium', color: Colors.white }}>{item.name}</Text>
          <TouchableOpacity onPress={() => handleRemoveItem(item)}>
            <Image
              style={{ width: 12, height: 12, marginStart: '4%', marginTop: '1%', marginEnd: 10, tintColor: Colors.white }}
              source={require('../../../assets/close.png')}
            />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  ));
};


  return (
    <View style={styles.container}>

<StatusBar backgroundColor={Colors.light_green}/>

<View style={{height:'7%' ,backgroundColor:Colors.light_green}}>

  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>


    <View style={{flexDirection:'row',alignItems:'center',width:'80%',height:'100%',padding:'3'}}>



    <Image style={{width:30,height:20,marginStart:'4%',marginTop:'4%'}}  source={require('../../../assets/arrow.png')}/>

    <View style={{marginStart:'2%',marginTop:'4%',height:'58%',width:'0.5%',backgroundColor:Colors.green_light_2}}></View>
    <Text numberOfLines={1} style={{marginStart:'2%',marginTop:'3%',fontFamily:'urbanistmedium',marginStart:'5%',fontSize:16,color:Colors.textcolor}}>Add New Product</Text>
    </View>
  
      {productCategoryvisible && (
        <TouchableWithoutFeedback onPress={()=>{
            setProductCategoryvisible(false)
        }}>
           <Image style={{width:20,height:20,marginStart:'4%',marginTop:'4%',marginEnd:20}}  source={require('../../../assets/close.png')}/>

        </TouchableWithoutFeedback>
      )}

    {productSubCategoryvisible && (
        <TouchableWithoutFeedback onPress={()=>{
            setProductSubCategoryvisible(false)
        }}>
           <Image style={{width:20,height:20,marginStart:'4%',marginTop:'4%',marginEnd:20}}  source={require('../../../assets/close.png')}/>

        </TouchableWithoutFeedback>
      )}


{lowerCategoryvisible && (
        <TouchableWithoutFeedback onPress={()=>{
            setLowerCategoryvisible(false)
        }}>
           <Image style={{width:20,height:20,marginStart:'4%',marginTop:'4%',marginEnd:20}}  source={require('../../../assets/close.png')}/>

        </TouchableWithoutFeedback>
      )}

{size_attribute_visible && (
        <TouchableWithoutFeedback onPress={()=>{
            set_size_attribute_visible(false)
        }}>
           <Image style={{width:20,height:20,marginStart:'4%',marginTop:'4%',marginEnd:20}}  source={require('../../../assets/close.png')}/>

        </TouchableWithoutFeedback>
      )}

      
{size_attribute_value_visible && (
        <TouchableWithoutFeedback onPress={()=>{
            set_size_attribute_value_visible(false)
        }}>
           <Image style={{width:20,height:20,marginStart:'4%',marginTop:'4%',marginEnd:20}}  source={require('../../../assets/close.png')}/>

        </TouchableWithoutFeedback>
      )}
  </View>





</View>
      <ScrollView showsVerticalScrollIndicator={false} style={{marginStart:16,marginEnd:16}} >
        

        
        <Text style={styles.helper_text}>Product Category</Text>

  
       
        <TouchableWithoutFeedback onPress={()=>{
          
           setProductCategoryvisible(true)
           
        }}>
        <Text style={styles.picker}>{selectedCategory==null ? 'Choose Category' : selectedCategory.name}</Text>
        </TouchableWithoutFeedback>

        <Text style={styles.helper_text}>Product Sub Category</Text>


        <TouchableWithoutFeedback onPress={()=>{
          
           if(selectedCategory!=null){
            setProductSubCategoryvisible(true)
            GetAllSubCategory(selectedCategory.id)
           }else{
             ToastAndroid.showWithGravity(
              'Please Choose Category First',
              ToastAndroid.LONG,
              ToastAndroid.CENTER,
            );
           }
          
       }}>
        <Text style={styles.picker}>{selectedSubCategory==null ? 'Choose SubCategory' : selectedSubCategory.name}</Text>

  </TouchableWithoutFeedback>
        

  <Text style={styles.helper_text}>Product Lower Category</Text>


<TouchableWithoutFeedback onPress={()=>{
  
   if(selectedCategory!=null && selectedSubCategory!=null){
    setLowerCategoryvisible(true)
    GetAllLowerCategory(selectedCategory.id,selectedSubCategory.subcat_id)
  
   }else{
     ToastAndroid.showWithGravity(
      'Please Choose Upper Categories First',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
   }
  
}}>
<Text style={styles.picker}>{selectedLowerCategory==null ? 'Choose Lower Category' : selectedLowerCategory.name}</Text>

</TouchableWithoutFeedback>

      
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
        
       
        <TextInput
          placeholder="Enter GST%"
          value={gst}
          keyboardType='numeric'
          onChangeText={setGst}
          style={{backgroundColor:Colors.grayview,fontFamily:'urbanistbold',marginTop:'3%',paddingStart:10}}
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
PRODUCT IMAGE (UPLOAD PHOTO)

</Text>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>


   <TouchableWithoutFeedback onPress={()=>{
          openGalary()
   }}>


    <Image
          style={{width: '100%', height: 130, resizeMode: 'center',borderWidth:1,borderRadius:10,borderColor:Colors.gray}}
          source={require('../../../assets/chooseimage.png')}></Image>


          </TouchableWithoutFeedback>


      

            </View>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
     


    

            </View>

   
</View>


</View>


{imageUri !=null && (
  <View>
  <Image style={{width:'100%',marginTop:20,height:300,resizeMode:'contain'}} source={{uri:imageUri}}/>

</View>
)}

        <Text style={styles.helper_text}>Brand Name</Text>

        <TouchableWithoutFeedback onPress={()=>{
          
          if(selectedCategory!=null){
           setbrandVisible(true)
           GetAllBrands(selectedCategory.id)
          }else{
            ToastAndroid.showWithGravity(
             'Please Choose Category First',
             ToastAndroid.LONG,
             ToastAndroid.CENTER,
           );
          }
         
      }}>
         <Text style={styles.picker}>{selectedBrand==null?'Choose Brand Name' : selectedBrand.name}</Text>

        </TouchableWithoutFeedback>

        
         <Text style={styles.helper_text}>Size and Values</Text>


         <View style={{width:'100%',alignSelf:'center',alignItems:'center',justifyContent:"space-between",flexDirection:'row'}}>
         <TouchableWithoutFeedback onPress={()=>{
  

  if(selectedCategory!=null){
   set_size_attribute_visible(true)
    GetSizeAttributes(selectedCategory.id)
 
  }else{
    ToastAndroid.showWithGravity(
     'Please Choose Category First',
     ToastAndroid.LONG,
     ToastAndroid.CENTER,
   );
  }
 
}}>
         <Text style={styles.picker}>{selected_size_attribute==null?"Attribute Size":selected_size_attribute.name}</Text></TouchableWithoutFeedback>

          <View style={{borderBottomColor:Colors.black,borderBottomWidth:1,width:'60%'}}>
                
                
                
<TouchableWithoutFeedback onPress={()=>{
  
  if(selected_size_attribute!=null){
    GetSizeAttributeValues(selected_size_attribute.id)
   set_size_attribute_value_visible(true)
   
 
  }else{
    ToastAndroid.showWithGravity(
     'Please Choose Size Attribute First',
     ToastAndroid.LONG,
     ToastAndroid.CENTER,
   );
  }
 
}}>
                <Text>Choose Attribute Name</Text></TouchableWithoutFeedback>
           
                {renderSelectedItems()}

                
               
          </View>

         </View>




      

                {/* Render input fields for selected attributes */}
                {selectedSizeAttributeValue.map((item, index) => (
        <View key={item.id} style={{ marginTop: 20 }}>
          <Text style={styles.helper_text}>Manage Price and Stock for {item.name}</Text>

          <TextInput
            placeholder="Attribute Price"
            value={price[index]}
            keyboardType='number-pad'
            onChangeText={(value) => handlePriceAndStockChange(index, 'price', value)}
            style={{ backgroundColor: Colors.grayview, fontFamily: 'urbanistbold', marginTop: '3%', paddingStart: 10 }}
          />

          <TextInput
            placeholder="Offer Price"
            keyboardType='number-pad'

            value={offerPrice[index]}
            onChangeText={(value) => handlePriceAndStockChange(index, 'offerPrice', value)}
            style={{ backgroundColor: Colors.grayview, fontFamily: 'urbanistbold', marginTop: '3%', paddingStart: 10 }}
          />

          <TextInput
            placeholder="Discount Price"
            keyboardType='number-pad'

            value={discountPrice[index]}
            onChangeText={(value) => handlePriceAndStockChange(index, 'discountPrice', value)}
            style={{ backgroundColor: Colors.grayview, fontFamily: 'urbanistbold', marginTop: '3%', paddingStart: 10 }}
          />

          <TextInput
            placeholder="Stock Quantity"
            keyboardType='number-pad'

            value={stock[index]}
            onChangeText={(value) => handlePriceAndStockChange(index, 'stock', value)}
            style={{ backgroundColor: Colors.grayview, fontFamily: 'urbanistbold', marginTop: '3%', paddingStart: 10 }}
          />
        </View>
      ))}



        
      
        
   
       <TouchableOpacity style={{ width: '100%', marginTop: '3%', marginBottom: 30 }} onPress={() => {
             AddNewProduct()
          }}>
            <Text style={{ backgroundColor: Colors.dark_blue, width: '100%', padding: 10, borderRadius: 10, textAlign: 'center', color: Colors.white }}>Upload Product</Text>
          </TouchableOpacity>

       
      </ScrollView>


      {productCategoryvisible && (
    
         <View style={{position:'absolute',flex:1,width:'100%',backgroundColor:Colors.white,height:'100%',top:60}}>
            
            <View style={{ width: '95%', alignSelf: 'center', marginTop: '4%',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
            <View style={{width:'20%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>
            <Text style={{ fontSize: 17, fontFamily: 'urbanistbold', color: Colors.textcolor,letterSpacing:3 }}>CHOOSE CATEGORY</Text>
            <View style={{width:'20%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>

          </View>
          <View style={{ marginTop: '5%' }}>
             <FlatList
            data={productCategory}
            renderItem={renderCategories}
            keyExtractor={(item) => item.id}
              
          
          />
          </View>


          </View>



      )}


{productSubCategoryvisible && (
    
    <View style={{position:'absolute',flex:1,width:'100%',backgroundColor:Colors.white,height:'100%',top:60}}>
       
       <View style={{ width: '95%', alignSelf: 'center', marginTop: '4%',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
       <View style={{width:'20%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>
       <Text style={{ fontSize: 17, fontFamily: 'urbanistbold', color: Colors.textcolor,letterSpacing:3 }}>CHOOSE SUBCATEGORY</Text>
       <View style={{width:'20%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>

     </View>
     <View style={{ marginTop: '5%' }}>
        <FlatList
       data={subCategory}
       renderItem={renderSubCategories}
       keyExtractor={(item) => item.subcat_id}
         
     
     />
     </View>


     </View>



 )}

{lowerCategoryvisible && (
    
    <View style={{position:'absolute',flex:1,width:'100%',backgroundColor:Colors.white,height:'100%',top:60}}>
       
       <View style={{ width: '95%', alignSelf: 'center', marginTop: '4%',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
       <View style={{width:'10%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>
       <Text style={{ fontSize: 17, fontFamily: 'urbanistbold', color: Colors.textcolor,letterSpacing:3 }}>CHOOSE LOWERCATEGORY</Text>
       <View style={{width:'10%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>

     </View>
     <View style={{ marginTop: '5%' }}>
        <FlatList
       data={lowerCategory}
       renderItem={renderLowerCategories}
       keyExtractor={(item) => item.lowcat_id}
         
     
     />
     </View>


     </View>



 )}

{size_attribute_visible && (
    
    <View style={{position:'absolute',flex:1,width:'100%',backgroundColor:Colors.white,height:'100%',top:60}}>
       
       <View style={{ width: '95%', alignSelf: 'center', marginTop: '4%',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
       <View style={{width:'10%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>
       <Text style={{ fontSize: 17, fontFamily: 'urbanistbold', color: Colors.textcolor,letterSpacing:3 }}>CHOOSE ATTRIBUTE</Text>
       <View style={{width:'10%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>

     </View>
     <View style={{ marginTop: '5%' }}>
        <FlatList
       data={size_attribute}
       renderItem={renderSizeAttrubute}
       keyExtractor={(item) => item.id}
         
     
     />
     </View>


     </View>



 )}


{size_attribute_value_visible && (
    
    <View style={{position:'absolute',flex:1,width:'100%',backgroundColor:Colors.white,height:'100%',top:60}}>
       
       <View style={{ width: '95%', alignSelf: 'center', marginTop: '4%',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
       <View style={{width:'10%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>
       <Text style={{ fontSize: 17, fontFamily: 'urbanistbold', color: Colors.textcolor,letterSpacing:3 }}>ATTRIBUTE NAME</Text>
       <View style={{width:'10%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>

     </View>
     <View style={{ marginTop: '5%' }}>
        <FlatList
       data={size_attribute_value}
       renderItem={renderSizeAttrubuteValue}
       keyExtractor={(item) => item.id}
         
     
     />
     </View>


     </View>



 )}


{brandVisible && (
    
    <View style={{position:'absolute',flex:1,width:'100%',backgroundColor:Colors.white,height:'100%',top:60}}>
       
       <View style={{ width: '95%', alignSelf: 'center', marginTop: '4%',flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>
       <View style={{width:'20%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>
       <Text style={{ fontSize: 17, fontFamily: 'urbanistbold', color: Colors.textcolor,letterSpacing:3 }}>CHOOSE BRAND</Text>
       <View style={{width:'20%',height:1,borderTopColor:Colors.dark_gray,borderTopWidth:2,borderStyle:"dotted"}}></View>

     </View>
     <View style={{ marginTop: '5%' }}>
        <FlatList
       data={brands}
       renderItem={renderBrands}
       keyExtractor={(item) => item.id}
         
     
     />
     </View>


     </View>



 )}


      {loading && ( 
        <ActivityIndicator style={{position:'absolute',alignSelf:'center',justifyContent:'center',top:'50%'}} size={30} color={Colors.black}/>
   
      )}

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


export default AddProductScreen;
