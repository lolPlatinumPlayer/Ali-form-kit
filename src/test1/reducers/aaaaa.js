

const work = (state = JSON.stringify(testData), action) => {
  switch (action.type) {
    case 'ASSIGN_INPUTJSON_0':
      return action.value
    default:
      return state
  }
}

export default work

//先把reducer和action写出来
//再写connect（connect两个函数参数的第二个参数都要先了解一下）
//再写组件内的东西


let a = {
  inputJson_0: JSON.stringify(testData),//
  inputJson_1: JSON.stringify(testData),//
  usedJson_0: testData.components,//
  usedJson_1: testData2.components,//
  selectedId: {//
    formId: 0,
    id: 0,
  },
  cloneNum: 1,//
  //以下是没设默认值且有在函数区域出现的state
  colHeight_0:undefined,
  colHeight_1:undefined,
  wrapHeight_0:undefined,
  wrapHeight_1:undefined,
}



/*

1
拆为 （json.used是和json.input同时生成的，formDomWrapH既要响应浏览器宽度也要响应inputJson的变化）
let state={
  form:[
    {
      json_str:1,
      obj:1,
      wrapH:1,
    },
    {
      json_str:1,
      obj:1,
      wrapH:1,
    },
  ]
  cache:{
    selectedId:111,
    cloneNum:111,
  }
}

2. actionTypes
2. actionCreators

* */
