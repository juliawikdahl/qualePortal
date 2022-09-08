<template>
  <div id="Tree">
<div
@click="expanded = !expanded"
class="node">

<p class="tree" :style="{'margin-left': `${depth < 1 ? `2` : `3`}rem`,'font-size': `${BoldTitle ? '1.7rem' : '1.2rem'}`, 'font-weight': `${depth < 1 ? '600' : '300'}`}">{{node.name || node.Name}}</p>
</div>
<div v-if="expanded">
  <treeView 
  v-for="child in node.underCategories" 
  :key="child.name" 
  :node ="child"
  :depth="depth + 1"
  />
</div>
</div>
</template>


<script>
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
          expanded: this.shouldBeExpanded
        }
      },
    }
</script>
<style scoped>
  #Tree{
    display: ;
    white-space: nowrap;
   
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

</style>