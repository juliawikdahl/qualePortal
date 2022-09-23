<template>
  <div>
  <div v-for="selectedItem in selectedItems" :key="selectedItem.Name">
      <div class="itemCards">  
        <button class="btnGit">Git</button><button class="btnEdit">Edit</button>
        <div class="itemName">{{selectedItem.Name}}</div>
        <div class="itemDes">{{selectedItem.Description}}</div>
      </div>
      <div>
        <div class="codeTitle">Json <button  class="btnConvert">Xml</button><button class="btnCopy" @click="copyToClipboard()">Copy</button></div> 
        <div class="itemIndex">{{selectedItem.Index}}</div>
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
            // 404 underkategorin finns ej
            return null;
          }
          this.selectedItems = this.items.filter(item => underCategory.ComponentsIds.includes(item.Id));
        },
        getUndercategoryByName(name) {
          let underCat = null
          this.categories.forEach((cat) => {
            cat.underCategories.filter(uc => {
              if(uc.Name == name) {
                underCat = uc;
              }
            })
          })
          return underCat;
        },
        
       copyToClipboard: function(){
        navigator.clipboard.writeText(this.selectedItem.Index)

       },
       
      }
    }
    </script>
<style>
.itemCards{
   margin-left: 5rem;
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
.btnGit{
margin-left: 70rem;
margin-right: 0.7rem;
}



</style>