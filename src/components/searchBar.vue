<script>
    
    export default{
          name: 'searchBar',
      
      methods: {
        goToItem: function(item) {
          this.$router.push({ name: 'item', params: { id: item.Id } });
        },  
        
      }}
    </script>


<template>
  
    
        <div>
             <input class="searchbar"   type="text" placeholder="Search.. "  />
             <v-icon class="search">mdi-magnify</v-icon>
             
           
             
        </div>
       
     
      </template>

      <style>
    .searchbar {
      display: flex;
      font-size: 15px;
      margin-top: 30px;
      margin-left: 150px;
      height: 52px;
      min-width: 400px;
      background-color: white;
      border: transparent;
      border-radius: 25px;
      padding-left: 20px;
      border: 0px solid;
      outline: none;
    
      
    }
    a {
      text-decoration: none;
      
    }
    
    ::placeholder {
   
      text-decoration: none;
    
      
    }
    .searchbar:hover {
     
     box-shadow: 0 0 8px rgb(152, 150, 150);
     border: 0px solid;
     outline:none;
     border: none;
    }
    .search {
        position: absolute;
        margin-left: 500px;
        margin-top: -71px;
    }
    
      </style>