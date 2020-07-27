import { environment } from "src/environments/environment";

export const apiResources = {
    baseURL: environment.baseURL,
    categoriesList: "/categories",
    createProduct: "/worker/products/create",
    productList: "/worker/products/all",
    deleteProduct: "/worker/products/productID/delete",
    getProduct: "/worker/products/productID",
    updateProduct: "/worker/products/productID/update",
    addStore: "/stores/store",
    storeManagerList: "/store-manager/fetch/all",
    storeList: "/stores/list",
    createScheme: "/scheme/create",
    schemeList: "/scheme/fetch"
}