import { Remote } from "../../utils/Remote.js";

export const GetProfileDetails = async (device_token) => {
    try {
        const url = Remote.BASE_URL + "vendorprofile";

        const formData = new FormData();

        formData.append('device_token', device_token);
       
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
