<script>

      export default {
      name: "addItemModal",
      mounted() {
        this.fetchCategories();
      },
      methods: {
        getCategoryNames: function() {
          return this.categories.map((cat) => { return cat.name });
        },
        fetchCategories: async function() {
          const response = await fetch('http://localhost:8084/quickui/categories');
          this.categories = await response.json()

          this.category = this.getCategoryNames();

        },
          isValid: function() {
            if(!this.title || !this.description || !this.git || !this.code || this.selectedCategories.length == 0 || this.selectedUnderCategories.length == 0)
              return false;
            return true;
          },
          createItem: async function() {
            if (!this.isValid())
              return;
            await fetch('http://localhost:8084/quickui/items', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                Name: this.title, 
                Description: this.description, 
                gitURL: this.git, 
                Index: this.code, 
                categoryIds: this.getCategoryIdByName(), })
            });
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
           } 
          },
      

      watch: {
        selectedCategories: function(newVals) {
        let underCategories = [];
        this.categories.forEach(element => {
        if(newVals.includes(element.name)) {
          underCategories.push(element.underCategories.map(uc => uc.Name));
            }
            
          });
          this.underCategory = underCategories.flat();
        }
      },
    
      data:() => ({
        showModal:false,
        category: [],
        selectedCategories: [],
        selectedUnderCategories: [],
        underCategory: [],
        categories: [],
        rules: [
        value => !!value || 'Required.',
        ],
        title:'',
        description: '',
        code: '',
        git: '',
        codeX: '',
        
      
    }),
}
 
</script>

<template >
<div>
      <div class="modal-overlay" v-if="showModal" @click="showModal =false"></div>
      
              <v-btn
                  @click ="showModal = true"
                    class="btn-add"
                    outlined
                    medium
                    fab
                    color="indigo"
                  >
                    <v-icon>mdi-plus</v-icon>
              </v-btn>
                
           
    <div class="modal" v-if="showModal"> 
             
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
            
  
                <v-form>
                      <v-container>
                        <v-row>
                          <v-col
                            cols="12"
                            sm="6"
                          >
                            <v-text-field 
                              v-model="title"
                              :rules="rules"     
                              counter="25"
                              hint="This field uses counter prop"
                              label="Title"
                            ></v-text-field>
                          </v-col>

                          <input class="url" v-model="git" type="url" placeholder="Git url.." />
                        </v-row>
                      </v-container>
                    </v-form>

                
                        <v-col
                              cols="12"
                              sm="12"
                            >
                              <v-textarea
                              v-model="description"
                                label="Description"
                                rows="2"
                                :rules="rules"
                              ></v-textarea>
                          </v-col>
                
             
                  <v-container fluid>
                      <v-textarea
                      v-model="code"
                      :rules="rules"
                       
                        label="Code JSON"
                      ></v-textarea>
                </v-container>

                <v-container fluid>
                    <v-textarea
                      v-model="codeX"
                      label="Code XML"
                      :rules="rules"
                    ></v-textarea>
              </v-container>

                 <button class="add-button"   @click="showModal =false, createItem()" >Add</button>
            
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

   .btn-add {
   color: white;
   border-radius: 50%;
   -webkit-transition: all 0.7s ease;
   transition: all 0.7s ease;
   cursor: pointer;
   margin-top: 26px;
   margin-left: 2rem;
   
    
   }

.btn-add:hover {
box-shadow: 0 0 8px rgb(152, 150, 150);
padding:  30px;
text-align: center;
}

.modal {
    position: fixed;
    padding: 3rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    max-width: 1500px;
    height: 500px;
    width: 800px;
    display: table;
    color: black;
    background-color: rgb(255, 255, 255);
   }

   .url {
    height: 40px;
    width: 330px;
    margin-top: 1.4rem;
    margin-left: 0.8rem;
    border-bottom: 1px solid rgb(138, 137, 137);
    padding-left: 0.5rem;
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


 






</style>