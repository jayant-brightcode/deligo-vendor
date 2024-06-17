import { StatusBar, StyleSheet, View, Image, Text, TextInput, TouchableOpacity, FlatList, ScrollView, Dimensions, TouchableWithoutFeedback, SafeAreaView } from "react-native"
import Colors from "../../utils/Color"
import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useRef, useState } from "react";





const ProductInformationRegistrationScreen = () => {
  const navigation = useNavigation()



  //food , grocery
  const [selected_item, set_selected_item] = useState('food')

  const [products, setProducts] = useState([
    { id: 1, name: '', description: '', price: '', image: null },
  ]);

  const addProduct = () => {
    const newProduct = { id: products.length + 1, name: '', description: '', price: '', image: null };
    setProducts([...products, newProduct]);
  };

  const handleProductNameChange = (id, text) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, name: text } : product
    );
    setProducts(updatedProducts);
  };

  const handleProductDescChange = (id, text) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, description: text } : product
    );
    setProducts(updatedProducts);
  };

  const handleProductPriceChange = (id, text) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, price: text } : product
    );
    setProducts(updatedProducts);
  };

  const handleImageUpload = (id, image) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, image } : product
    );
    setProducts(updatedProducts);
  };

  const removeProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return <SafeAreaView style={styles.container}>

    <StatusBar backgroundColor={Colors.black} />


    <View style={{ alignItems: 'center', flex: 1 }}>

      <Image style={{ width: '40%', height: 60, marginTop: '10%' }} source={require('../../../assets/logotwo.png')} />
      <Text style={{ color: Colors.textcolor, fontFamily: 'urbanistbold', fontSize: 13, letterSpacing: 1 }}>APP FOR VENDORS</Text>


      <Text numberOfLines={1} style={{ color: Colors.textcolor, fontFamily: 'urbanistbold', fontSize: 18, letterSpacing: 1, marginTop: '10%', textAlign: 'center', borderBottomWidth: 1 }}>STEP - 3 : PRODUCT INFORMATION</Text>


      <ScrollView showsVerticalScrollIndicator={false} style={{ width: '90%', alignSelf: 'center', marginTop: '4%' }}>
        <View>
          <Text style={styles.label}>Product Categories (separated by comma):</Text>
          <TextInput
            style={styles.input}
            placeholder="Eg. fruits , vegetables , beverage"
            placeholderTextColor="#999"
          />
               <Text style={styles.label}>Add Sample Products:</Text>
               <Text style={{fontFamily:'urbanistregular',color:Colors.red}}>* This product information is only for verification purpose</Text>
               {products.map((product) => (
        <View key={product.id} style={styles.productContainer}>
          <TouchableOpacity style={{alignSelf:'flex-end'}} onPress={() => removeProduct(product.id)}>
            <Image style={{width:40,height:40}} source={require('../../../assets/remove.png')}/>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Product Name"
            value={product.name}
            onChangeText={(text) => handleProductNameChange(product.id, text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Product Description"
            value={product.description}
            onChangeText={(text) => handleProductDescChange(product.id, text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Product Price"
            value={product.price}
            onChangeText={(text) => handleProductPriceChange(product.id, text)}
            keyboardType="numeric"
          />
          {/* Add image upload functionality here */}
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
Product Image

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

        </View>
      ))}
          <TouchableOpacity style={styles.addButton} onPress={addProduct}>
        <Text style={styles.addButtonText}>Add More</Text>
      </TouchableOpacity>

          <TouchableOpacity style={{ width: '100%', marginTop: '3%', marginBottom: 30 }} onPress={() => {
            navigation.navigate("VendorShopPhotoRegistrationScreen")
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
    height: 100,
    borderColor: Colors.dark_gray,
    borderWidth: 1,
    marginTop: 8,

    borderRadius: 10,

    marginBottom: 10,
    paddingHorizontal: 10,
  },
  productContainer: {
    marginBottom: 20,
  },

  addButton: {
    backgroundColor: Colors.dark_gray,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop:8
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },


})

export default ProductInformationRegistrationScreen