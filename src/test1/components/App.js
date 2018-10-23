import React from 'react'
import { connect } from 'react-redux'
import FormComponent from './FormComponent'
import {arrItemIdx,deepCopy} from '../fun'
//本项目中偶尔会将component或components缩写为com

class BasicComponent extends React.Component {
  constructor(props) {
    super(props)
    this.windowWChanging=this.windowWChanging.bind(this)
    this.inputJsonChange=this.inputJsonChange.bind(this)
    this.changeSelectedId=this.changeSelectedId.bind(this)
    this.addComponent=this.addComponent.bind(this)
    this.cloneNumChange=this.cloneNumChange.bind(this)
    this.clone=this.clone.bind(this)
    this.del=this.del.bind(this)
    this.cleanRules=this.cleanRules.bind(this)
    this.state={
      selectedId:{
        id:[]
      }
    }
  }
  componentDidMount() {
    const wrapThis=this
    this.windowWChanging()
    window.onresize=this.windowWChanging
    window.document.onkeydown =(evt)=>{//监听按键
      evt = (evt) ? evt : window.event
      if (evt.keyCode) {
        if(evt.keyCode === 16)//shift
          wrapThis.setState({keyboard:'shift'})
        if(evt.keyCode === 17)//ctrl
          wrapThis.setState({keyboard:'ctrl'})
      }
    }
    window.document.onkeyup = ()=>wrapThis.setState({keyboard:undefined})
  }
  windowWChanging(){
    this.props.windowWChanging()
  }
  inputJsonChange(event){
    this.props.changeStrJson(event.target.value,event.target.id)
  }
  changeSelectedId(event){ // 这个函数逻辑文件名为“设置selectedId逻辑”
    const rightKey=this.state.keyboard==='shift'||this.state.keyboard==='ctrl'
    if(!rightKey) // 如果没按功能键
      this.setState({
        selectedId: {
          formId: event[1],
          id:[event[0]],
        }
      })
    else if(this.state.selectedId && this.state.selectedId.formId===event[1]) {// 按了功能键 && 函数执行前有选中组件 && 选中组件所在表单与点击表单一致
      // 取值
      const componentsIdArr=Object.keys(this.props['components_'+event[1]])//要操作的表单的组件id组成的数组
      const oldId=this.state.selectedId.id//之前选中组件的组件id组成的数组
      let oldIdIdx=[]//之前选中组件的序号组成的数组
      for(let i=0;i<oldId.length;i++){
        oldIdIdx.push(arrItemIdx(oldId[i],componentsIdArr))
      }
      const clickIdIdx=arrItemIdx(event[0],componentsIdArr)//目前点击组件的序号
      let id

      if(this.state.keyboard==='shift'){
        // 计算新的id
        if(clickIdIdx<oldIdIdx[0])
          id=[
            ...componentsIdArr.slice(clickIdIdx,oldIdIdx[0]),
            ...oldId,
          ]
        else if(clickIdIdx>oldIdIdx.slice(-1)[0])
          id=[
            ...oldId,
            ...componentsIdArr.slice(oldIdIdx.slice(-1)[0]+1,clickIdIdx+1),
          ]
        else
          id=oldId
      }

      if(this.state.keyboard==='ctrl'){
        // 计算新的id
        if(clickIdIdx<oldIdIdx[0])
          id=[
            event[0],
            ...oldId,
          ]
        else if(clickIdIdx>oldIdIdx.slice(-1)[0])
          id=[
            ...oldId,
            event[0],
          ]
        else{
          oldId.splice(clickIdIdx-oldIdIdx[0],1)//这里是否引用传递结果应该是一样的
          id=oldId
        }
      }

      this.setState({
        selectedId: {
          formId: event[1],
          id,
        }
      })
    }
  }
  addComponent(event){ // 传参为[被插入表单的id,作为位置参考的组件的id,插入于参考组件的上方还是下方,克隆组件的dataName,克隆组件的id]
    const p=this.props
    const {selectedId}=this.state
    let componentId_add=deepCopy(selectedId.id)
    const componentNum_add=componentId_add.length
    let components_add=[]//本函数中要添加的组件对象组成的数组（也是components属性下选中的组件对象组成的数组）

    //查看准备添加的组件id中是否有与“使用表单”中组件id重复的，如果有则摇一个随机id（前面说的id都有包括组件的后代组件的id）    阿里处理表单估计也是字符串化后用类似这里的putSthInJson()函数的函数来操作，所以就有了前面这种深度查重，不然内层与外层有重复id的话putSthInJson()就操作不到正确的位置
    for (let i = 0; i < componentNum_add; i++) {
      const component_add = deepCopy(p['components_' + selectedId.formId][componentId_add[i]])
      Object.keys(p.components_0).map((item) => {
        if (haveSameId(componentId_add[i], p.components_0[item], item)) {
          componentId_add[i] = randomId()
        }
        if (component_add.type === 'Array') {
          const id_subComponent=component_add.layout[0].id
          const subComponent=component_add.components[id_subComponent]
          //准备添加的组件的各孙组件id相对于“使用表单”中的所有id进行去重
          if(subComponent.type==='Map'&&subComponent.components){
            subComponent.layout.map((layout_grandchildren,idx)=>{
              changeRepeatedId(layout_grandchildren.id,subComponent,idx)
            })
          }
          //准备添加的组件的子组件id相对于“使用表单”中的所有id进行去重
          changeRepeatedId(id_subComponent,component_add,0)
        }

        //去重（去重的id，去重的id所在组件的父组件，去重的id所在组件位于父组件layout属性中的序号）（去重id是相对于“使用表单”中的所有id进行去重的）（这函数放这里是为了蹭map里的item，而且其他地方好像用不到，所以就不写成静态函数了）
        function changeRepeatedId(id,fatherComponent,idx) {
          if (haveSameId(id, p.components_0[item], item)) {
            const RANDOM_ID = randomId()
            fatherComponent.components[RANDOM_ID]=fatherComponent.components[id]
            delete fatherComponent.components[id]
            fatherComponent.layout[idx].id = RANDOM_ID
          }
        }

      })
      components_add.push(component_add)
    }

    //如果是克隆函数调用的则执行下面的语句块
    if(event.length===5){
      for(let i=0;i<componentNum_add;i++){
        components_add[i].dataName=event[3][i]
      }
      componentId_add=event[4]
    }

    //算出插入表单需要的剩余参数（字符串化的 待添加组件内容、待添加组件布局数据、鼠标点击组件的组件内容、鼠标点击组件的布局数据）
    const a=com2Attr_str(components_add,componentId_add,event[2])
    const strComponents_add=a.components,strLayout_add=a.layout
    const splitComponents=`"${event[1]
      }":${JSON.stringify(p.components_0[event[1]])}`
    const splitLayout=`{"id":"${event[1]}","root":true,"children":[]}`

    /*console.log('strComponents_add',strComponents_add)
    console.log('splitComponents',splitComponents)
    console.log('event[2]',event[2])
    console.log('strLayout_add',strLayout_add)
    console.log('splitLayout',splitLayout)
    console.log('')*/
    const form_0=JSON.parse(p.strJson_0)
    let json_0=JSON.stringify(form_0)//获取格式化后的“使用表单”json，防止格式不同导致的问题
    json_0=putSthInJson(json_0,strComponents_add,splitComponents,event[2])
    json_0=putSthInJson(json_0,strLayout_add,splitLayout,event[2])
    p.changeStrJson(json_0,event[0])
  }
  cloneNumChange(event){
    this.setState({
      cloneNum:event.target.value,
    })
  }
  clone(){
    const wrapThis=this
    const cloneNum=this.state.cloneNum
    const {selectedId}=this.state
    const id_reference=selectedId.id.slice(-1)[0]
    let dataName_prefix=[],componentsId_prefix=[]
    for(let i=0;i<selectedId.id.length;i++) {
      componentsId_prefix[i] = Math.random().toString().substring(2, 9) + '0000'
      dataName_prefix[i]=this.props.components_0[selectedId.id[i]].dataName
    }
    if(cloneNum>100)
      console.error('目前单次克隆倍数最大支持100个')
    else
      for (let i=cloneNum-1;i>-1;i--){
        let componentsId=[],dataName=[]
        for (let j=0;j<selectedId.id.length;j++){
          componentsId.push(componentsId_prefix[j]+(i>9?'':'0')+i+'_0') //单次克隆倍数最大支持100个
          dataName.push(dataName_prefix[j]+i)
        }
        setTimeout(function () {//不知为何套了这层，就可以实现多个异步的setState。之所以需要异步是因为目前AddComponent的写法要依赖一个状态，所以要重复调用的话就要异步
        // 传参为[被插入表单的id,作为位置参考的组件的id,插入于参考组件的上方还是下方,克隆组件的dataName,克隆组件的id]
          wrapThis.addComponent([selectedId.formId,id_reference,'lower',dataName,componentsId])
        },0)
      }
  }
  del(){
    const p=this.props
    const {formId,id}=this.state.selectedId
    const components=p['components_'+formId]

    //计算components属性下选中组件的内容组成的数组
    let selectComponents=[]
    for(let i=0;i<id.length;i++){
      selectComponents.push(components[id[i]])
    }

    let ifBefore='upper'
    if(Object.keys(components).slice(-1)[0]===id.slice(-1)[0])
      ifBefore='lower'
    const a=com2Attr_str(selectComponents,id,ifBefore)
    const component_del=a.components,layout_del=a.layout
    let returnForm=delStrInStr(JSON.stringify(JSON.parse(p['strJson_'+formId])),component_del)//这里两个JSON操作保证格式一致
    returnForm=delStrInStr(returnForm,layout_del)
    p.changeStrJson(returnForm,formId)
  }
  cleanRules(){
    const p=this.props
    const form=JSON.parse(p.strJson_0)
    const {components,rules}=form
    const componentsId=Object.keys(components)

    //计算由各组件dataName组成的数组
    let dataNames=[]
    for(let i=0;i<componentsId.length;i++){
      dataNames.push(components[componentsId[i]].dataName)
    }

    //修剪开始
    for(let i=0;i<rules.length;i++){
      const rule=rules[i]
      const dataNamesInRule=rule.condition.match(/moduleData\..*?\}/g).map(item=>item.slice(11,-1))
      if(findItemsNotExistInAnotherArr(dataNamesInRule,dataNames).length>0){//如果这条rule的condition中使用了不存在的dataName，则删除这条rule
        rules.splice(i,1)
        i--
      }else{
        const componentsInRule=Object.keys(rule.components)
        const componentsNotExistInForm=findItemsNotExistInAnotherArr(componentsInRule,componentsId)
        if(componentsNotExistInForm.length===componentsInRule.length){//如果这条rule的components中所有id都不存在，则删除这条rule
          rules.splice(i,1)
          i--
        }else{
          for (let j=0;j<componentsNotExistInForm.length;j++){
            delete rule.components[componentsNotExistInForm[j]]//删掉components中包含不存在的id的子项
          }
        }
      }
    }

