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
            console.log("getITemBYId", id);
        },
        copyToClipboard: function () {
            navigator.clipboard.writeText(this.selectedItem.Index);
        },
        getCategoryNames: function () {
            return categoryJson.Categories.map((cat) => { return cat.name; });
        },
    },
    components: { EditItemComponent }
}
    </script>
    
    
<template>
  <div>
      <div class="itemCards">  
        <button class="btnGit">Git</button>
        <button @click="showModal=true" class="btnEdit">Edit</button>
        <div class="itemName">{{selectedItem.Name}}</div>
        <div class="itemDes">{{selectedItem.Description}}</div>
      </div>
      <div>
        <div class="codeTitle">Json <button  class="btnConvert" @click="showJson=!showJson">Xml</button><button class="btnCopy" @click="copyToClipboard()">Copy</button></div> 
        <div class="itemIndex"><div v-if="showJson">{{selectedItem.Index}}</div>
        <div v-else> {{selectedItem.xmlCode}}</div></div>

        
      </div>   

    <EditItemComponent @closeModal="showModal=false" v-if="showModal" />
  </div>
</template>


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