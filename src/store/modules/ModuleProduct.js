import { productService } from "@/services"

export const ModuleProduct = {
    state: () => ({
        products: [],
        curentProduct: {},
    }),
    actions: {
        //GET_PRODUCTS
        GET_PRODUCTS(context) {
            productService.getAllprod()
                .then(res => { context.commit("SET_PRODUCTS", res.data); })
        },
        //GET_CURENT_PRODUCT
        GET_CURENT_PRODUCT(context, product) {
            productService.getprod(product)
                        .then(res => {  context.commit('SET_CURENT_PRODUCT', res.data) });
                        
        }

    },
    mutations: {
        SET_PRODUCTS(state, payload) {
            state.products = payload;
        },
        SET_CURENT_PRODUCT(state, payload) {
            state.curentProduct = payload;
        },
    },
    getters: {
        getAllprods(state){
            return state.products;
        },
        getCurentProduct(state){
            return state.curentProduct;
        }
    },
}