import { Remote } from "../../utils/Remote.js";

export const GetCatAttributes = async (cat_id) => {
    try {
        const url = Remote.BASE_URL + "catattibute";

        const formData = new FormData();

        formData.append('cat_id', cat_id);
       
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


export const GetCatAttributesValues = async (attr_id) => {
    try {
        const url = Remote.BASE_URL + "catvalue";

        const formData = new FormData();

        formData.append('attr_id', attr_id);
       
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