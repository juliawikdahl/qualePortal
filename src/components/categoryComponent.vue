<template>
  <div>
  <div v-for="selectedItem in selectedItems" :key="selectedItem.Name">
      <div class="itemCards">  
        <div class="icons">
          <button class="btnGit">View on GitHub</button>
        <router-link :to="{path:`/item/${selectedItem.Id}`,query:{openEdit: true}}">
          <v-icon>mdi-pencil</v-icon>  
        </router-link>
        </div>
        
        <div class="itemName">{{selectedItem.Name}}</div>
        <div class="itemDes">{{selectedItem.Description}}</div>
        <div class="codeTitle">Json 

        <div class="swap">
            <v-icon @click="showJson=!showJson"> mdi-swap-horizontal </v-icon>
        <v-icon @click="copyToClipboard(selectedItem.Index)"> mdi-content-copy </v-icon>
        </div>
      </div> 
        
        <div class="itemIndex">
        <div v-if="showJson"> {{selectedItem.Index}} </div>
        <div v-else> {{selectedItem.xmlCode}}</div>
      </div>
     
      </div>   
    </div> 
</div>

</template>

<script>
   import itemsJson from '../jsonFiles/items.json'
   import categoryJson from '../jsonFiles/categories.json'
   
    export default{
      name: "categoryComponent",
      mounted() {
        this.getItemByUndercategoryName(this.$route.params.name);
      },
      data() {
        return{
          items: itemsJson.Components,
          categories: categoryJson.Categories,
          selectedItems: [],
          showModal: false,
          showJson: true
      }
    },        
      watch: {
        '$route.params.name': function() {  
          this.getItemByUndercategoryName(this.$route.params.name);
        }
      },
      methods: {
        getItemByUndercategoryName(name) {
          const underCategory = this.getUndercategoryByName(name);
          if(!underCategory) {
            return null;
          }
          this.selectedItems = this.items.filter(item => underCategory.ComponentsIds.includes(item.Id));
        },
        getUndercategoryByName(name) {
          let underCat = null
          this.categories.forEach((cat) => {
            cat.underCategories.filter(uc => {
              if(uc?.Name == name) {
                underCat = uc;
              }
            })
          })
          return underCat;
        },
        
       copyToClipboard: function(index){
        navigator.clipboard.writeText(index)

       },
       
      }
    }
    </script>
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