<template>
<div>
    <div class="itemCards"  v-for="item in itemss.Components" :key="item.Id">
       <div class="itemName">{{item.Name}}</div>
   
        <div class="itemDes">{{item.Description}}</div>
      <div><div class="codeTitle">Json <button  class="btn1">Xaml</button><button class="btn2">Copy</button></div> <div class="itemIndex">{{item.Index}}</div></div>   
    
    </div>
  
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
        
  
} 
    </script>
<style>
.itemCards{
   margin-left: 5rem;
   margin-right: 20rem;
   margin-top: 8rem;
}
.itemName{
   
    font-weight: 800;
    font-size: 2rem;
 
  margin-top: 1rem; margin-bottom: 1rem;
}
.itemDes{
    
  
 margin-bottom: 1rem;
}
.itemIndex{
    padding: 1rem;
    background-color: rgb(182, 209, 224);
    
    
    min-height: 10rem;
    min-width: 30rem;
  margin-bottom: 0.3rem;
}
.codeTitle{
    color:rgb(94, 108, 116);
    background-color: rgb(182, 209, 224);
   padding-left: 1rem;
    min-width: 30rem;
 border: 1px solid rgb(147, 169, 182);
}
.btn1{
margin-left: 68rem;
margin-right: 0.7rem;
}

</style>