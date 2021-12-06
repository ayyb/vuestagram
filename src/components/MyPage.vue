<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input @input="search($event.target.value)" placeholder="🔍" />
    <div class="post-header" v-for="(item, idx) in follower" :key="idx">
        <div class="profile" :style="{backgroundImage:`url(${item.image})`}"></div>
        <span class="profile-name" >{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  name: "mypage",
  setup() {
    let follower = ref([]);
    let followerOriginal = ref([])
    function search(searchWord){
        let newArray = followerOriginal.value.filter((d)=>{
            return d.name.indexOf(searchWord) != -1
        });
        follower.value = [...newArray];
    }
    onMounted(() => {
      axios.get("/follower.json").then((a) => {
        follower.value = a.data;
        followerOriginal.value = [...a.data];
      });
    });
    return { follower , search };
  },
};
</script>

<style>
</style>