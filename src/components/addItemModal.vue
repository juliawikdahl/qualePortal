<script>
      // import Modal from "vue-bs-modal";
      import categoryJson from '../jsonFiles/categories.json'
      export default {
      name: "addItemModal",
      mounted() {
        this.category = this.getCategoryNames();
      },
      methods: {
        getCategoryNames: function() {
          return categoryJson.Categories.map((cat) => { return cat.name });
        },
      },
      // watch: {
      //   category:function(newVal) {
      //     this.getCategoryNames.foreach(element => {
      //       if(element.key == newVal) {
      //         this.
      //       }
      //     })
      //   }
      // },
      watch: {
        selectedCategories: function(newVals) {
        let underCategories = [];
        categoryJson.Categories?.forEach(element => {
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
        underCategory: [],
        rules: [
        value => !!value || 'Required.',
        ],
        title:''
        
      
    }),
}
 
</script>

<template v-slot:selection="{ attrs, item, select, selected }">
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
                              v-model="title"
                              :rules="rules"     
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
                                auto-grow
                                label="Description"
                                rows="3"
                                :rules="rules"
                                row-height="20"
                              ></v-textarea>
                          </v-col>
                  </div>
             
                  <v-container fluid>
                      <v-textarea
                      :rules="rules"
                        autocomplete="Code"
                        label="Code"
                      ></v-textarea>
                </v-container>

                 <button class="add-button"   @click="showModal =false, Consoletest()" >Add</button>
            
         </div>
           
        
    </div>
              
    
   
</div>

</template>

<style scoped>
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
.inputs {
  align-items: center;
  display: flex;
  justify-content: center;
}
.title{
  margin-right: 3rem;
  width: 200px;
}
.code {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 2rem;
}
.url {
    height: 40px;
    width: 330px;
    margin-top: 1.4rem;
    margin-left: 0.8rem;
    border-bottom: 1px solid rgb(138, 137, 137);
    padding-left: 0.5rem;
}
.des {
  display: flex;
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

.add {
    position: absolute;
     margin-left: 0.4rem; 
    margin-top: 2.7rem; 
    }

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
    padding: 3rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    max-width: 1000px;
    height: 500px;
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


  /* .v-messages__message {
    color: red !important;
  } */

</style>