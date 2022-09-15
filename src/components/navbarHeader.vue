<script>
    import searchBar from './searchBar.vue';
import SigninComponent from './signinComponent.vue';
    
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
.Title {
    display: flex;

}

.Navbar {
  display: flex;
  justify-content: center;
  background-color: rgba(15, 15, 15, 0.867);
  padding: 20px;
}

.logo {
    max-height: 150px;
max-width: 200px;
}
.btn {
 
 color: black;
 border-radius: 25px;
 margin-left: 14rem;
 padding: 1rem 2rem;
 margin-top: 30px;
 background-color: white;
 -webkit-transition: all 0.7s ease;
 transition: all 0.7s ease;
 cursor: pointer;
 
 }

.btn:hover {
box-shadow: 0 0 8px rgb(152, 150, 150);
padding: 18px 40px;
text-align: center;
}
</style>
