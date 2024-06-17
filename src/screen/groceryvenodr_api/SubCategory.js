import { Remote } from "../../utils/Remote.js";

export const GetSubCategory = async (cat_id) => {
    try {
        const url = Remote.BASE_URL + "subcategory";

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
