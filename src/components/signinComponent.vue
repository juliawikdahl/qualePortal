<script>
    import LoginInfo from '../jsonFiles/signin.json'
import AddItemModal from './addItemModal.vue';
  
    
   export default {
    name: "signinComponent",
    methods: {
        getSigninText: function () {
            return this.loggedIn ? "Logout" : "Log in";
        },
        handleLoginButton: function () {
            this.showLoginForm = this.loggedIn ? false : true;
            if (this.loggedIn) {
                this.loggedIn = false;
                this.$router.push({ name: "home" });
                "";
            }
        },
        handleSignIn: function () {
            if (!this.loggedIn) {
                this.LoginInfo.AcceptedLogins.forEach((item) => {
                    if (item.userName == this.username && item.password == this.password) {
                        this.$router.push({ name: "home" });
                        document.getElementById("password-error").style.display = "none";
                        this.loggedIn = true;
                        this.showModal= false;
                        return;
                    }
                    else {
                        document.getElementById("password-error").style.display = "block";
                    }
                });
            }
        },
    },
    data() {
        return {
            showModal:false,
            loggedIn: false,
            showLoginForm: false,
            add: false,
            username: "",
           password: "",
            LoginInfo,
        show4: false,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },

        };
    },
    components: {AddItemModal }
}
 </script>
 
 
 
 <template>
 <div>
     <div class="userIcon" style="display: flex;">
        
           
                  <router-link :to="{ path: '/login' }"> 
     <button   @click="handleLoginButton(), showModal = true" class="btn"> <v-icon id="userIcon" style="color:white;" @click="showModal = false" >mdi-account-outline </v-icon>  {{getSigninText()}}  </button>
     </router-link>
       
  
     
     <AddItemModal v-if ="loggedIn" />
     

    </div> 

    <div class="modal-overlay" v-if="showModal" @click="showModal =false"></div>
      
        
   
<div class="modal" v-if="showModal"> 
   

<div class="add-form">
       
    <h1 class="h1"  >Login</h1>
  

      <div id="password-error" class="invalid"> <small>The username or password you have entered is invalid. Please try again! </small></div>
      <v-col cols="12">
                <v-text-field
                  label="Username*"
                  required
                  v-model="username"
                ></v-text-field>
            </v-col>
  

  <v-col cols="12">
                <v-text-field
                  label="Password*"
                  :type="show4 ? 'text' : 'password'"
                  :append-icon="show4 ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="show4 = !show4"
                  v-model="password"
                  required
                ></v-text-field>
              </v-col>


         <button id="btn" type="submit" @click="handleSignIn()">Log in</button>
 
 </div>
   

</div>

</div>
 </template>
 
 <style scoped>
   .userIcon {
   margin-left: 8rem;
   }

    .my-form {
     top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    display: table;
    
    }
    .add {
   
    margin-left: 0.4rem;
    margin-top: 2.7rem;
    }
    .invalid  {
       color: red;
       margin-top: 1rem;
       margin-left: 0.8rem;
    
    
       }
    #password-error {
       display: none;
    }
    .h1 {
       text-align: center;
    }
    #btn {
    margin-top: 2.3rem;
    height: 40px;
    width: 300px;
    cursor: pointer;
    border: 1px solid;
    background-color: rgba(15, 15, 15, 0.867);
    color: white;
    margin-left: 100px;
 
    }


   .btn-add {
    height: 52px;
   min-width: 100px;
   color: black;
   border-radius: 25px;
   padding: 1rem 2rem;
   padding-right: 3rem;
   margin-top: 30px;
   margin-right: -3rem;
   margin-left: 3rem;
   background-color: white;
   text-align: center;
   -webkit-transition: all 0.7s ease;
   transition: all 0.7s ease;
   border: transparent;
   cursor: pointer;
    
   }
    #btn:hover {
        background-color: white;
        color: black;
        
    }
    
    .form {
      color: black;
      padding-top: 30px;
      padding-bottom: 50px;
      padding-left: 50px;
      padding-right: 50px;
      box-shadow: 1px 2px 12px 4px #77515148;
     
    }
    

    
    .box-1 {
        margin-bottom: 15px;
    }
    label {
     display: block;
     font: .9rem 'Fira Sans', sans-serif;
     margin-bottom: 0.4rem;
 
 }
 
 input {
    border: 1px solid;
    height: 2rem;
    width: 100%;
    
 }
    input[type='submit'],
    label {
     
     margin-top: 1rem;
 }

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
    padding: 3rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    width: 600px;
    height: 450px;
    display: table;
    color: black;
    background-color: rgb(255, 255, 255);


   }
 
    </style>