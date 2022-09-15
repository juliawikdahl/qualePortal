<script>
      // import Modal from "vue-bs-modal";
      export default {
            name: "addButton",

      data() {
      return {
        showModal:false,
        items: ['foo', 'bar', 'fizz', 'buzz'],
        value: ['foo', 'bar', 'fizz', 'buzz'],
      }
    },
}
 
</script>

<template>
<div>
      <div class="modal-overlay" v-if="showModal" @click="showModal =false"></div>
      
              <v-btn
                  @click ="showModal = true"
                    class="btn-add"
                    outlined
                    large
                    fab
                    color="indigo"
                  >
                    <v-icon>mdi-plus</v-icon>
              </v-btn>
                
           
    <div class="modal" v-if="showModal"> 

              <div>
                <v-container fluid>
                  <v-row align="center" >
                    <v-col cols="12" sm="6" >
                      <v-select
                        :items="items"
                        attach
                        chips
                        label="Category"
                        multiple
                      > </v-select>
                    </v-col>

                    <v-col cols="12" sm="6" >
                      <v-select
                        :items="items"
                        attach
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
                                row-height="20"
                              ></v-textarea>
                          </v-col>
                  </div>
             
                  <v-container fluid>
                      <v-textarea
                        autocomplete="Code"
                        label="Code"
                      ></v-textarea>
                </v-container>

                 <button class="add-button" @click="showModal =false" >Add</button>
            
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
    padding: 2rem;
   color: white;
   border-radius: 50%;
   -webkit-transition: all 0.7s ease;
   transition: all 0.7s ease;
   cursor: pointer;
   margin-top: 20px;
   margin-left: 2rem;
   
    
   }

.btn-add:hover {
box-shadow: 0 0 8px rgb(152, 150, 150);
padding:  37px;
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


</style>