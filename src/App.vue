<script>
import root from './jsonFiles/categories.json'
import navbarHeader from './components/navbarHeader.vue'
import treeView from './components/treeView.vue'
import footerFooter from './components/footer.vue'

  export default {
    name: "App",
    data() {
        return{

          root,   
          
      }
    },
    components: {
    navbarHeader,
    treeView,
    footerFooter

}
}
  </script>
  

  <template>

 <div>
 <navbarHeader logo='https://quale.se/wp-content/themes/quale_theme/image/logo_white.svg'/>
  <div id="staticView">
    <div >
  <treeView v-for="cat in root.Categories" :key="cat.name" :node="cat" :shouldBeExpanded="true" :BoldTitle="true"/>
   </div>  
 <router-view/>
 
   <div></div></div>
    
<div>
      <footerFooter/>
  </div>
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
  </style>
