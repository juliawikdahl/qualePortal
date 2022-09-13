<!-- <script>
    import Modal from "vue-bs-modal";
  
   
  // export default {
  //   name: 'Modal',
  //   methods: {
  //     close() {
  //       this.$emit('edit-modal')
  //     }
  //   }
  // }
  
  export default {
  
    data() {
      return {
        showModal:false
      }
    }
  }
  
  // $('document').ready(function(){
  //   $('.button2').on('click', function(){
  //      $('.modal').addClass('modal-is-active');
  //      $('.container').addClass('container-is-blurred');
  //   });
    
  //     $('.modal').on('click', function(){
  //         if($('.modal').hasClass('modal-is-active'))
  //         {
  //          $('.modal').removeClass('modal-is-active');
  //          $('.container').removeClass('container-is-blurred');
  //         }
  //     });    
  //   });
  
  </script>
  
  
  <template> 
  
  <div class="modal-overlay" v-if="showModal" @click="showModal =false"></div>
      <div class="code"> 
         <div>
          <div>
            
            <button class="button">länk</button>
            
               <button @click="showModal =true" class="button2">Edit</button>
            
            <transition-group name="fade" appear>
             
            </transition-group>
  
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
           
           <div>
              <h1 class="title">Category</h1>
           </div>
           <div class="beskrivning"> 
             <p>Besläktade ord: beskriva, beskrivande Jämför: berättelse, framställning, karaktärisering, signalement, skildring, teckning</p>
           </div>
          
           <div class="kodsnutt"> 
             <p>Kartläggning, utveckling och förbättring av IT-lösningar – såväl på en aggregerad enterprise-nivå som med fokus på specifika applikationer.Kartläggning, utveckling och förbättring av IT-lösningar – såväl på en aggregerad enterprise-nivå som med fokus på specifika applikationer.Kartläggning, utveckling och förbättring av IT-lösningar – såväl på en aggregerad enterprise-nivå som med fokus på specifika applikationer.</p>
           </div>
         
         </div>
      </div>
      
     
     
  </template>
  
  <style>
     .code {
      display: flex;
      justify-content: center;
      
     }
  
     .title {
      text-align: center;
     }
  
     .button {
      margin-left: 520px;
      margin-bottom: 5px;
      margin-right: 13px;
      cursor: pointer;
     }
     
     .button2 {
      cursor: pointer;
      
     }
  
     .beskrivning {
      width: 600px;
      padding: 10px;
     }
     .kodsnutt {
      background-color: rgba(216, 214, 214, 0.897);
      width: 600px;
      padding: 20px;
     }
  
     .code {
      position: relative;
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
     /* .fade-enter-active,
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
     } */
  
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
     .form3 {
      /* margin-top: 100px; */
      margin-bottom: 8px;
      width: 300px;
      margin-left: 100px;
      margin-right: 100px;
      height: 30px;
     }
     .form2 {
  
      margin-bottom: 8px;
      width: 300px;
      margin-left: 100px;
      margin-right: 100px;
      height: 30px;
  
     }
     .names {
      margin-left: 100px;
     }
     .container-is-blurred {
        filter: blur(3px);
     }
     .modal-is-active {
       display: block;
      cursor: pointer ;
     }
  
  </style> -->