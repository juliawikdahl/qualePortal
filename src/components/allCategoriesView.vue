<template>
  <div>
  <div v-for="item in itemsToShow" :key="item.Name">
      <div class="itemCards"> 
        <div class="icons">
          <a :href= "item.gitUrl" class="btnGit">View on GitHub</a>
        <router-link :to="{path:`/item/${item.Id}`,query:{openEdit: true}}">
          <v-icon>mdi-pencil</v-icon>  
        </router-link>
        </div>
        <div class="itemName">{{item.Name}}</div>
        <div class="itemDes">{{item.Description}}</div>
      
        <div class="codeTitle"><p v-if="showJson">Json</p><p v-else>Xml</p>
        <div class="swap">
            <v-icon @click="showJson=!showJson"> mdi-swap-horizontal </v-icon>
       
        <v-icon @click="copyToClipboard(showJson ? item.Index : item.xmlCode)"> mdi-content-copy </v-icon>
        </div>
      </div> 
        
        <div class="itemIndex"><div v-if="showJson">{{item.Index}}</div>
        <div v-else> {{item.xmlCode}}</div></div>
      <div class="metaData">Tags:
      <a @click="gotoUndercategory(underCategory)" v-for="underCategory in getUndercategoryMetaData(item.Id)" :key="underCategory">{{underCategory}} </a></div>
      </div>   
    </div> 
</div>

</template>



<script>
 


    export default{
    name: "allCategoriesView",
    mounted() {
      console.log('inside mounted')
      this.fetchCategories();
    },
    watch: {
      '$route.params.name': function() {
        this.fetchCategories();
      },
    },
    data() {
        return {
            itemsJson: [],
            categories: [],
            selectedItems: [],
            underCategories: [],
            itemsToShow: [],
            showJson: true
            


        };},
        methods: {  
          fetchCategories: async function() {
          const response = await fetch('http://localhost:8084/quickui/categories');
          this.categories = await response.json();
          this.fetchItems();
        },

        fetchItems: async function() {
          const response = await fetch('http://localhost:8084/quickui/items');
          this.itemsJson = await response.json()
          this.getUnderCategories();
        },
      getUnderCategories: function() {
     
       this.underCategories = this.categories.filter(c => c.name == this.$route.params.name).map(c => c.underCategories);
    
       const ids = this.underCategories.map( (uc) => { return uc.map(uc => uc.ComponentsIds)}).flat().flat()

      
      const items = this.itemsJson.filter(item => ids.includes(item.Id));
      this.itemsToShow = items;
      },
      getUndercategoryMetaData(itemId) {
        this.itemUndercategories = [];
        this.categories.forEach(cat => {
          cat.underCategories.forEach(uc => {
            if(uc.ComponentsIds.includes(itemId))
            {
              if(!this.itemUndercategories.includes(uc.Name))
              this.itemUndercategories.push(uc.Name);
            }
          })
        })
        return this.itemUndercategories;
      },
      gotoUndercategory(underCategory) {
        this.$router.push({ name: "undercategory", params: {name: underCategory} });
      },
      copyToClipboard: function(index){
        navigator.clipboard.writeText(index)
       },
    }
   
  
}
    </script>




<style scoped>
  .metadata {
    padding: 0rem 0.5rem;
    cursor: pointer;
  }
  .metadata:hover {
    color: blue;
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
  padding: 0.3rem;
    display: flex;
    border-radius: 5px;
    color:rgb(94, 108, 116);
    background-color: rgb(182, 209, 224);
    padding-left: 1rem;
  
 border: 1px solid rgb(147, 169, 182);
}
.btnConvert{
margin-left: 66rem;
margin-right: 0.7rem;
}
.swap {
  margin-left: 69rem;
}
.btnGit {
  color: black;
  border: 1px solid rgb(4, 4, 4);
  margin-right: 10px;
  padding: 5px;
  border-radius: 10px;
}
.icons {
  display: flex;
  justify-content: flex-end;
}

.metaData{
  color: blue;
  cursor:pointer;

}

    
 </style>