    p.changeStrJson(JSON.stringify(form),0)
  }
  render() {
    return (
      <div className=''>
        <div className='left'>
          <textarea
            className='form-input'
            id="0"
            cols="30"
            rows="10"
            value={this.props.strJson_0}
            onChange={this.inputJsonChange}
          >
            <div className='name'>
              使用表单
            </div>
          </textarea>
          <div className='wrap'
               style={{height: this.props.formDomWrapH_0}}
          >
            {Object.keys(this.props.components_0).map((item, index) =>
              <FormComponent
                id={item}
                formId="0"
                index={index}
                changeSelectedId={this.changeSelectedId}
                addComponent={this.addComponent}
                selectedId={this.state.selectedId}
                value={this.props.components_0[item]}
              />
            )}
          </div>
          <div className='operation-panel'
          >
            <button className='clean-rules-button'
                    onClick={this.cleanRules}
            >
              修剪表单
            </button>
            {this.state.selectedId.formId === '0' &&
            [
              <button className='delete-button'
                      onClick={this.del}
              >
                删除
              </button>,
              <div className='clone-area'
              >
                <input className='clone-num'
                       onChange={this.cloneNumChange}
                       value={this.state.cloneNum}
                       placeholder='在这输入想要克隆的数量'
                ></input>
                <button className='clone-button'
                        onClick={this.clone}
                >
                  开始克隆
                </button>
              </div>
            ]
            }
          </div>
        </div>
        <div className='right'>
          <textarea
            id="1"
            cols="30"
            rows="10"
            value={this.props.strJson_1}
            onChange={this.inputJsonChange}
          />
          <div className='wrap'
               style={{height: this.props.formDomWrapH_1}}
          >
            {Object.keys(this.props.components_1).map((item, index) =>
              <FormComponent
                id={item}
                formId="1"
                index={index}
                changeSelectedId={this.changeSelectedId}
                addComponent={this.addComponent}
                selectedId={this.state.selectedId}
                value={this.props.components_1[item]}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  strJson_0:state.form[0].strJson,
  strJson_1:state.form[1].strJson,
  components_0:state.form[0].components,
  components_1:state.form[1].components,
  formDomWrapH_0:state.form[0].wrapH,
  formDomWrapH_1:state.form[1].wrapH,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  changeStrJson:(value,idx)=>dispatch({type:'change_strjson',value,idx}),
  windowWChanging:()=>dispatch({type:'window_w_changing'}),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BasicComponent)

//-------------静态函数-------------

//返回一个随机id
const randomId=()=> Math.random().toString().substring(2, 9) + '000000_0'

//在字符串化的表单里添加内容
function putSthInJson(json,addCon,splitCon,ifBefore) {
  let twoJson=json.split(splitCon,2)
  if(ifBefore==='upper'){
    return twoJson[0]+addCon+splitCon+twoJson[1]
  }else{
    return twoJson[0]+splitCon+addCon+twoJson[1]
  }
}

//返回字符串格式表单里的组件（包含components属性和layout属性两部分）
//传参为（装有需要的component的对象的数组，装有需要的component的id的数组，插入于参考组件的上方还是下方）
function com2Attr_str(objArr,idArr,ifBefore) {
  let components='',layout='' // 不赋值的话这两个变量转字符串后都会变成'undefined'
  for(let i=0;i<idArr.length;i++){
    components+=`${ifBefore==='lower'?',':''
      }"${idArr[i]
      }":${JSON.stringify(objArr[i])
      }${ifBefore==='upper'?',':''}`
    layout+=`${ifBefore==='lower'?',':''
      }{"id":"${idArr[i]
      }","root":true,"children":[]}${ifBefore==='upper'?',':''}`
  }
  return{components,layout}
}

//在字符串（str）中删除指定字符串（str_del）
function delStrInStr(str,str_del) {
  let str_beSplit=str.split(str_del)
  if (str_beSplit.length>2)
    console.log(`需删除字符串出现了${str_beSplit.length}次`)
  return ''.concat(...str_beSplit)
}

//找出所有不在第二个数组中存在的第一个数组的子项，返回子项的值
function findItemsNotExistInAnotherArr(arr,anotherArr) {
  let result=[]
  for (let i=0;i<arr.length;i++){
    let exist=false
    for (let j=0;j<anotherArr.length;j++)
      if(arr[i]===anotherArr[j])
        exist=true
    if(!exist)
      result.push(arr[i])
  }
  return result
}

// 查看一个id是否与 一个组件的id或其中所含组件的id 重复（所含组件的id是指：数组组件中的map以及map中的id）
function haveSameId(id,component,id_component) {
  if(id===id_component)
    return true
  if(component.type==='Array'){
    if(id===component.layout[0].id)
      return true
    const grandchildrenCom=component.components[component.layout[0].id]
    if(grandchildrenCom.type==='Map'){
      for(let x in grandchildrenCom.layout){
        if(id===grandchildrenCom.layout[x].id)//x是字符串也能取到数组中的某一位
          return true
      }
    }
  }
  return false
}
