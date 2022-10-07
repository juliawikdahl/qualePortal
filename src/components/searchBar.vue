<script>
    export default{
          name: 'searchBar',
          created() {
            this.fetchItems()
      },
      methods: {
        getItems: function() {
          return this.itemsJson.map((i) => { return i.Name });
        },
        fetchItems: async function() {
          const response = await fetch('http://localhost:8084/quickui/items');
          this.itemsJson = await response.json()

          this.items = this.getItems();
        },    
      },
      watch: {
        searchedItem() {
           if(this.searchedItem) 
           {
              const item = this.itemsJson.filter((item) => 
              {
                return item.Name == this.searchedItem
              })[0];
              
              // Route to item
              console.log('item', item);
              this.$router.push({ name: 'item', params: { id: item.Id } });
           }
        },
      },
      data:() => ({
          itemsJson: [],
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
              spellcheck="false"
     
              
      ></v-autocomplete>
             <!-- <input class="searchbar"   type="text" placeholder="Search.. "  /> -->
           
        </div>
       
     
      </template>

      <style>

        .search-b {
          margin-top: 35px;
          margin-left: 20px;
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