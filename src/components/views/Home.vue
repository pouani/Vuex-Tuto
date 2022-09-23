<template lang="">
    <div class="flex items-center justify-center h-screen">
        <div>
            <h1 class="title text-4xl">Vuex The State Management Pattern</h1>
            <div class="text-center flex justify-center items-center gap-2"> 
                <a class="text-gray-400" href="https://vuejs.org/guide/introduction.html">Documentation</a>
                <router-link to="/login" class="start flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                       <path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clip-rule="evenodd" />
                    </svg>
                    <p>Application Test</p>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .title{
     background: -webkit-linear-gradient(315deg,#42d392 25%,#647eff);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 76px;
    line-height: 1.25;
    font-weight: 900;
    letter-spacing: -1.5px;
    max-width: 960px;
    margin: 0 auto;
    text-align: center;
    }
    .start{
    font-size: 16px;
    border-radius: 8px;
    transition: background-color .5s,color .5s;
    position: relative;
    font-weight: 600;
    background-color: #42b883;
    color: #fff;
    margin-right: 18px;
    padding: 8px 1em;
    }
</style>