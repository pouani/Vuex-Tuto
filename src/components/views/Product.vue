<template lang="">
    <div class="dark:text-white">
        <div>
            <div class="px-1 py-3">
                <div class="search flex items-center mx-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 mt-2">
                    <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
                    </svg>

                    <input type="text" class="w-full px-4 py-2 mt-2 
                        placeholder-gray-500 rounded-md dark:bg-gray-900 
                        dark:placeholder-gray-400 
                         focus:outline-none dark:text-white 
                        " placeholder="Rechercher....">
                </div>
                <h2 class="text-2xl mt-2">Tous vos articles</h2>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 px-2 py-4 gap-8">
                <!-- {{getAllprods}} -->
                <router-link :to="{name: 'product-detail', params: { id: product.id}}"
                 class="rounded-md" v-for="(product, index) in getAllprods[0]" :key="index">
                    <img class="rounded-md cursor-pointer" v-if="product.image !=null" :src="'' + product.image " alt="" />
                    <img v-else src="../../assets/szabo-janos-unsplash.jpg" alt="" class="rounded-md cursor-pointer">
                    <div class="flex justify-between items-center">
                        <ul class="flex gap-2 text-gray-400">
                            <li>{{ product.name }}</li>
                            <li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                                </svg>
                            </li>
                            <li> 200fcfa</li>
                        </ul>
                        <ul class="flex mt-1 gap-2">
                            <li class="cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-blue-400">
                                    <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clip-rule="evenodd" />
                                </svg>
                            </li>
                        </ul>
                    </div>
                </router-link>
            </div>
        </div>
        Product list
    </div>
</template>
<script>
import { mapGetters, useStore, onMounted } from 'vuex';
export default {
    data() {
        return {
            products: [],
        }
    },
    methods: {
        getAllprod(){
            console.log(this.$store.dispatch("GET_PRODUCTS"))
            this.$store.dispatch("GET_PRODUCTS")
        }
    },
   
    computed:{
        ...mapGetters(['getAllprods']),
    },
    mounted() {
        this.getAllprod()
    },
}
</script>
<style lang="">
    
</style>