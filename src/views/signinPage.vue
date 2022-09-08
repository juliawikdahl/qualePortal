<script>
   import LoginInfo from '../jsonFiles/signin.json'
   
  export default {
 name: 'signinPage',
 props: {
   ifsuccess: Boolean
 },
 data() {
     return{
         LoginInfo
   }
 },
 methods: {
     HandleSignIn: function() {
         const userName = document.getElementById("username").value;
         const password = document.getElementById("password").value;
         this.LoginInfo.AcceptedLogins.forEach( (item) => {
             if(item.userName == userName && item.password == password) {
               // <Redirect to="/home" />
               document.getElementById('valid').style.display = "block";
               document.getElementById('password-error').style.display = "none";
               document.addEventListener('submit');
               
                 return;
             }
         });
        document.getElementById('password-error').style.display = "block";
        document.getElementById('valid').style.display = "none";
        document.addEventListener('submit');
     }
 }
 }
</script>



<template>
   <div class="my-form ">
 <div class="form">
        <h1 class="h1">Log in</h1>
            
            <div class="box-1">
               <div id="password-error" class="invalid"> <small>Wrong password or username, try again</small></div>
               <div id="valid" class="valid"> <small>sucess</small></div>
               <label for="username">Username:</label>
               <input type="text" id="username" name="username">
             
            </div>

            <div class="box-1">
               <label for="pass">Password:</label>
                  <input type="password" id="password" name="password" minlength="8" required>
                  
            </div>
            
            
             <button id="btn" type="submit" @click="HandleSignIn()" >Log in</button>
            
    
    </div>
</div>
</template>

<style scoped>
   
   .my-form {
       display: flex;
       justify-content: center;
       
     
   }
.valid {
   display: none;
}
   .invalid  {
      color: red;
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
   #btn:hover {
       background-color: white;
       color: black;
       
   }
   
   .form {
     padding-top: 30px;
     padding-bottom: 30px;
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