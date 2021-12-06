import axios from 'axios'
import { createStore } from 'vuex'
// import {mapState, mapMutations} from 'vuex'


const store = createStore({
  state(){
    return {
     likes:30,
     likePush : false,
     more:{},
    }
  },
  mutations:{
      plus(state){
          if(state.likePush == false){
              state.likes++
              state.likePush = true;
          }else{
            state.likes--
            state.likePush = false;
          }
      },
      setMore(state, data){
          state.more = {data}
      }
  },
  actions:{
    getData(context){
        axios.get(`https://codingapple1.github.io/vue/more0.json`).then( res => {
            console.log(res);
            context.commit('setMore',res.data)
        //this.more.push(res.data)
      })
    }
  }

})

export default store