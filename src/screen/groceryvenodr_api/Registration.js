import { Remote } from "../../utils/Remote";

export const VendorRegistration = async (
    deviceToken,
    vendorName,
    ownerName,
    businessNo,
    businessEmail,
    streetAddressOne,
    streetAddressTwo,
    city,
    state,
    zipCode,
    latitude,
    longitude,
    openingTime,
    closingTime,
    typeVendor,
    shopImgOne,
    shopImgTwo,
    tradeLicense
) => {
    try {
        const url = Remote.BASE_URL + "addvendor";

        // Log the URL being called
        console.log("Calling URL:", tradeLicense);

        const formData = new FormData();

        formData.append('device_token', deviceToken);
        formData.append('vendor_name', vendorName);
        formData.append('owner_name', ownerName);
        formData.append('Business_no', businessNo);
        formData.append('business_email', businessEmail);
        formData.append('street_addressone', streetAddressOne);
        formData.append('street_addresstwo', streetAddressTwo);
        formData.append('city', city);
        formData.append('state', state);
        formData.append('zip_code', zipCode);
        formData.append('latitude', latitude);
        formData.append('longitude', longitude);
        formData.append('opening_time', openingTime);
        formData.append('closing_time', closingTime);
       formData.append('type_vendor', typeVendor);

        formData.append('shop_imgone', {
            uri: shopImgOne,
            type: 'image/jpeg',
            name: Date.now().toString() +'image_.jpg',
        });

        formData.append('shop_imgtwo', {
            uri: shopImgTwo,
            type: 'image/jpeg',
            name: Date.now().toString() +'image_.jpg',
        });

        formData.append('trade_license', {
            uri: tradeLicense,
            type: 'image/jpeg',
            name: Date.now().toString() +'image_.jpg',
        });

        // Log the form data being sent
        console.log("Form Data:", formData);

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formData,
        });

        const data = await response.json();

        // Log the response from the API
        console.log("API Response:", data);

        // Handle the API response here (return, log, etc.)
        return data;
    } catch (error) {
        console.error("dddd"+error);
        throw error;
    }
};


export const CheckRegistrationStatus = async (
    deviceToken,
) => {
    try {
        const url = Remote.BASE_URL + "check_status";

  

        const formData = new FormData();

        formData.append('device_token', deviceToken);
       
       

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formData,
        });

        const data = await response.json();

        // Log the response from the API
        console.log("API Response:", data);

        // Handle the API response here (return, log, etc.)
        return data;
    } catch (error) {
        console.error("dddd"+error);
        throw error;
    }
};

