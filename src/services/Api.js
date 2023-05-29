import Http from "./Http";

export const getProducts = (config) => {
    return Http.get("products", config);
}

//Lấy danh mục sản phẩm: 
export const getCategories = (config) => {
    return Http.get("categories", config);
}

//Lấy sản phẩm theo danh mục
export const getProductsCategory = (id, config) => {
    return Http.get(`categories/${id}/products`, config)
}

//Lấy từng danh mục theo id
export const getCategory = (id, config) => {
    return Http.get(`categories/${id}`, config)
}