<script>
    import categoryJson from '../jsonFiles/categories.json'
    import itemsJson from '../jsonFiles/items.json'
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
                                row-height="20"
                              ></v-textarea>
                          </v-col>
                  </div>
             
                  <v-container fluid>
                      <v-textarea
                      v-model="codeJ"
                        autocomplete="CodeJSON"
                        label="Code JSON"
                        rows="3"
                      ></v-textarea>
                </v-container>
                <v-container fluid>
                      <v-textarea
                      v-model="codeX"
                        autocomplete="CodeXml"
                        label="Code XML"
                        rows="3"
                      ></v-textarea>
                </v-container>
        
                 <button class="add-button"   @click="$emit('closeModal')" >Edit</button>
            
         </div>
    </div>
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