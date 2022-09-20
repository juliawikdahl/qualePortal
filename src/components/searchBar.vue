<script>
     import categoryJson from '../jsonFiles/categories.json'
    export default{
          name: 'searchBar',
          mounted() {
        this.items = this.getCategories();
        console.log(this.getCategories())
      },
      methods: {
        goToItem: function(item) {
          this.$router.push({ name: 'item', params: { id: item.Id } });
        },  

        getCategories: function() {
          return categoryJson.Categories.map((cat) => { return cat.name });
        }
        
      },
      data:() => ({
          items: [],
       
      })
    
    
    }
    </script>


<template>
  
    
        <div class="search-b">
       <v-autocomplete
          
             dense
              filled
              rounded
              solo
              placeholder="Search..."
              click:prepend-inner
              :items="items"
             
         
    
      ></v-autocomplete>
             <!-- <input class="searchbar"   type="text" placeholder="Search.. "  /> -->
             <v-icon class="search">mdi-magnify</v-icon>
                  
           
             
        </div>
       
     
      </template>

      <style>

        .search-b {
          margin-top: 35px;
          margin-left: 200px;
          height: 52px;
          width: 400px;
        }
    .searchbar {
      display: flex;
      font-size: 15px;
      margin-top: 50px;
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