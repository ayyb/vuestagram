<template>
  <div
    class="filter-item"
    :class="[filter]"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <slot name="a"></slot>
    <button @click="fire">클릭</button>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    image: String,
    filter: Array,
  },
  data() {
    return {
    };
  },
  methods:{
      fire(){
          this.emitter.emit('updateImage',this.filter)
      }
  }
};
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}
</style>