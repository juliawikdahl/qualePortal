<template>
  <div>
  <div v-for="item in itemsToShow" :key="item.Name">
      <div class="itemCards"> 
        <p>{{item.Name}}</p> 
        <button class="btnGit">Git</button>
        <router-link :to="{ path: `/item/${item.Id}` }" >
        </router-link>
        <div class="itemName">{{item.Name}}</div>
        <div class="itemDes">{{item.Description}}</div>
      
        <div class="codeTitle">Json <button  class="btnConvert" @click="showJson=!showJson">Xml</button><button class="btnCopy" @click="copyToClipboard()">Copy</button></div> 
        
        <div class="itemIndex"><div v-if="showJson">{{item.Index}}</div>
        <div v-else> {{item.xmlCode}}</div></div>
     
      </div>   
    </div> 
</div>

</template>



<script>
  import itemsJson from '../jsonFiles/items.json'
  import categoryJson from '../jsonFiles/categories.json'


    export default{
    name: "allCategoriesView",
    mounted() {
      this.getUnderCategories();
    },
    watch: {
      '$route.params.name': function() {
        this.getUnderCategories();
      },
    },
    data() {
        return {
            items: itemsJson.Components,
            categories: categoryJson.Categories,
            selectedItems: [],
            underCategories: [],
            itemsToShow: [],
            showJson: true
            

        };},
        methods: {
      getUnderCategories: function() {
     
       this.underCategories = this.categories.filter(c => c.name == this.$route.params.name).map(c => c.underCategories);
       // flat 2 ggr pga nestlad array..
       const ids = this.underCategories.map( (uc) => { return uc.map(uc => uc.ComponentsIds)}).flat().flat()

      // hämta alla items som har ID som finns med i någon av underkategorierna
      const items = this.items.filter(item => ids.includes(item.Id));
      this.itemsToShow = items;
      }
    
    }
   
  
}
    </script>




<style scoped>

<style>
  
  .swap {
   display: flex;
   justify-content: end;
  }

.itemCards{
  margin-left: 5rem;
  margin-right: 23rem;
  margin-top: 5rem;
  max-width: 100rem;
  min-width: 70rem;
  
}
.itemName{
  
   font-weight: 800;
   font-size: 2rem;

 margin-top: 1rem; margin-bottom: 1rem;
}
.itemDes{
   

margin-bottom: 1rem;
}
.itemIndex{

   padding: 1rem;
   border-radius: 5px;
   background-color: rgb(182, 209, 224);
   
   
   min-height: 10rem;
   min-width: 35rem;
 margin-bottom: 0.3rem;
}
.codeTitle{
 border-radius: 5px;
   color:rgb(94, 108, 116);
   background-color: rgb(182, 209, 224);
  padding-left: 1rem;
   min-width: 30rem;
border: 1px solid rgb(147, 169, 182);
}
.btnConvert{
margin-left: 66rem;
margin-right: 0.7rem;
}
.btnGit {

 border: 1px solid rgb(4, 4, 4);
 margin-right: 10px;
 padding: 5px;
 border-radius: 10px;
}
.icons {
 display: flex;
 justify-content: end;
}


    
    </style>