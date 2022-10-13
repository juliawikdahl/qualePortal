<template>
  <div>
  <div v-for="selectedItem in selectedItems" :key="selectedItem.Name">
      <div class="itemCards">  
        <div class="icons">
          <a :href= "selectedItem.gitURL" class="btnGit">View on GitHub</a>
        <router-link :to="{path:`/item/${selectedItem.Id}`,query:{openEdit: true}}">
          <v-icon class="edit">mdi-pencil</v-icon>  
        </router-link>
        </div>
        
        <div class="itemName">{{selectedItem.Name}}</div>
        <div class="itemDes">{{selectedItem.Description}}</div>
        <div class="codeTitle"><p v-if="showJson">Json</p><p v-else>Xml</p>

        <div class="swap">
            <v-icon @click="showJson=!showJson"> mdi-swap-horizontal </v-icon>
            <v-icon @click="copyToClipboard(showJson ? selectedItem.Index : selectedItem.xmlCode)"> mdi-content-copy </v-icon>
        </div>
      </div> 
        
        <div class="itemIndex">
        <div v-if="showJson"> {{selectedItem.Index}} </div>
        <div v-else> {{selectedItem.xmlCode}}</div>
      </div>
      <div class="metaData">Tags:
      <a @click="gotoCategory(category)" v-for="category in getCategoryMetaData(selectedItem.Id)" :key="category">{{category}} </a></div>
      </div>   
    </div> 
</div>

</template>

<script>
   
    export default{
      name: "categoryComponent",
      mounted() {
      this.fetchCategories();
      
      },
      data() {
        return{
          itemsJson: [],
          categories: [],
          selectedItems: [],
          showModal: false,
          showJson: true
      }
    },        
      watch: {
        '$route.params.name': function() {  
          this.fetchCategories();
        }
      },
      methods: {
        fetchCategories: async function() {
          const response = await fetch('http://localhost:8084/quickui/categories');
          this.categories = await response.json()  
          this.fetchItems();
        },

        fetchItems: async function() {
          const response = await fetch('http://localhost:8084/quickui/items');
          this.itemsJson = await response.json()
          this.getItemByUndercategoryName(this.$route.params.name);
        },

        getItemByUndercategoryName(name) {
          const underCategory = this.getUndercategoryByName(name);
          if(!underCategory) {
            return null;
          }
          this.selectedItems =  this.itemsJson.filter(item => underCategory.ComponentsIds.includes(item.Id));
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
       getCategoryMetaData(itemId) {
          this.itemCategory = [];
          this.categories?.forEach(cat => {
            cat.underCategories.forEach(uc => {
              if(uc.ComponentsIds.includes(itemId))
              {
                if(!this.itemCategory.includes(cat.name))
                this.itemCategory.push(cat.name);
              }
            })
          })
          return this.itemCategory;
        },
        gotoCategory(category) {
          this.$router.push({ name: "category", params: {name: category} });
        },
        gotoUndercategory(underCategory) {
          this.$router.push({ name: "undercategory", params: {name: underCategory} });
        },
       
      }
    }
    </script>

<style scoped>
  .itemCards{
   margin-left: 5rem;
   margin-right: 23rem;
   margin-top: 5rem;
   max-width: 80rem;
   min-width: 80rem;  
}
.icons {
  display: flex;
  justify-content: flex-end;
}
.btnGit {
  color: black;
  border: 1px solid rgb(4, 4, 4);
  margin-right: 10px;
  padding: 5px;
  border-radius: 10px;
  text-decoration: none;
}


.itemName{
    font-weight: 800;
    font-size: 2rem;
    margin-top: 1rem; margin-bottom: 1rem;
}
.itemDes{
 margin-bottom: 1rem;
}
.codeTitle{
  padding: 0.3rem;
    display: flex;
    border-radius: 5px;
    color:rgb(94, 108, 116);
    background-color: rgb(182, 209, 224);
    padding-left: 1rem;
   border: 1px solid rgb(147, 169, 182);
}

.swap {
  margin-left: 73rem;
}

.itemIndex{
    padding: 1rem;
    border-radius: 5px;
    background-color: rgb(182, 209, 224); 
    min-height: 10rem;
    min-width: 35rem;
    margin-bottom: 0.3rem;
}

.metaData{
  color: blue;
  cursor:pointer;
}
    


</style>