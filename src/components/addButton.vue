<script>
      // import Modal from "vue-bs-modal";
      export default {
            name: "addButton",

      data() {
      return {
        showModal:false
      }
    },
//       methods: {
//       close() {
//         this.$emit('edit-modal')
//       }
//     }
 
}
 
</script>

<template>
<div>
      <div class="modal-overlay" v-if="showModal" @click="showModal =false"></div>
    <div class="code"> 
       <div>
        <div>
 
            <div>
                   <button  @click ="showModal = true" id ="btn-add" class="btn-add ">Add</button>
                   <v-icon class="add">mdi-plus-circle-outline </v-icon>
    
            </div>
     
         <!-- <transition-group name ="fade" appear>
          
          </transition-group>  -->

          <transition-group name="slide" appear>
            
            <div class="modal" v-if="showModal"> 
            
                  <p class="names">Category</p>
                <input class="form3" type="title" placeholder=[[hej]] /> 
              <p class="names">Under-Category</p>
              
              <input class="form2" type="text" placeholder="Search.."/>
              <p class="names">Title</p>
              <input class="form2" type="text" placeholder="Search.."/>
              <p class="names">Beskrivning</p>
              <input class="form2" type="text" placeholder="Search.."/>
              <p class="names">Code</p>
              <input class="form2" type="text" placeholder="Search.."/>
              <v-text-field> hej</v-text-field>
              <button class="form2" @click="showModal =false" >Add</button>
           
              </div>
              

          </transition-group>

       

       </div>
       
       </div>
    </div>
    
   
</div>

</template>

<style>

.code {
    display: flex;
    justify-content: center;
    position: relative;
   }
   .form3 {
    /* margin-top: 100px; */
    margin-bottom: 8px;
    width: 300px;
    /* margin-left: 100px;
    margin-right: 100px; */
    height: 30px;
   }
   .form2 {

    margin-bottom: 8px;
    width: 300px;
    /* margin-left: 100px;
    margin-right: 100px; */
    height: 30px;

   }
   .names {
    /* margin-left: 100px; */
   }
   .btn-add {
    height: 52px;
   min-width: 100px;
   color: black;
   border-radius: 25px;
   padding: 1rem 2rem;
   padding-right: 3rem;
   background-color: white;
   text-align: center;
   -webkit-transition: all 0.7s ease;
   transition: all 0.7s ease;
   border: transparent;
   cursor: pointer;
    
   }

.btn-add:hover {
box-shadow: 0 0 8px rgb(152, 150, 150);
padding: 10px 45px;
text-align: center;
}

.add {
    position: absolute;
    /* margin-left: 0.4rem;
    margin-top: 2.7rem; */
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
    margin-top: 440px;
    left: 80%;
    margin-left: -150px;
    transform: translate(-100%, -100%);
    z-index: 99;
    max-width: 1000px;
    height: 450px;
    display: table;

    background-color: rgb(233, 243, 238);


   }
   .container-is-blurred {
      filter: blur(3px);
   }
   .modal-is-active {
     display: block;
    cursor: pointer ;
   }

   .fade-enter-active,
   .fade-leave-active {
    transition: opacity 0.2s;
   }

   .fade-enter,
   .fade-leave-to {
    opacity: 0;
   }
   .slide-enter-active,
   .slide-leave-active {
    transition: opacity 0.2s;
   }

   .slide-enter,
   .slide-leave-to {
    transform: translateY(-50%) translateX(100vw);
   } 


</style>