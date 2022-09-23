<template lang="">
    <div class="flex justify-center items-center h-screen">
        <div class="product grid grid-cols-2 gap-2">
            <img src="../../assets/szabo-janos-unsplash.jpg" alt="" class="rounded-md">
            <div class="flex flex-col justify-center gap-2">
                <h3 class="text-3xl text-gray-300">{{getCurentProduct}}</h3>
                <p class="text-2xl text-gray-400">1500</p>
                <p class="product-status">Disponible</p>
                <div>
                    <button class="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500
                     focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80">supprimer</button>
                    <button class="ml-2 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md 
                    hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Modifier</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    name: "product-detail",
    props:['id'],
   
    computed:{
        ...mapGetters(['getCurentProduct']),
    },
    mounted() {
        this.$store.dispatch("GET_CURENT_PRODUCT", this.id)
    },
}
</script>
<style lang="css">
    .product{
        max-width: 900px;
    }
    .product-status{
        /* background: #e7f8f8; */
        color: #2dcecc;
    }
</style>