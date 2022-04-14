import Vue from 'vue'
import Vuex from 'vuex'
import  moduleA  from './modules/moduleA.js'

Vue.use(Vuex)

//모듈은 윗쪽에 작성하고 아래에서 불러와준다

//
export default new Vuex.Store({
  //state : 값을 저장해서 가져오는 공간
  state: {
    count : 11,
    list : [
      {id : 1, memo : 'a'},
      {id : 2, memo : 'b'},
      {id : 3, memo : 'c'},
      {id : 4, memo : 'd'},
    ],
    name : ['홍길동','성춘향','그린'],
    todos : [
      {id : 1, text : '🍣', done : true},
      {id : 2, text : '🍟', done : false},
      {id : 3, text : '🥯', done : true},
      {id : 4, text : '🌭', done : true},
      {id : 5, text : '🍛', done : false},
      {id : 6, text : '🍔', done : true},
    ],
  },
  //getters : computed와 같은 역할(모든 컴포넌트가 접근이 가능함)
  getters: {
      doneTodosCountGetter (state) {
        //동일한 형식으로 사용할 수있다
        //filter(function(배열의 요소를 담는 변수) {return 값이 참일때 배열에 추가})
        return state.todos.filter(t=> t.done).length
      },
      reverseTodoCountGetter(state) {
        return state.todos.reverse()
      },
      //todo의 id값을 통해 todo객체 반환
      //arrow function 한줄일때는 return 안적어도됨
      getTodoById : (state) => (id) => {
        return state.todos.find((todo) => todo.id ===id);
      },
    },
  mutations: {
    //state인에있는 값을 직접 바꿀때 사용 (data의 methods와 비슷한 역할)
    // 동기적으로 실행 : 반드시 앞의 명령어가 수행된뒤에 실행 (순차적)
    addCount (state) {
      state.count++;
    },
    minusCount (state) {
      state.count--;
    },
    nCount : function (state,n) {
      state.count += n;
      
    }
  },
  // 비동기적으로 실행 : 동시에 실행 (따로 빠져나와서 실행)
  // 요청한 결과가 그 자리에서 주어지지 않음
  //동시에 실행되기 때문에 다른 작업이 실행되고 나중에 결과가 나올 수 있음
  actions: {
    addCount(context) {
      //mutations의 메서드를 들고와 상태변화 state를 추적할 수있다.
      context.commit('addCount')
    },
    //비동기로 실행 + 인자값 받아오기
    timer(context){
      // Matation의 메소드를 commit할때 인자값을 전달하고 싶다면
      // , 를 통해 값을 같이 보내준다.
    setTimeout( () =>context.commit('addCount'),1000)},
    ntimer (context,time) {setTimeout( ()=> context.commit('addCount'),time )},
    timerInterval(context,time) {
    setInterval( ()=>context.commit('addCount'),time )},
  },
  //각각의 모듈로 분리시켜 사용가능 하다
  modules: {
    a : moduleA
  }
});

