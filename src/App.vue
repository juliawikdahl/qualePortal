<script>
import navbarHeader from './components/navbarHeader.vue'
  export default {
    name: "App",
    components: { navbarHeader }
}

  
  </script>
  

  <template>

 <div>
  <router-link :to="{ path: '/' }">
 <navbarHeader logo='https://quale.se/wp-content/themes/quale_theme/image/logo_white.svg'/>
  </router-link>
 
 <router-view/>
 </div>

  </template>
  

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  </style>
