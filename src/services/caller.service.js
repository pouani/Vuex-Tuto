/*****************************/
/*** Import du module nécessires ***/

import axios from 'axios'
import { accountService } from './account.service';
import router from '@/router'

const Axios = axios.create({
    baseURL: 'http://127.0.0.1:8000/api'
})

/**
 * interceptor pour injection token
 */
Axios.interceptors.request.use(request => {

    //Si connectee on ajoute le token dans l'entete
    if(accountService.isLogged()){
        request.headers.Authorization = 'Bearer '+accountService.getToken()
    }
    // console.log(request);

    return request
})

/**
 * interceptor des reponse de l'api
 */
Axios.interceptors.response.use(response => {
    return response
    }, error => {
        console.log(error.response.status);
        if(error.response.status == 401){
            accountService.logout;
            router.push('/login')
        }
})

export default Axios;