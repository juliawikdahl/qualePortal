<script>
    import LoginInfo from '../jsonFiles/signin.json'
import AddItemModal from './addItemModal.vue';
  
    
   export default {
    name: "signinComponent",
    methods: {
        getSigninText: function () {
            return this.loggedIn ? "Logout" : "Login";
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
                        this.showLoginForm = false;
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
            loggedIn: false,
            showLoginForm: false,
            add: false,
            username: "",
            password: "",
            LoginInfo,
        };
    },
    components: {AddItemModal }
}
 </script>
 
 
 
 <template>
 <div>
    <div class="userIcon" style="display: flex;">
        
           
                  <router-link :to="{ path: '/login' }">
     <button @click="handleLoginButton()" class="btn"> <v-icon id="userIcon" style="color:white;">mdi-account-outline </v-icon> {{getSigninText()}}  </button>
     </router-link>
       
  
     
     <AddItemModal v-if ="loggedIn" />
    </div>
    

<div v-on:keyup.enter="handleSignIn()" class="my-form " v-if="showLoginForm">
       <div class="form">
            <h1 class="h1">Log in</h1>
            
                <div class="box-1">
                    <div id="password-error" class="invalid"> <small>The username or password you have entered is <br> invalid. Please try again! </small></div>
                    <label for="username">Username:</label>
                    <input v-model="username" type="text" id="username" name="username">
                
                </div>
    
                <div class="box-1">
                    <label for="pass">Password:</label>
                    <input v-model="password" type="password" id="password" name="password"  minlength="8" required>
                </div>
                
                
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
    position: fixed;
    display: table;
    
    }
    .add {
    position: absolute;
    margin-left: 0.4rem;
    margin-top: 2.7rem;
    }
    .invalid  {
       color: red;
       margin-top: 1rem;
    
    
       }
    #password-error {
       display: none;
    }
    .h1 {
       text-align: center;
    }
    #btn {
    margin-top: 1rem;
    border-radius: 5px;
    height: 40px;
    width: 300px;
    cursor: pointer;
    border: 1px solid;
    background-color: rgba(15, 15, 15, 0.867);
    color: white;
    
    }

    /* .login {
   height: 52px;
   min-width: 100px;
   color: black;
   border-radius: 25px;
   padding: 1rem 2rem;
   margin-top: 30px;
   background-color: white;
   text-align: center;
   -webkit-transition: all 0.7s ease;
   transition: all 0.7s ease;
   border: transparent;
   margin-left: 150px;
   cursor: pointer;

   } */
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
 
    </style>