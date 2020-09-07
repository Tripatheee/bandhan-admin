import { environment } from "src/environments/environment";

export const apiResources = {
    baseURL: "https://bandhan.herokuapp.com/api/v1",
    categoriesList: "/categories",
    createProduct: "/worker/products/create",
    productList: "/worker/products/all",
    deleteProduct: "/worker/products/productID/delete",
    getProduct: "/worker/products/productID",
    updateProduct: "/worker/products/productID/update",
    addStore: "/stores/store",
    storeManagerList: "/store-manager/fetch/all",
    storeList: "/stores/list",
    getStore: "/stores/storeID/edit",
    updateStore: "/stores/storeID/update",
    deleteStore: "/stores/delete/storeID",
    createScheme: "/scheme/create",
    schemeList: "/scheme/all",
    deleteScheme: "/scheme/delete/schemeID",
    fetchScheme: "/scheme/fetch/schemeID",
    activitiesList: "/activity/all",
    activityDetail: "/activity/activityID",
    invoiceCategories: "/category/fetch",
    approveActivity: "/update/activity/status",
    rewardWorker: "/worker/user/reward"
}