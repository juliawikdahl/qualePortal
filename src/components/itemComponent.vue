<template>
<div>
    <div class="itemCards">  <button  class="btnGit">Git</button><button class="btnEdit">Edit</button> 
       <div class="itemName">{{selectedItem.Name}}  </div>
   
        <div class="itemDes">{{selectedItem.Description}}</div>
      <div><div class="codeTitle">Json <button  class="btnConvert">Xml</button><button class="btnCopy" @click="copyToClipboard()">Copy</button></div> <div class="itemIndex">{{selectedItem.Index}}</div></div>   
    
    </div>
</div>

</template>

<script>
   import itemsJson from '../jsonFiles/items.json'
   
    export default{
          name: "itemComponent",
      mounted() {
        this.getItemById(this.$route.params.id);
      },
      data() {
        return{
          items: itemsJson.Components,
          selectedItem: {}
      }
    },        
      watch: {
        '$route.params.id': function() {  
          this.getItemById(this.$route.params.id);
        }
      },
      methods: {
        getItemById(id) {
          const item = this.items.filter(item => item.Id == id);
          if(item.length == 0) {
            // 404 error page
            console.log('Error');
            return;
          }
          this.selectedItem = item[0];
        }, 
       copyToClipboard: function(){
        navigator.clipboard.writeText(this.selectedItem.Index)

       },
       
      }
    }
    </script>
<style>
.itemCards{
   margin-left: 5rem;
   margin-right: 23rem;
   margin-top: 5rem;
}
.itemName{
   
    font-weight: 800;
    font-size: 2rem;
 
  margin-top: 1rem; margin-bottom: 1rem;
}
.itemDes{
    
  max-width: 70rem;
 margin-bottom: 1rem;
}
.itemIndex{
  max-width: 75rem;
    padding: 1rem;
    border-radius: 5px;
    background-color: rgb(182, 209, 224);
    
    
    min-height: 10rem;
    min-width: 35rem;
  margin-bottom: 0.3rem;
}
.codeTitle{
  border-radius: 5px;
    color:rgb(94, 108, 116);
    background-color: rgb(182, 209, 224);
   padding-left: 1rem;
    min-width: 30rem;
 border: 1px solid rgb(147, 169, 182);
}
.btnConvert{
margin-left: 66rem;
margin-right: 0.7rem;
}
.btnGit{
margin-left: 70rem;
margin-right: 0.7rem;
}



</style>