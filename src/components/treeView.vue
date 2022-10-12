
<template>
  <div id="Tree">
<div
class="node">
<p @click="showCategory()"  class="tree" :style="{'margin-left': `${depth < 1 ? `2` : `3`}rem`,'font-size': `${BoldTitle ? '1.7rem' : '1.2rem'}`,  'font-weight': `${depth < 1 ? '600' : '300'}`}" >  {{node.name}} <v-icon @click="expanded = !expanded" v-if="depth == 0" id="arrow"  style="color:white" > mdi-chevron-down </v-icon> {{node.Name}}  </p>
<div v-if="expanded && items.length > 0" :style="'margin-left: 3rem'"> 

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
          
            this.getItemsFromJson([]);
          }
        }
      },
    }
</script>
<style scoped>
  #Tree{
   white-space: nowrap;
   max-width: 17rem;
   min-width: 17rem;
   color: white;
   background-color: rgb(48, 47, 47);
  }
  #Tree p{
    padding-bottom: 2rem;
  }
  .tree:hover {
    color: darkgray;
  }

</style>
