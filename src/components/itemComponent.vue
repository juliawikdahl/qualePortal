<script>
  import itemsJson from '../jsonFiles/items.json'
  import categoryJson from '../jsonFiles/categories.json'
  import EditItemComponent from './editItemComponent.vue';

    export default{
    name: "itemComponent",
    mounted() {
        this.getItemById(this.$route.params.id);
        this.category = this.getCategoryNames();
      
        if(this.$route.query.openEdit) {
          this.showModal = true;
        
          this.$router.push(this.$route.path);
        }
        this.getItemById(this.$route.params.id);
        this.category = this.getCategoryNames();
    },
    data() {
        return {
            items: itemsJson.Components,
            selectedItem: {},
            itemUndercategories: [],
            itemCategory: [],
            category: [],
            selectedCategories: [],
            underCategory: [],
            showModal: false,
            title: "",
            des: "",
            codeJ: "",
            codeX: "",
            showJson: true
        };
    },
    watch: {
        "$route.params.id": function () {
            this.getItemById(this.$route.params.id);
        },
        selectedCategories: function (newVals) {
            let underCategories = [];
            categoryJson.Categories?.forEach(element => {
                if (newVals.includes(element.name)) {
                    underCategories.push(element.underCategories.map(uc => uc.Name));
                }
            });
            this.underCategory = underCategories.flat();
        }
    },
    methods: {
        getItemById(id) {
            this.selectedItem = this.items.filter(item => item.Id == id)[0];
            if (!this.selectedItem)
            this.$router.push({ name: '404error' });
            
        },
        copyToClipboard: function () {
            navigator.clipboard.writeText(this.selectedItem.Index );
        },
        getCategoryNames: function () {
            return categoryJson.Categories.map((cat) => { return cat.name; });
        },
        gotoCategory(category) {
          this.$router.push({ name: "category", params: {name: category} });
        },
        gotoUndercategory(underCategory) {
          this.$router.push({ name: "undercategory", params: {name: underCategory} });
        },
        getItemMetaData() {
          this.itemCategory = [];
          this.itemUndercategories = [];
          categoryJson.Categories.forEach(cat => {
            cat.underCategories.forEach(uc => {
              if(uc.ComponentsIds.includes(this.selectedItem.Id))
              {
                if(!this.itemCategory.includes(cat.name))
                this.itemCategory.push(cat.name);
                if(!this.itemUndercategories.includes(uc.Name))
                this.itemUndercategories.push(uc.Name);
              }
            })
          })
        }
    },
    components: { EditItemComponent }
}
    </script>
    
    
<template>
  <div>
      <div class="itemCards">  
        <div class="icons">
          <a href="http://www.google.com" class="btnGit">View on GitHub</a>
          <v-icon @click="showModal = true">mdi-pencil</v-icon>  
        </div>
        <div class="itemName">{{selectedItem.Name}}</div>
        <div class="itemDes">{{selectedItem.Description}}</div>
      
<div class="hej">
        <div class="codeTitle">Json 

        <div class="swap">
            <v-icon @click="showJson=!showJson"> mdi-swap-horizontal </v-icon>
        <v-icon @click="copyToClipboard()"> mdi-content-copy </v-icon>
        </div>
      </div> 
</div>
        <div class="itemIndex"><div v-if="showJson">{{selectedItem.Index}}</div>
        <div v-else> {{selectedItem.xmlCode}}</div></div>

        
      
      <div class="metaData">
          <a @click="gotoCategory(category)" v-for="category in itemCategory" :key="category.name">{{category}}</a>
          <a @click="gotoUndercategory(underCategory)" v-for="underCategory in itemUndercategories" :key="underCategory.Name">{{underCategory}}</a>
        </div> 
     </div>   
    <EditItemComponent :item="selectedItem" @closeModal="showModal=false" v-if="showModal" />
  </div>
</template>


<style scoped>
  .metadata {
    padding: 0rem 0.5rem;
    cursor: pointer;
  }
  .metadata:hover {
    color: blue;
  }


   .swap {
    display: flex;
    justify-content: flex-end;
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
  
 border: 1px solid rgb(147, 169, 182);
}
.btnConvert{
margin-left: 66rem;
margin-right: 0.7rem;
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

}


</style>