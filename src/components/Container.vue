<template>
  <div>
    <!-- 화면 리스트     -->
    <div v-if="step == 0">
      <Post v-for="(item, idx) in postList" :key="idx" :postList="item" />
    </div>
    <!-- 필터선택페이지 -->
    <div v-if="step == 1">
      <div
        class="upload-image"
        :class="[selectFilter]"
        :style="{ backgroundImage: `url(${selectImg})` }"
      ></div>
      <div class="filters">
        <FilterBox
          :image="selectImg"
          :filter="item"
          v-for="item in filters"
          :key="item"
        ><template v-slot:a>{{item}}</template></FilterBox>
      </div>
    </div>

    <!-- 글작성페이지 -->
    <div v-if="step == 2">
      <div
        class="upload-image"
        :class="[selectFilter]"
        :style="{ backgroundImage: `url(${selectImg})` }"
      ></div>
      <div class="r">
        <textarea
          class="write-box"
          @input="$emit('write', $event.target.value)"
          placeholder="write!"
        ></textarea>
      </div>
    </div>
    <div v-if="step == 3">
      <MyPage></MyPage>
    </div>
  </div>
</template>

<script>
import FilterBox from "./FilterBox.vue";
import Post from "./Post.vue";
import MyPage from "./MyPage.vue";
export default {
  name: "Container",
  components: {
    Post,
    FilterBox,
    MyPage
},
  props: {
    postList: Array,
    step: Number,
    selectImg: String,
  },
  mounted(){
    this.emitter.on('updateImage',(cls) =>{
      this.selectFilter = cls;
    })
  },
  data() {
    return {
      contents: "",
      selectFilter:"",
      filters: [
        "aden",
        "_1977",
        "brannan",
        "brooklyn",
        "clarendon",
        "earlybird",
        "gingham",
        "hudson",
        "inkwell",
        "kelvin",
        "lark",
        "lofi",
        "maven",
        "mayfair",
        "moon",
        "nashville",
        "perpetua",
        "reyes",
        "rise",
        "slumber",
        "stinson",
        "toaster",
        "valencia",
        "walden",
        "willow",
        "xpro2",
      ],
    };
  },
};
</script>
    
<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>