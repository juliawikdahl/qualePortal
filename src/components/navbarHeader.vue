<script>
    import searchBar from './searchBar.vue';
import SigninComponent from '../modals/signinModal.vue';
    
export default {
        name : 'navbarHeader',
        props : {
            logo: String
        },
        components: {
    searchBar,
    SigninComponent
},
}
</script>

<template>
     <div class="Navbar">
        
        <v-img class="logo" :src="logo" /> 
         <searchBar /> 
        
        <SigninComponent/>   
    </div>

</template>



<style>


.Navbar {
  display: flex;
  justify-content: space-evenly;
  background-color: rgba(15, 15, 15, 0.867);
  padding: 30px;
}

.logo {
    max-height: 150px;
max-width: 200px;

}
 
.btn {
    font-size: 18px;
 
 color: white;
 border-radius: 25px;
 padding: 0.6rem 1.4rem;
 margin-top: 30px;
 background-color: transparent;
 -webkit-transition: all 0.7s ease;
 transition: all 0.7s ease;
 cursor: pointer;
 
 }

.btn:hover {
box-shadow: 0 0 8px rgb(152, 150, 150);
padding: 10px 30px;
text-align: center;
}

</style>
