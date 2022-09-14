<script>
    import searchBar from './searchBar.vue';
    // import addButton from './addButton.vue';
import SigninComponent from './signinComponent.vue';
    
export default {
        name : 'navbarHeader',
        props : {
            logo: String
        },
        components: {
    searchBar,
    // addButton,
    SigninComponent
},
}
</script>

<template>
     <div class="Navbar">
        <v-img class="logo" :src="logo" /> 
    <searchBar /> 
   <SigninComponent/>
    <!-- <addButton/> -->
    
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
