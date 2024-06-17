import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator ,TransitionSpecs } from '@react-navigation/native-stack';

import NavigationService from './NavigationService';
import LoginScreen from '../screen/common/LoginScreen';
import SplashScreen from '../screen/common/SplashScreen';
import ChooseVendorTypeScreen from '../screen/common/ChooseVendorType';
import RegistrationInformationScreen from '../screen/groceryvendor/RegistrationInformation';
import BasicDetailRegistration from '../screen/groceryvendor/BasicDetailsRegistration';
import LeagalDocumentRegistrationScreen from '../screen/groceryvendor/LegalDoumentRegistration';
import ProductInformationRegistrationScreen from '../screen/groceryvendor/ProductInformationRegistration';
import VendorShopPhotoRegistrationScreen from '../screen/groceryvendor/VendorShopPhotoRegistration';
import FoodRegistrationInformationScreen from '../screen/foodvendor/FoodRegistrationInformation';
import FoodBasicDetailRegistration from '../screen/foodvendor/FoodBasicDetailsRegistration';
import FoodLeagalDocumentRegistrationScreen from '../screen/foodvendor/FoodLegalDoumentRegistration';
import FoodProductInformationRegistrationScreen from '../screen/foodvendor/FoodProductInformationRegistration';
import FoodVendorShopPhotoRegistrationScreen from '../screen/foodvendor/FoodVendorShopPhotoRegistration';
import HomeScreen from '../screen/groceryvendor/HomeScreen';

import ShopSettingScreen from '../screen/groceryvendor/ShopSettingScreen';
import AddProductScreen from '../screen/groceryvendor/AddNewProductScreen';
import AccountScreen from '../screen/groceryvendor/AccountScreen';
import ProductListScreen from '../screen/groceryvendor/ProductListScreen';
import ConfirmedOrderScreen from '../screen/groceryvendor/ConfirmOrderScreen';
import CancelledOrderScreen from '../screen/groceryvendor/CancelledOrderScreen';
import WaitingForPickupScreen from '../screen/groceryvendor/PickupWaitingScreen';
import OutForDeliveryScreen from '../screen/groceryvendor/OutForDeliveryScreen';
import DeliveredOrderScreen from '../screen/groceryvendor/DeliveredOrderScreen';
import OrderDetailScreen from '../screen/groceryvendor/OrderDetailScreen';
import NotificationScreen from '../screen/groceryvendor/NotificationScreen';
import ReviewAndRatingScreen from '../screen/groceryvendor/ReviewAndRating';
import FoodHomeScreen from '../screen/foodvendor/HomeScreen';
import FoodOrderDetailScreen from '../screen/foodvendor/OrderDetailScreen';
import FoodConfirmedOrderScreen from '../screen/foodvendor/ConfirmOrderScreen';
import FoodCancelledOrderScreen from '../screen/foodvendor/CancelledOrderScreen';
import FoodWaitingForPickupScreen from '../screen/foodvendor/PickupWaitingScreen';
import FoodOutForDeliveryScreen from '../screen/foodvendor/OutForDeliveryScreen';
import FoodDeliveredOrderScreen from '../screen/foodvendor/DeliveredOrderScreen';
import FoodNotificationScreen from '../screen/foodvendor/NotificationScreen';
import FoodShopSettingScreen from '../screen/foodvendor/ShopSettingScreen';
import FoodAccountScreen from '../screen/foodvendor/AccountScreen';
import AddFoodProductScreen from '../screen/foodvendor/AddNewProductScreen';
import FoodProductListScreen from '../screen/foodvendor/ProductListScreen';
import FoodReviewAndRatingScreen from '../screen/foodvendor/ReviewAndRating';
import AddDiscountCouponScreen from '../screen/foodvendor/AddDiscountCoupon';
import CouponListScreen from '../screen/foodvendor/CouponListScreen';
import ComplaintScreen from '../screen/foodvendor/Complaints';
import OtpScreen from '../screen/common/OtpScreen';


const Stack = createNativeStackNavigator();


