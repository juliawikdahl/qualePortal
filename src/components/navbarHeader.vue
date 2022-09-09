<script>
    import searchBar from './searchBar.vue';
    import loginButton from './loginButton.vue';
    
export default {
        name : 'navbarHeader',
        props : {
            logo: String
        },
        components: {
    searchBar,
    loginButton
  
}
    }
</script>


<template>
     <div class="Navbar">
        <v-img class="logo" :src="logo" /> 
    <searchBar /> 
    <loginButton/>
    
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

</style>
