import { Remote } from "../../utils/Remote.js";

export const GetCategory = async (
    
) => {
    try {
        const url = Remote.BASE_URL + "categoryall";

        const response = await fetch(url, {
            method: 'POST',
           
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
