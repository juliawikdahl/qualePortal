<script>
import Vue from 'vue';

    
    export default{
          name: 'loginButton',
          methods: {
            getSigninText: function() {
                console.log('inhere?')
                return Vue.prototype.$isSignedIn ? 'Logout' : 'Login';
            }
        },
        data() {
            return {
            loggedIn: Vue.prototype.$isSignedIn
            }
        },
        watch: {
            'Vue.prototype.$isSignedIn': function() {
                console.log('hej');
            }
        },
        mounted() {
            this.getSigninText();
        },
    
      }
    
    </script>

<template>

    <router-link :to="{ path: '/login' }"> <button class="btn">{{getSigninText()}}</button></router-link>
</template>

<style>
   .btn {
 
   height: 52px;
   min-width: 100px;
   color: black;
   border-radius: 25px;
   padding: 1rem 2rem;
   margin-top: 30px;
   background-color: white;
   text-align: center;
   -webkit-transition: all 0.7s ease;
   transition: all 0.7s ease;
   border: transparent;
   margin-left: 150px;
   cursor: pointer;
   
   }

.btn:hover {
box-shadow: 0 0 8px rgb(152, 150, 150);
 padding: 10px 45px;
 text-align: center;
}
</style>