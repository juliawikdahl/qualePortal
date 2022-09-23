<script>
     import ItemJson from '../jsonFiles/items.json'
     import categoryJson from '../jsonFiles/categories.json'

    export default{
          name: 'searchBar',
          mounted() {
        this.items = this.getItems();
      },
      methods: {
        goToItem: function(item) {
          this.$router.push({ name: 'item', params: { id: item.Id } });
        },  

        getItems: function() {
          return ItemJson.Components.map((i) => { return i.Name });
        }
        
      },
      watch: {
        searchedItem() {
           console.log('valt item', this.searchedItem);
        },
      },
      data:() => ({
          items: [],
          searchedItem: ''
      })
    }
    </script>


<template>
  
    
        <div class="search-b" data-app>
       <v-autocomplete
              v-model="searchedItem"
              dense
              rounded
              solo
              placeholder="Search..."
              click:append
              :items="items"
              allow-overflow
              append-icon = mdi-magnify
              clearable
     
              
      ></v-autocomplete>
             <!-- <input class="searchbar"   type="text" placeholder="Search.. "  /> -->
             
                  
           
             
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