<script>
 
  import itemsJson from '../jsonFiles/items.json'
   export default{
    name: "editItemComponent",
    props : {
          item: {}
      },

      created() {
      this.fetchCategories();
    },
    data() {
      return{
        items: itemsJson.Components,
        category: [],
        categories: [],
        selectedCategories: [],
        underCategory: [],
        selectedUnderCategories: [],
        showModal:false,
        title: this.item.Name,
        des: this.item.Description,
        codeJ:this.item.Index,
        codeX: this.item.xmlCode,
        

    }
  },        
    watch: {
      selectedCategories: function(newVals) {
      let underCategories = [];
      this.categories?.forEach(element => {
      if(newVals.includes(element.name)) {
            underCategories.push(element.underCategories.map(uc => uc.Name));
            element.underCategories.map(uc => { 
              if(!this.underCategory.includes(uc.Name)) {
                this.underCategory.push(uc.Name);
              }
            })
          }
          
        });
        this.underCategory = underCategories.flat();
      }
    },
    methods: {
       fetchCategories: async function() {
          const response = await fetch('http://localhost:8084/quickui/categories');
          this.categories = await response.json()
          
          this.category = this.getCategoryNames();
          this.getCategoryByItemId();
        },
      getCategoryByItemId: function() {
        this.categories?.forEach((cat) => {
          cat.underCategories.forEach(uc => 
            {
              if (uc.ComponentsIds.includes(this.item.Id)) {
                // vi hitta itemet som är med i componentIdsListan
                // Ifall kategorin redan finns med så lgäg ej in igen
                if(!this.selectedCategories.includes(cat.name))
                  this.selectedCategories.push(cat.name);
                if(!this.selectedUnderCategories.includes(uc.Name))
                  this.selectedUnderCategories.push(uc.Name);
              }
            }
          )
        })
      },
     getCategoryNames: function() {
      console.log('this.categories:', this.categories)
        return this.categories.map((cat) => { return cat.name });
      },
     
    }
  }
</script>

<template>
<div class="modal-overlay">
      <div class="modal"> 
            <div>
              <v-container fluid >
                <v-row align="center" >
                  <v-col cols="12" sm="6" >
                    <v-select
                      :items="category"
                      v-model="selectedCategories"
                      attach  
                      clearable
                      solo
                      chips
                      label="Category"
                      multiple
                    > </v-select>
                  </v-col>
      
                  <v-col cols="12" sm="6" >
                    <v-select
                      :items="underCategory"
                      v-model="selectedUnderCategories"
                      attach
                      clearable
                      solo
                      chips
                      label="Under Cateogry"
                      multiple
                    > </v-select>
                  </v-col>
      
                  
                </v-row>
              </v-container>
          
            </div>
      
      <div class="add-form">
              <v-form>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                          sm="6"
                        >
                          <v-text-field 
                            spellcheck="false"
                            v-model="title"
                            counter="25"
                            hint="This field uses counter prop"
                            label="Title"
                          ></v-text-field>
                        </v-col>
      
                        <input class="url" type="url" placeholder="Git url.." />
                      </v-row>
                    </v-container>
                  </v-form>
      
               <div class="des">
                      <v-col
                            cols="12"
                            sm="12"
                          >
                            <v-textarea 
                              spellcheck="false"
                              v-model="des"
                              label="Description"
                              rows="2" 
                            ></v-textarea>
                        </v-col>
                </div>
           
                <v-container fluid>
                    <v-textarea 
                      spellcheck="false"
                      v-model="codeJ"
                      label="Code JSON"
                      rows="2"
                    ></v-textarea>
              </v-container>
              <v-container fluid>
                    <v-textarea
                      spellcheck="false"
                      v-model="codeX"
                      label="Code XML"
                      rows="2"
                    ></v-textarea>
              </v-container>
               <button class="add-button"   @click="$emit('closeModal')" >Edit</button>
          
       </div>
  </div>
</div>
</template>


<style scoped>

.modal-overlay {
   position: fixed;
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
.add-button:hover {
background-color: white;
      color: black;
}
.url {
    height: 40px;
    width: 330px;
    margin-top: 1.4rem;
    margin-left: 0.8rem;
    border-bottom: 1px solid rgb(138, 137, 137);
    padding-left: 0.5rem;
}




</style>