/*****************************/
/*** Import des mdules nécessires ***/
import Axios from './caller.service'

//fonction de connection
let register = (credentials) => {
    return Axios.post('/register', credentials)
}

//fonction de connection
let login = (credentials) => {
    return Axios.post('/login', credentials)
}

//fonction de deconnection, ici on supprime tout simplement le token du localstorage
let logout = () => {
    localStorage.removeItem('token')
}

//stockage du token
let saveToken = (token) => {
    localStorage.setItem('token', token)
}

//on recupere le token
let getToken = () => {
    return localStorage.getItem('token')
}

//methode qui determine si on est connectee ou pas
let isLogged = () => {
    let token = localStorage.getItem('token')
    return !!token
}

export const accountService = {
    register,
    login,
    logout,
    saveToken,
    getToken,
    isLogged,
}