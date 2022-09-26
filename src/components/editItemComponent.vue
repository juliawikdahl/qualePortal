<script>
    import categoryJson from '../jsonFiles/categories.json'
     export default{
      name: "editItemComponent",
    mounted() {
      
        this.category = this.getCategoryNames();
      },
      data() {
        return{
          items: itemsJson.Components,
          category: [],
          selectedCategories: [],
          underCategory: [],
          showModal:false,
          title:'',
          des:'',
          codeJ:'',
          codeX: '',
          

      }
    },        
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
      methods: {
       getCategoryNames: function() {
          return categoryJson.Categories.map((cat) => { return cat.name });
        },
       
      }
    }
</script>

<template>


<div class="modal-overlay" v-if="showModal" @click="showModal =false"></div>
        
   
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
                              v-model="des"
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
                      v-model="codeJ"
                      :rules="rules"
                        autocomplete="CodeJSON"
                        label="Code JSON"
                        rows="3"
                      ></v-textarea>
                </v-container>
                <v-container fluid>
                      <v-textarea
                      v-model="codeX"
                      :rules="rules"
                        autocomplete="CodeXml"
                        label="Code XML"
                        rows="3"
                      ></v-textarea>
                </v-container>
        
                 <button class="add-button"   @click="showModal =false" >Edit</button>
            
         </div>
           
        
        </div>

</template>