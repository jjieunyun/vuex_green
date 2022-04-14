<template>
  <div class="hello">
    <hr>
    <h1 style="color:blue">HelloWorld컴포넌트</h1>
      <h3>6. 컴포넌트에서 getters불러오기</h3>
      <p>{{doneTodosCountGetter}}</p>

      <h3>7. todos를 거꾸로 가져오는 getters를 만들어서 출력 </h3>
      <p>{{reverseTodoCountGetter}}</p>

      <p>!!!!!!!!!!!!!!!!{{getTodoById(1)}}</p>

      <h3>mapMutation으로 addcount가져오기 </h3>
      <p>{{count}}</p>
      <button @click="addCount">++</button>

      <h3>mapMutation으로 addcount가져오기 </h3>
      <p>{{count}}</p>
      <button @click="nCount(num)">{{num}}증가</button>

      <!--
        todos를 거꾸로 가져오는 getters를 만들어서 출력 
        reverse()사용
      -->
      
      
  </div>
</template>

<script>
//getter 불러올때 - computed안에 넣어줘야함
//vuex의 mapGetters를 통해 store에 있는 getters를 가져온다
//vuex의 mapMutation을 통해 store에있는 mutations의 값을 가져온다

import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'
import { mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  data : function(){
    return {
      num : 100,
    }
  },
  computed : {
    ...mapGetters ([
      'doneTodosCountGetter',
      'reverseTodoCountGetter',
      'getTodoById'
    ]), 
  },
  methods : {
      ...mapMutations ([
      'addCount',
      'ncount',
    ]),
    ...mapActions([
      'ntimer'
    ])
  },
  mounted () {
    console.log('hello-mounted')
  },
  created () {
    console.log('hello-created')
  },
  updated () {
    console.log('hellop-updated')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>