const AppNavigator = () => {
    return (
        <NavigationContainer ref={(navigatorRef) => { NavigationService.setTopLevelNavigator(navigatorRef); }}>

            <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{
          animation: 'slide_from_right', //<-- this is what will do the trick
          presentation: 'card',
          headerShown:false
        }}>

                 {/* common */}
               <Stack.Screen name="SplashScreen" component={SplashScreen}/>
               <Stack.Screen name="LoginScreen" component={LoginScreen}/>
               <Stack.Screen name="OtpScreen" component={OtpScreen}/>

               <Stack.Screen name="ChooseVendorTypeScreen" component={ChooseVendorTypeScreen}/>
             
         

                   {/* grocery vendor */}

               <Stack.Screen name="RegistrationInformationScreen" component={RegistrationInformationScreen}/>
               <Stack.Screen name="BasicDetailRegistrationScreen" component={BasicDetailRegistration}/>
               <Stack.Screen name="LeagalDocumentRegistrationScreen" component={LeagalDocumentRegistrationScreen}/>
               <Stack.Screen name="ProductInformationRegistration" component={ProductInformationRegistrationScreen}/>
               <Stack.Screen name="VendorShopPhotoRegistrationScreen" component={VendorShopPhotoRegistrationScreen}/>
               <Stack.Screen name="HomeScreen" component={HomeScreen}/>
               <Stack.Screen name="ShopSettingScreen" component={ShopSettingScreen}/>
               <Stack.Screen name="AddProductScreen" component={AddProductScreen}/>
               <Stack.Screen name="AccountScreen" component={AccountScreen}/>
               <Stack.Screen name="ProductListScreen" component={ProductListScreen}/>
               <Stack.Screen name="ConfirmedOrderScreen" component={ConfirmedOrderScreen}/>
               <Stack.Screen name="CancelledOrderScreen" component={CancelledOrderScreen}/>
               <Stack.Screen name="WaitingForPickupScreen" component={WaitingForPickupScreen}/>
               <Stack.Screen name="OutForDeliveryScreen" component={OutForDeliveryScreen}/>
               <Stack.Screen name="DeliveredOrderScreen" component={DeliveredOrderScreen}/>
               <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen}/>
               <Stack.Screen name="NotificationScreen" component={NotificationScreen}/>
               <Stack.Screen name="ReviewAndRatingScreen" component={ReviewAndRatingScreen}/>

                
                
                   {/* food vendor */}

               <Stack.Screen name="FoodRegistrationInformationScreen" component={FoodRegistrationInformationScreen}/>
               <Stack.Screen name="FoodBasicDetailRegistrationScreen" component={FoodBasicDetailRegistration}/>
               <Stack.Screen name="FoodLeagalDocumentRegistrationScreen" component={FoodLeagalDocumentRegistrationScreen}/>
               <Stack.Screen name="FoodProductInformationRegistration" component={FoodProductInformationRegistrationScreen}/>
               <Stack.Screen name="FoodVendorShopPhotoRegistrationScreen" component={FoodVendorShopPhotoRegistrationScreen}/>
               <Stack.Screen name="FoodHomeScreen" component={FoodHomeScreen}/>
               <Stack.Screen name="FoodOrderDetailScreen" component={FoodOrderDetailScreen}/>
               <Stack.Screen name="FoodConfirmedOrderScreen" component={FoodConfirmedOrderScreen}/>
               <Stack.Screen name="FoodCancelledOrderScreen" component={FoodCancelledOrderScreen}/>
               <Stack.Screen name="FoodWaitingForPickupScreen" component={FoodWaitingForPickupScreen}/>
               <Stack.Screen name="FoodOutForDeliveryScreen" component={FoodOutForDeliveryScreen}/>
               <Stack.Screen name="FoodDeliveredOrderScreen" component={FoodDeliveredOrderScreen}/>
               <Stack.Screen name="FoodNotificationScreen" component={FoodNotificationScreen}/>
               <Stack.Screen name="FoodShopSettingScreen" component={FoodShopSettingScreen}/>
               <Stack.Screen name="FoodAccountScreen" component={FoodAccountScreen}/>
               <Stack.Screen name="AddFoodProductScreen" component={AddFoodProductScreen}/>
               <Stack.Screen name="FoodProductListScreen" component={FoodProductListScreen}/>
               <Stack.Screen name="FoodReviewAndRatingScreen" component={FoodReviewAndRatingScreen}/>
               <Stack.Screen name="AddDiscountCouponScreen" component={AddDiscountCouponScreen}/>
               <Stack.Screen name="CouponListScreen" component={CouponListScreen}/>
               <Stack.Screen name="ComplaintScreen" component={ComplaintScreen}/>


  
            </Stack.Navigator>
        
        </NavigationContainer>
    );
};

export default AppNavigator;
