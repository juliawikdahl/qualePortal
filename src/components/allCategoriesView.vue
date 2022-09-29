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

    .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 98;
        background-color: rgba(0, 0, 0, 0.7);
        }
    
        .modal {
        position: fixed;
        padding: 1rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 99;
        max-width: 1000px;
        width: 800px;
     
        display: table;
        color: black;
        background-color: rgb(255, 255, 255);
      
    
    
       }
       .container-is-blurred {
          filter: blur(3px);
       }
       .modal-is-active {
         display: block;
        cursor: pointer ;
       }
       .add-button {
      display: flex;
        justify-content: center;
        border: 1px solid;
        width: 25rem;
        height: 3rem;
        text-align: center;
        align-items: center;
        display: grid;
        margin: auto;
        cursor: pointer;
        background-color: rgba(15, 15, 15, 0.867);
        color: white;
        border-radius: 5px;
    }
    .url {
        height: 40px;
        width: 330px;
        margin-top: 1.4rem;
        margin-left: 0.8rem;
        border-bottom: 1px solid rgb(138, 137, 137);
        padding-left: 0.5rem;
    }
    
    
    
    
    .itemCards{
       margin-left: 6rem;
       margin-right: 23rem;
       margin-top: 5rem;
    }
    .itemName{
        font-weight: 800;
        font-size: 2rem;
        margin-top: 1rem; margin-bottom: 1rem;
    }
    .itemDes{
      max-width: 70rem;
      margin-bottom: 1rem;
    }
    .itemIndex{
        max-width: 75rem;
        padding: 2rem;
        border-radius: 0.5rem;
        background-color: rgb(182, 209, 224);
        margin-left: 5.5rem;
        min-height: 10rem;
        margin-bottom: 0.3rem;
    }
    .codeTitle{
     padding-left: 1rem;
     margin-left: 5.5rem;
     max-width: 75rem;
     border-radius: 5px;
     color:rgb(94, 108, 116);
     background-color: rgb(182, 209, 224);
     padding-left: 3.rem;
     border: 1px solid rgb(147, 169, 182);
    }
    .btnConvert{
      margin-left: 66rem;
      margin-right: 0.7rem;
    }
    .btnGit{
      margin-left: 70rem;
      margin-right: 0.7rem;
    }
    
    
    
    </style>