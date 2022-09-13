<script>
    import LoginInfo from '../jsonFiles/signin.json'
  
    
   export default {
  name: 'signinComponent',
  methods: {
    getSigninText: function() {
        return this.loggedIn ? 'Logout' : 'Login';
    },
      HandleSignIn: function() {
          this.LoginInfo.AcceptedLogins.forEach( (item) => {
              if(item.userName == this.username && item.password == this.password) {
                //  this.$router.push({ name: 'home' });
                document.getElementById('password-error').style.display = "none";
                this.loggedIn = true;
                this.dialog = false;
                  return;
              }
          });
         document.getElementById('password-error').style.display = "block";
      },
    
  },
 data() {
return {
    loggedIn: false,
    dialog: false,
    username: '',
    password: '',
    LoginInfo,
}
 }
  
  }
 </script>
 
 
 
 <template>
 <div>
     <button @click="dialog = true" class="login">{{getSigninText()}}</button>
 
    <div class="my-form " v-if="dialog">
  <div class="form">
         <h1 class="h1">Log in</h1>
         
             <div class="box-1">
                <div id="password-error" class="invalid"> <small>The username or password you have entered is invalid. Please try again! </small></div>
                <label for="username">Username:</label>
                <input v-model="username" type="text" id="username" name="username">
              
             </div>
 
             <div class="box-1">
                <label for="pass">Password:</label>
                   <input v-model="password" type="password" id="password" name="password"  minlength="8" required>
                   <!-- @keyup.enter="HandleSignIn()" -->
             </div>
             
             
              <button id="btn" type="submit" @click="HandleSignIn()">Log in</button>
             
   
     
     </div>
 </div>

</div>
 </template>
 
 <style scoped>
    
    .my-form {
        display: flex;
      justify-content: center;
         margin-left: 20%;
         margin-top: 5%;
      
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

    .login {
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
   position: absolute;
   margin-top: -100px;
   margin-left: -200px;
   }
    #btn:hover {
        background-color: white;
        color: black;
        
    }
    
    .form {
      padding-top: 30px;
      padding-bottom: 50px;
      padding-left: 50px;
      padding-right: 50px;
      box-shadow: 1px 2px 12px 4px #77515148;
     
    }
    
    /* .form-control {
        width: 290px;
        height: 30px;
        border-radius: 5px;
        
    } */
    
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