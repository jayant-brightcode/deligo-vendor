import { StatusBar, StyleSheet, Text, View ,Image} from "react-native"
import Colors from "../../utils/Color";
import { useEffect ,useState} from "react";

import { useNavigation } from "@react-navigation/native";
import { getToken } from "../../utils/LocalStorage";
import { CheckRegistrationStatus } from "../groceryvenodr_api/Registration";
import DeviceInfo from 'react-native-device-info';

const SplashScreen = ()=>{

    const navigation = useNavigation()

    let token;
    useEffect(() => {
      launcher();
  }, []);
  



  const [deviceToken, setDeviceToken] = useState(null);
  const [reg_details, set_regdetails] = useState(null);

      
  useEffect(() => {
    const getDeviceId = async () => {
      try {
        // Get the unique device ID
        const uniqueId = await DeviceInfo.getUniqueId();
        console.log(uniqueId)
        
        // Store the device ID in AsyncStorage if not already stored
      
        // Set the device token state
        setDeviceToken(uniqueId);
        CheckRegStatus(uniqueId)
      } catch (error) {
        console.log('Error retrieving device ID:', error);
      }
    };

    getDeviceId();
  }, []);

  const CheckRegStatus = async (id) => {
    try {
        

     
       const response = await CheckRegistrationStatus(id);
      
       if(response.status){

        const reg_details = response.data.status

        if(token==null){
            console.log("sss",token)
            navigation.replace('LoginScreen'); // Navigate to the SignupScreen
            
     
          }else{
               console.log("ppp", reg_details)
         //    navigation.replace('ChooseVendorTypeScreen'); // Navigate to the SignupScreen
     
            if(reg_details!=null && reg_details=="Accept"){
             navigation.replace('HomeScreen'); // Navigate to the SignupScreen
     
            }else if(reg_details!=null && reg_details=="Rejected"){
             navigation.replace('AccountScreen'); // Navigate to the SignupScreen
     
            }else if(reg_details!=null && reg_details=="Pending"){
         
             navigation.replace('HomeScreen'); // Navigate to the SignupScreen
            }else{
             navigation.replace('ChooseVendorTypeScreen'); // Navigate to the SignupScreen
            }
            
           
     
          }
           
       }else{
     

    
       }
    } catch (error) {
    
        return
    }
};

    const launcher = async () => {
        token = await getToken()
    
    }


  return <View style={styles.container}>


    <StatusBar backgroundColor={Colors.dark_green}/>

    <Image style={styles.backgroundImage} source={require('../../../assets/splash.jpg')}/>


    </View>


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    centeredImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredImage: {
        width: 200,
        height: 200,
    },
});
export default SplashScreen
