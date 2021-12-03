<template>
  <div>
  <Post v-for="(item,idx) in postList" :key="idx" :postList="item" />
</div>
</template>

<script>
import Post from './Post.vue'
export default {
    name : 'Container',
    components:{
        Post
    },
    props:{
        postList : Array
    }
}
</script>
    
<style>
</style>