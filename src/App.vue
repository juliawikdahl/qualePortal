<script>
import root from './jsonFiles/categories.json'
import navbarHeader from './components/navbarHeader.vue'
import treeView from './components/treeView.vue'
  export default {
    name: "App",
    data() {
        return{
          root   
      }
    },
    components: {
    navbarHeader,
    treeView
}
}
  </script>
  

  <template>

 <div>
  <router-link :to="{ path: '/' }">
 <navbarHeader logo='https://quale.se/wp-content/themes/quale_theme/image/logo_white.svg'/>
  </router-link>
  <treeView v-for="cat in root.Categories" :key="cat.name" :node="cat" :shouldBeExpanded="true" :BoldTitle="true"/>
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
