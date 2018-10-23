import {defFormJson,defFormJson_2} from './def_form_json.js'
import {deepCopy,colNum} from '../fun.js'

//组件平均高度（在给出每个组件具体高度前先用这个平均高度）
const averageCH=100
//form默认值
const defState=[
  {
    strJson:JSON.stringify(defFormJson), // input标签里的字符串JSON
    components:defFormJson.components, // input标签里的字符串JSON解析后的components属性
    wrapH:Object.keys(defFormJson.components).length*averageCH/colNum(), // 表单外层的高度
  },
  {
    strJson:JSON.stringify(defFormJson),
    components:defFormJson_2.components,
    wrapH:Object.keys(defFormJson_2.components).length*averageCH/colNum(),
  },
]

const form = (state = defState, action) => {
  const newState=deepCopy(state)
  switch (action.type) {
    case 'change_strjson':
      let strJson=action.value
      let components=JSON.parse(strJson).components
      let wrapH=Object.keys(components).length*averageCH/colNum()
      newState[action.idx]={strJson,components,wrapH}
      return newState
    case 'window_w_changing':
      for(let i=0;i<newState.length;i++){
        newState[i].wrapH=Object.keys(newState[i].components).length*averageCH/colNum()
      }
      return newState
    default:
      return state
  }
}

export default form
