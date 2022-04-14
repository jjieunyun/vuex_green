

//모듈을 export하는 방법
/* 1. 앞에 export만 써서 하나의 개체 자체를 보내는 방법
export const moduleA = {
    state : ( ) => ({
      modulename: '모듈을 통해 보여줄 내용'
    }),
      mutations : {}
  };


*/

//2. 변수로 묶어서 보내기 : export default moduleA

//3. export default로 보내는 방법
//mutation이라는 변수에 넣어서 보내기(식별자로 보내기)


const state = ( ) => ({
    modulename: '모듈을 통해 보여줄 내용'
  })

  const mutations = {
      nameChange(state) {
        state.modulename = "값이 바뀌었습니다"
      }
  }


export default {
    state,
    mutations
}