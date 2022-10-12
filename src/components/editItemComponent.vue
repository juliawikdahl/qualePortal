<script>
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
        itemsJson: [],
        category: [],
        categories: [],
        selectedCategories: [],
        underCategory: [],
        selectedUnderCategories: [],
        showModal:false,
        title: this.item.Name,
        git: this.item.gitURL,
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
          this.fetchItems();
        },

        fetchItems: async function() {
          const response = await fetch('http://localhost:8084/quickui/items');
          this.itemsJson = await response.json()
        },

        editItem: async function() {
          await fetch('http://localhost:8084/quickui/items', {
              method: 'PUT',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(
                {
                  Name: this.title, 
                  Description: this.des, 
                  gitURL: this.git, 
                  Index: this.codeJ, 
                  categoryIds: this.getCategoryIdByName()
                })
            });
          this.$emit('closeModal');
        },

        getCategoryIdByName: function() {
            const ids = [];
            this.categories.map((cat) => {
              if(this.selectedCategories.includes(cat.name)) {
                ids.push(cat.Id);
                cat.underCategories.map(uc => {
                  if (this.selectedUnderCategories.includes(uc.Name))
                  {
                    ids.push(uc.Id);
                  }
                })
              }
            })
            return ids;
        },


      getCategoryByItemId: function() {
        this.categories?.forEach((cat) => {
          cat.underCategories.forEach(uc => 
            {
              if (uc.ComponentsIds.includes(this.item.Id)) {
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
        return this.categories.map((cat) => { return cat.name });
      },
     
    }
  }
</script>

<template>
  <div>
    <div class="modal-overlay" >
      <div class="modal"> 
      <div>
              <v-btn 
              @click="$emit('closeModal')"
                    class="close"
                    outlined
                    medium
                    fab
                    color="indigo"
                  >
                    <v-icon>mdi-close</v-icon>
              </v-btn>

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
      
                        <input class="url" type="url" v-model="git" placeholder="Git url.." />
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
              <v-btn 
              @click="('showmodal')"
                    class="delete-button"
                    outlined
                    color="indigo"
                  > 
                   <v-icon >mdi-delete-forever</v-icon>Delete
              </v-btn>
             
               <button class="edit-button" @click= "showModal =false, editItem()" >Edit</button>
          
       </div>
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
   .edit-button {
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
.edit-button:hover {
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
.delete-button{
 display: flex;
 justify-content:right;
}


</style>