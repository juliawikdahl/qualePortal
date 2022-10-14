<script>
import navbarHeader from './components/navbarHeader.vue'
import treeView from './components/treeView.vue'
import footerFooter from './components/footer.vue'



  export default {
    name: "App",
    created() {
      this.fetchCategories();
    },
    data() {
        return{
          root: []  
      }
    },
    methods: {
      fetchCategories: async function() {
          const response = await fetch('http://localhost:8084/quickui/categories');
          this.root = await response.json()
        },
    },
    components: {
    navbarHeader,
    treeView,
    footerFooter,

}
}
  </script>
  

  <template>

 <div>
 
 <navbarHeader logo='https://quale.se/wp-content/themes/quale_theme/image/logo_white.svg'/>
 <img class="berg" style="position: absolute; z-index: -99;" src="./icons/bergskiss.jpg" />
  <div id="staticView">

    <div > <treeView style ="cursor:pointer;" v-for="cat in root" :key="cat.name" :node="cat" :shouldBeExpanded="true" :BoldTitle="true"/> </div>  
 
    <router-view/>
    
  </div>

  <div>
 
    </div>

    
 <footerFooter class="footer"/>
 </div>
  
  </template>
  

  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
    body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  #staticView{
    display:flex;
    
  }
  .footer{
    display: flex-end;
    align-items: flex-end;
  }
  </style>
