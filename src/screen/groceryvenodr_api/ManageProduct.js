import { Remote } from "../../utils/Remote.js";

export const AddProduct = async (
    shop_id,
    product_name,
    cat_id,
    subcat_id,
    lowcat_id,
    gst_rate,
    brand_id,
    desp,
    attr_id,
    attr_value,
    price_variant,
    attr_pricevalue,
    attr_price,
    attr_offerprice,
    attr_discount,
    attr_stock_qty,
    avail_status,
    prodtype,
    publish_status
) => {
    try {
        const url = Remote.BASE_URL + "addproduct";

        console.log("shop id"+shop_id)

        const formData = new FormData();
        formData.append('shop_id', shop_id);
        formData.append('product_name', product_name);
        formData.append('cat_id', cat_id);
        formData.append('subcat_id', subcat_id);
        formData.append('lowcat_id', lowcat_id);
        formData.append('gst_rate', gst_rate);
        formData.append('brand_id', brand_id);
        formData.append('desp', desp);
        formData.append('attr_id', attr_id);
        formData.append('attr_value', attr_value);
        formData.append('price_variant', price_variant);
        formData.append('attr_pricevalue', attr_pricevalue);
        formData.append('attr_price', attr_price);
        formData.append('attr_offerprice', attr_offerprice);
        formData.append('attr_discount', attr_discount);
        formData.append('attr_stock_qty', attr_stock_qty);
        formData.append('avail_status', avail_status);
        formData.append('prodtype', prodtype);
        formData.append('publish_status', publish_status);

        console.log(formData)

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
        console.error("dddd" + error);
        throw error;
    }
};
