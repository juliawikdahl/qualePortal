<template>
<div>
    <p v-for="item in itemss.Components" :key="item.Id">{{item.Id}}</p>
    <p v-for="item in itemss.Components" :key="item.Id">{{item.Name}}</p>
    <p v-for="item in itemss.Components" :key="item.Id">{{item.Description}}</p>
<!-- <textarea v-model="items.name"></textarea>  -->

</div>

</template>

<script>
   import itemsJson from '../jsonFiles/items.json'
    export default{
          name: "itemComponent",
              
      data() {
        return{
          itemss: itemsJson
      }
    },
        
    // data:() => ({
    //     items{
    //         name:""
    //     }
    // })
  
} 
    </script>
