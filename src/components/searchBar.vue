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
        </div>
       
     
      </template>

      <style>

        .search-b {
          margin-top: 35px;
          margin-left: 20px;
          height: 52px;
          width: 400px;
        }
  
    
      </style>