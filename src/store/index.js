import { createStore } from 'vuex';
import { ModuleProduct } from './modules/ModuleProduct';
import { authModule } from './modules/authModule';

export default createStore({
    modules:{
        ModuleProduct,
        authModule,
    },
})