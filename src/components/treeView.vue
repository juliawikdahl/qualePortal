<template>
  <div id="Tree">
<div
class="node">


<p @click="showCategory()"  class="tree" :style="{'margin-left': `${depth < 1 ? `2` : `3`}rem`,'font-size': `${BoldTitle ? '1.7rem' : '1.2rem'}`, 'font-weight': `${depth < 1 ? '600' : '300'}`}"> {{node.name}} {{node.Name}} </p>
<div v-if="expanded && items.length > 0" :style="'margin-left: 3rem'"> <v-icon id="arrow"  style="color:white" > mdi-chevron-down </v-icon>
<!-- <p @click="goToItem(item)" v-for="item in items" :key="item.Name" :class="item.Name">{{item.Name}} <v-icon>mdi-chevron-down</v-icon></p> -->
</div>
</div>
<div v-if="expanded">
  <treeView 
  v-for="child in node.underCategories" 
  :key="child.name" 
  append-icon = mdi-pencil
  :node ="child"
  :depth="depth + 1"
  @click="goToItem(item)"
  />
</div>
</div>

</template>


<script>


import itemsJson from '../jsonFiles/items.json'
      export default{
      name: 'treeView',
      props:{
        shouldBeExpanded: Boolean,
        node: Object,
        BoldTitle: Boolean,
        depth:{
          type: Number,
          
          default:0,
        }
      },
      data(){
        return{ 
          expanded: this.shouldBeExpanded,
          items: [],
        }
      },
      methods: {
        showCategory: function() {
          if(this.depth == 0) {
            this.$router.push({ name: 'category', params: { name: this.node.name } });
          }
          else {
          this.$router.push({ name: 'undercategory', params: { name: this.node.Name } });
          }
        },
        matchingIds: function() {
          return itemsJson.Components.filter((item) => {
            return this.node?.ComponentsIds?.includes(item.Id);
   
          });
         
        },
        getItemsFromJson: function() {
          this.items = this.matchingIds();
        },
      },
        watch: {
        expanded(isExpanded) {
          if (isExpanded) {
            // hämta items
            this.getItemsFromJson([]);
          }
        }
      },
    }
</script>
<style scoped>
  #Tree{
   
    white-space: nowrap;
   max-width: 15rem;
   min-width: 15rem;
    height: auto;
    color: white;
   background-color: rgb(48, 47, 47);
   
   /* margin-right: 100rem;
   margin-bottom: 4px;
    */

  }
  #Tree p{
    
    padding-bottom: 2rem;
   /* margin-right: 100rem;
   margin-bottom: 4px;
   white-space: nowrap;  */

  }
 .node{
 
 }
 .root{
  
 }
 .tree{


 }
.Rooibos{
  color: brown;
  
}

#arrow {
  color: white;
}
</style>