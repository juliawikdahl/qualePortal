<template>
  <div id="Tree">
<div >
  <h2 class="root" v-if="depth == 0">Categories</h2>
</div>
<div
@click="expanded = !expanded"
:style="{'margin-left': `${depth < 2 ? `0` : `15`}px`}"
class="node">

<p class="tree" :style="{'font-size': `${BoldTitle ? '20px' : '16px'}`, 'font-weight': `${depth < 2 ? '900' : '300'}`}">{{node.name}}</p>
</div>
<!-- <treeView 
v-if="expanded"
v-for="child in node.underCategories" 
:key="child.name" 
:node ="child"
:depth="depth + 1"
/> -->
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