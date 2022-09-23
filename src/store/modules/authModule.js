import { accountService } from "@/services"

export const authModule = {
    state: () => ({
        user: {},
    }),
    actions: {
        //LOGIN
        LOGIN(context, user) {
          accountService.login(user)
                .then(res => { 
                  context.commit("SET_USER", res.data); 
                  if(res.data.token){
                      //sav token
                      localStorage.setItem("product_token", res.data.token)
                  }
                })

        },
    },
    mutations: {
      SET_USER(state, payload) {
            state.user = payload;
        },
    },
    getters: {
        getUser(user){
            return state.user;
        },
    },
}