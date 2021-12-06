<template>
  <div>
    <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <p>{{$store.state.more}}</p>
  <button @click="$store.dispatch('getData')">더보기 버튼</button>
  <Container :postList="postList" :step="step" :selectImg="selectImg" @write="contents = $event"/>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" @change="upload" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
 <button @click="click">더 보기</button>
 <button @click="display0">홈화면</button>
 <button @click="display1">필터화면</button>
 <button @click="display2">작성화면</button>
  </div>
</template>

<script>
import Container from './components/Container.vue';
import axios from 'axios';
export default {
  name: 'App',
  components: {
    Container
  },
  mounted(){
    this.emitter.on('updateImage',(cls)=>{
      this.filter = cls;
    })
  },
  data(){
    return{
      postList : [
  {
    name: "Kim Hyun",
    userImage: "https://placeimg.com/100/100/arch",
    postImage: "https://placeimg.com/640/480/arch",
    likes: 36,
    date: "May 15",
    liked: false,
    content: "오늘 무엇을 했냐면요 아무것도 안했어요 😫",
    filter: "perpetua"
  },
  {
    name: "John Doe",
    userImage: "https://placeimg.com/200/200/people",
    postImage: "https://placeimg.com/640/480/people",
    likes: 20,
    date: "Apr 20",
    liked: false,
    content: "흔한 자랑스타그램",
    filter: "clarendon"
  },
  {
    name: "Minny",
    userImage: "https://placeimg.com/100/100/animals",
    postImage: "https://placeimg.com/640/480/animals",
    likes: 49,
    date: "Apr 4",
    liked: false,
    content: "우리집 개는 화장실 물도 내림",
    filter: "lofi"
  }
],
  i:0,
  step:0,
  selectImg:'',
  contents:'',
  filter:'',
    }
  },
methods:{
    click: function(){
      axios.get(`https://codingapple1.github.io/vue/more${this.i}.json`).then( res => {
        console.log(res.data)
        this.postList.push(res.data)
      })
      this.i++
    },
    display0:function(){
      this.step = 0;
    },
    display1:function(){
      this.step = 1;
    },
    display2:function(){
      this.step = 2;
    },
    upload(e){
      console.log(e)
      let files = e.target.files;
      let url = URL.createObjectURL(files[0]);
      console.log(url);
      this.selectImg = url;
      this.step++;
    },
    publish(){
      var temp = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.selectImg,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.contents,
        filter: this.filter
      };
      console.log(temp.filter)
      this.postList.unshift(temp);
      this.step = 0;
      //
    }
    
  }
}
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
