<template>
  <div id="app">
    <!--store.state.count를 통해서 바로 값을 가져올 수있다-->
    <h3>1.카운터에서 가져온 값(index.js에 저장)</h3>
    <p>{{count}}</p>

    <h2>2.list라는 배열을 li로 가져오기</h2>
    <ul>
      <li v-for="list in $store.state.list" :key="list.id">
        {{list.memo}}
      </li>
    </ul>

    <!--index.js에 name : ['홍길동','성춘향','그린']을 추가하고
      아래에 computed를 이용해서 간략하게 만들어 출력해보기
    -->
    <h3>3. 배열을 computed로 가져와서 출력</h3>
      <ul>
        <li v-for="(name,index) in name" :key="index">
          {{name}}
        </li>
      </ul>

      <h3>4. todo list값 filter.length가져오기(현재 컴포넌트의 computed에 저장)</h3>
      <!--filter : 함수값이 참이라면 출력-->
      <p>{{doneTodosCount}}</p>

      <h3>5. getter(index.js)에 저장되어있는 todo list값 filter.length가져오기</h3>
      <p>{{doneTodosCountGetter}}</p>

      <h3>8(버튼을 누르면 count값 1씩증가,감소)</h3>
      <p style="color:red">{{count}}</p>
      (1)index.js store에 저장되어있는거 직접 가져오기 : 
        <button @click="$store.commit('addCount')">증가</button>
        <button @click="$store.commit('minusCount')">감소</button> <br><br>
      
      <p>(2) 컴포넌트 내부 methods에 함수를 따로 불러와서 사용 : </p>
      mutations에 작성 : <button @click="addCount">추가(mutations)</button> <br><br>
      actions에 작성 :<button @click="addCountAction">추가(action)</button> <br><br>
      actions에 작성 :<button @click="timer">1초뒤 추가(action)</button> <br><br>
      actions에 작성 :<button @click="ntimer(5000)">5초뒤 추가(action)</button> <br><br>

        <!--버튼을 누르면 1초마다 count값이 1씩 증가하는 action을 만들어 추가하기
        setInterval 사용-->
        acrions에 작성 : <button @click="timerInterval">1초마다 추가(actions)</button> <br><br>

      <h3>9. 모듈추가</h3>
      <!--모듈의 state값을 꺼내올때 : $store.state.모듈이름.값-->
      <p>{{$store.state.a.modulename}}</p>
      버튼을 클릭하면 mutation안의 값이 전달되서 출력이 변함 : 
      <button id="btn" @click="$store.commit('nameChange')">클릭</button>


      <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components : {
    HelloWorld,
  },
  computed : {
    count () {
      //{{--}}안의 내용이 길어지면 computed를 통해서 출력해줄수있다.
      return this.$store.state.count
    },
    name () {
      return this.$store.state.name;
    },
    doneTodosCount () {
      return this.$store.state.todos.filter( todo => todo.done).length
    },
    doneTodosCountGetter () {
      //store getters를 통해 계산된 내용을 컴포넌트에 가져와서 사용함
      return this.$store.getters.doneTodosCountGetter;
    }
  },
  methods : {
    //mutation의 메서드는 commit을통해 들고온다
    addCount : function() {
      this.$store.commit('addCount')
    },
    //acionts의 메서드는 dispatch을통해 들고온다
    addCountAction () {
      this.$store.dispatch('addCount')
    },
    timer () {
      this.$store.dispatch('timer')
    },
    ntimer (time) {
      this.$store.dispatch('ntimer',time)
    },
    timerInterval() {
      this.$store.dispatch('timerInterval',1000)
    }

  },
  mounted () {
    console.log('app-mounted')
    //this앞에 붙여주고 1초마다 숫자가 올라가는 함수 mounted함
    //이벤트나 비동기 함수를 사용할 때 사용
    this.timerInterval();

    //자바스크립트를 사용해서 BOM에 접근가능
    window.alert('app-mounted')

    //자바스크립트를 사용해서 DOM에 접근가능
    const btn = document.querySelector('#btn');
    btn.innerHTML = "이름 바꾸기"

    //js모듈을 만들어서 추가해줄수도있다.
  },
  created () {
    console.log('app-created')
  },
  updated () {
    console.log('app-updated')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
