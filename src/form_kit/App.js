import { React, ReactDOM, openSdk, Button } from '@alife/icbu-mod-lib';
import './index.scss';
import testData from './test_data.js';
import testData2 from './test_data_2.js';
//本文件中的id都是代表表单组件的id，为方便就不写成componentId了

class FormComponent extends React.Component{
  constructor(props) {
    super(props)
    this.ChangeSelectCase=this.ChangeSelectCase.bind(this)
    this.AddComponent=this.AddComponent.bind(this)
  }
  ChangeSelectCase(){
    this.props.ChangeSelectCase([this.props.id,this.props.formId])
  }//被插入组件的id、前插入还是后插入
  AddComponent(event){//修改JsonAdd，插入hoverLayer
    const p=this.props
    p.AddComponent([p.id,event.target.getAttribute('data-type')])
  }
  render(){
    const p=this.props
    const hoverLayer = (//不知道react怎么拆，知道就拆了
      <div className="editor-component-hover-layer">
        <div className="hover-layer-upper hover-layer-semi"
        >
          <div className="add-component-icon-wrapper">
                        <span className="add-component-icon icon-font"
                              onClick={this.AddComponent}
                              data-type="upper"
                        ></span>
          </div>
        </div>
        <div className="hover-layer-lower hover-layer-semi"
        >
          <div className="add-component-icon-wrapper">
                        <span className="add-component-icon icon-font"
                              onClick={this.AddComponent}
                              data-type="lower"
                        ></span>
          </div>
        </div>
      </div>
    )
    function ReadType(a,fnThis) {
      switch(a){
        case 'Input':
          return(
            <div className="olympics-editor-canvas-component-wrapper"
                 style={{...p.value.style, position: 'relative'}}
            >
              <div className="cuk-nromal-wrap" style={p.value.wrapperStyle}>
                <div className="cuk-label-con">
                  <div className="title-con">
                    <h5 className="com-title">
                      {p.value.label.title}
                    </h5>
                  </div>
                  {p.value.label.description.desc&&
                  <p className="com-desc">
                    <i className={`next-icon next-icon-${p.value.label.description.icon} next-icon-small desc-icon`} />
                    {p.value.label.description.desc}
                  </p>
                  }
                </div>
                <div className="cuk-input-con" style={{width: '100%'}}>
                                <span className="next-input next-input-single next-input-medium input">
                                    <input type="text"
                                           placeholder={p.value.extension.placeholder}
                                           height="100%"
                                    />
                                </span>
                </div>
              </div>
              {hoverLayer}
            </div>
          )
        case 'Checkbox':
          return(
            <div className="olympics-editor-canvas-component-wrapper"
                 style={{...p.value.style, position: 'relative'}}
            >
              <div className="cuk-nromal-wrap" style={p.value.wrapperStyle}>
                <div className="cuk-label-con">
                  <div className="title-con">
                    <h5 className="com-title">
                      {p.value.label.title}
                    </h5>
                  </div>
                  {p.value.label.description.desc&&
                  <p className="com-desc">
                    <i className={`next-icon next-icon-${p.value.label.description.icon} next-icon-small desc-icon`} />
                    {p.value.label.description.desc}
                  </p>
                  }
                </div>
                <div className="cuk-checkbox-con" style={{width: '100%'}}>
                  <label>
                                    <span className="next-checkbox define-checkbox checked ">
                                        <span className="next-checkbox-inner">
                                            <i className={`next-icon ${p.value.extension.defaultValue&&'next-icon-select'} next-icon-xs`} />
                                        </span><input type="checkbox" aria-checked="true" defaultValue="on" />
                                    </span>
                    <span className="next-checkbox-label">
                                        {p.value.extension.text}
                                    </span>
                  </label>
                </div>
              </div>
              {hoverLayer}
            </div>
          )
        case 'Radio':
          return(
            <div className="olympics-editor-canvas-component-wrapper"
                 style={{...p.value.style, position: 'relative'}}
            >
              <div className="cuk-nromal-wrap" style={p.value.wrapperStyle}>
                <div className="cuk-label-con">
                  <div className="title-con">
                    <h5 className="com-title">
                      {p.value.label.title}
                    </h5>
                  </div>
                  {p.value.label.description.desc&&
                  <p className="com-desc">
                    <i className={`next-icon next-icon-${p.value.label.description.icon} next-icon-small desc-icon`} />
                    {p.value.label.description.desc}
                  </p>
                  }
                </div>
                <div className="cuk-radio-con" style={{width: '100%'}}>
                  <div className="next-radio-group radio-define null">
                    <label className><span className="next-radio checked "><span className="next-radio-inner press" /><input type="radio" defaultValue={1} aria-checked="true" /></span><span className="next-radio-label">radio1</span></label>
                    <label className><span className="next-radio "><span className="next-radio-inner unpress" /><input type="radio" defaultValue={2} aria-checked="false" /></span><span className="next-radio-label">radio2</span></label>
                  </div>
                </div>
              </div>
              {hoverLayer}
            </div>
          )
        case 'Select':
          return(
            <div className="olympics-editor-canvas-component-wrapper"
                 style={{...p.value.style, position: 'relative'}}
            >
              <div className="cuk-nromal-wrap" style={p.value.wrapperStyle}>
                <div className="cuk-label-con">
                  <div className="title-con">
                    <h5 className="com-title">
                      {p.value.label.title}
                    </h5>
                  </div>
                  {p.value.label.description.desc&&
                  <p className="com-desc">
                    <i className={`next-icon next-icon-${p.value.label.description.icon} next-icon-small desc-icon`} />
                    {p.value.label.description.desc}
                  </p>
                  }
                </div>
                <div className="cuk-select-con" style={{width: '100%'}}>
              <span value={805476889} className="next-select medium next-select-def" tabIndex={0}><input type="hidden" name="select-faker" defaultValue={805476889} /><span className="next-select-inner">
                  {/* react-text: 12143 */}test+group
                {/* /react-text */}</span><i className="next-icon next-icon-arrow-down next-icon-small next-select-arrow" /></span>
                </div>
              </div>
              {hoverLayer}
            </div>
          )
        case 'Skip':
          return(
            <div className="olympics-editor-canvas-component-wrapper"
                 style={{...p.value.style, position: 'relative'}}
            >
              <div className="cuk-nromal-wrap" style={p.value.wrapperStyle}>
                <div className="cuk-label-con">
                  <div className="title-con">
                    <h5 className="com-title">
                      {p.value.label.title}
                    </h5>
                  </div>
                  {p.value.label.description.desc&&
                  <p className="com-desc">
                    <i className={`next-icon next-icon-${p.value.label.description.icon} next-icon-small desc-icon`} />
                    {p.value.label.description.desc}
                  </p>
                  }
                </div>
                {p.value.extension.text&&
                <div className="skip-con" style={{width: '100%'}}>
                  <a className="skip-text" href={p.value.extension.url} target="_blank">
                    {p.value.extension.text}
                    <i className={`next-icon next-icon-${p.value.extension.endIcon} next-icon-xs`} />
                  </a>
                </div>
                }
              </div>
              {hoverLayer}
            </div>
          )
        case 'SingleImage':
          return(
            <div className="olympics-editor-canvas-component-wrapper"
                 style={{...p.value.style, position: 'relative'}}
            >
              <div className="cuk-nromal-wrap" style={p.value.wrapperStyle}>
                <div className="cuk-label-con">
                  <div className="title-con">
                    <h5 className="com-title">
                      {p.value.label.title}
                    </h5>
                  </div>
                  {p.value.label.description.desc&&
                  <p className="com-desc">
                    <i className={`next-icon next-icon-${p.value.label.description.icon} next-icon-small desc-icon`} />
                    {p.value.label.description.desc}
                  </p>
                  }
                </div>
                <div className="icbu-single-image" style={{width: '100%'}}>
                  <div id="upload_undefined">
                <span role="upload"><input type="file" accept="image/jpg,image/jpeg,image/png" style={{display: 'none'}} />
                  <div className="intl-ptool-one-image-upload ">
                    <span className="image-upload-text"><i className="next-icon next-icon-add next-icon-small" /></span>
                  </div></span>
                    {/* react-empty: 12187 */}
                  </div>
                </div>
              </div>
              {hoverLayer}
            </div>
          )
        case 'VideoSelect':
          return(
            <div className="olympics-editor-canvas-component-wrapper"
                 style={{...p.value.style, position: 'relative'}}
            >
              <div className="cuk-nromal-wrap" style={p.value.wrapperStyle}>
                <div className="cuk-label-con">
                  <div className="title-con">
                    <h5 className="com-title">
                      {p.value.label.title}
                    </h5>
                  </div>
                  {p.value.label.description.desc&&
                  <p className="com-desc">
                    <i className={`next-icon next-icon-${p.value.label.description.icon} next-icon-small desc-icon`} />
                    {p.value.label.description.desc}
                  </p>
                  }
                </div>
                <div className="cuk-video-select" style={{width: '100%'}}>
                  <div>
                    <button type="button" className="next-btn next-btn-normal next-btn-medium select-btn">
                      {/* react-text: 12206 */}选择视频
                      {/* /react-text */}</button>
                    {/* react-empty: 12207 */}
                  </div>
                </div>
              </div>
              {hoverLayer}
            </div>
          )
        case 'Array':
          return(
            <div className="olympics-editor-canvas-component-wrapper"
                 style={{...p.value.style, position: 'relative'}}
            >
              {hoverLayer}
              <div label="[object Object]" className="oct-row-container editor-Array-container" style={{width: '100%'}}>
                <div className="olympics-editor-canvas-component-wrapper"
                     style={{...p.value.style, position: 'relative'}}
                >
                  <div className="editor-component-add show-on-hover">
                    <span className="add-component-icon icon-font"></span>
                  </div>
                </div>
                <div className="editor-container-label">
                  Array
                </div>
              </div>
            </div>
          )
        case 'Map':
          return(
            <div className="olympics-editor-canvas-component-wrapper"
                 style={{...p.value.style, position: 'relative'}}
            >
              {hoverLayer}
              <div label="[object Object]" className="oct-col-container editor-map-container" style={{width: '100%'}}>
                <div className="olympics-editor-canvas-component-wrapper"
                     style={{...p.value.style, position: 'relative'}}
                >
                  <div className="editor-component-add show-on-hover">
                    <span className="add-component-icon icon-font"></span>
                  </div>
                </div>
                <div className="editor-container-label">
                  Map
                </div>
              </div>
            </div>
          )
        default:
          return '不是9个常用组件'
      }
    }
    return(
      <div className={`form-component${(p.id===p.selectedId.id)&&(p.formId===p.selectedId.formId)?' form-component-selected':''}`}
           onClick={this.ChangeSelectCase}
      >
        {ReadType(p.value.type,this)}
      </div>
    )
  }
}

class BasicComponent extends React.Component {
  constructor(props) {
    super(props)
    this.InputJsonChange=this.InputJsonChange.bind(this)
    this.ChangeSelectCase=this.ChangeSelectCase.bind(this)
    this.AddComponent=this.AddComponent.bind(this)
    this.CloneNumChange=this.CloneNumChange.bind(this)
    this.Clone=this.Clone.bind(this)
    this.onWindowResize=this.onWindowResize.bind(this)
    this.state={
      inputJson_0:JSON.stringify(testData),
      usedJson_0:testData.components,
      inputJson_1:JSON.stringify(testData),
      usedJson_1:testData2.components,
      selectedId:{
        formId:0,
        id:0,
      },
      cloneNum:1,
    }
  }
  componentWillMount(){//这里要改成会响应state变化
    this.setState({
      colHeight_0:Object.keys(this.state.usedJson_0).length*100,
      colHeight_1:Object.keys(this.state.usedJson_1).length*100,
    })
  }
  componentDidMount() {
    this.onWindowResize()
    window.addEventListener('resize', this.onWindowResize)
  }
  onWindowResize(){
    let multiple=1
    const width=document.body.clientWidth
    if(width>1263&&width<1828)
      multiple=2
    else if(width>=1828)
      multiple=3
    this.setState({
      wrapHeight_0:this.state.colHeight_0/multiple,
      wrapHeight_1:this.state.colHeight_1/multiple,
    })
  }
  InputJsonChange(event){
    const setState={}
    setState[`inputJson${event.target.id}`]=event.target.value
    setState[`usedJson${event.target.id}`]=JSON.parse(event.target.value).components
    this.setState(setState)
  }
  ChangeSelectCase(event){
    this.setState({
      selectedId:{
        formId:event[1],
        id:event[0],
      },
    })
  }
  /*
  * 目前只支持从第二列一个一个增加
  *
  *
  *
  * */
  AddComponent(event){//被插入组件的id、前插入还是后插入、dataName、要插入组件期望的id
    let json=JSON.stringify(JSON.parse(this.state.inputJson_0))//对输入json进行格式化，防止格式不同导致的问题
    const object_0=JSON.parse(this.state.inputJson_0)
    const object_1=JSON.parse(this.state.inputJson_1)//有通过eval使用到
    const selectedId=this.state.selectedId
    let addComponentId=selectedId.id

    Object.keys(object_0.components).map((item, index) =>{
      if(item===addComponentId){
        addComponentId=Math.random().toString().substring(2,9)+'000000_0'
      }
    })
    let selectComponent=JSON.parse(JSON.stringify(eval('object'+selectedId.formId).components[selectedId.id]))

    //克隆功能需要的代码
    if(event.length===4){
      selectComponent.dataName=event[2]
      addComponentId=event[3]
    }

    //算出进行添加需要的各个参数
    const addComponents=`${event[1]==='lower'?',':''}"${addComponentId}":${JSON.stringify(selectComponent)}${event[1]==='upper'?',':''}`
    const splitComponents=`"${event[0]}":${JSON.stringify(object_0.components[event[0]])}`
    const addLayout=`${event[1]==='lower'?',':''}{"id":"${addComponentId}","root":true,"children":[]}${event[1]==='upper'?',':''}`
    const splitLayout=`{"id":"${event[0]}","root":true,"children":[]}`

    /*console.log('json',json)*/
    console.log('addComponents',addComponents)
    console.log('splitComponents',splitComponents)
    console.log('event[1]',event[1])
    json=JsonAdd(json,addComponents,splitComponents,event[1])
    json=JsonAdd(json,addLayout,splitLayout,event[1])
    this.setState({
      usedJson_0:JSON.parse(json).components,
      inputJson_0:json,
    })
  }
  CloneNumChange(event){
    this.setState({
      cloneNum:event.target.value
    })
  }
  Clone(){//还没加按顺序排id的功能
    const cloneNum=this.state.cloneNum
    const id=this.state.selectedId.id
    let addComponentId_prefix=Math.random().toString().substring(2,9)+'0000'
    let dataName_prefix=this.state.usedJson_0[id].dataName

    for (let i=cloneNum-1;i>-1;i--){
      const wrapThis=this
      const addComponentId=addComponentId_prefix+(i>9?'':'0')+i+'_0'
      const dataName=dataName_prefix+i
      setTimeout(function () {//不知为何套了这层，就可以实现多个异步的setState
        wrapThis.AddComponent([id,'lower',dataName,addComponentId])
      },0)
      //循环了多次结果只加了一个
      /*json=JsonAdd(json,addComponents,splitComponents,event[1])
      json=JsonAdd(json,addLayout,splitLayout,event[1])
      this.setState({
          usedJson_0:JSON.parse(json).components,
          inputJson_0:json,
      })*/
    }
  }

  render() {
    return (
      <div className=''>
        <div className='left'>
                <textarea
                  id="_0"
                  cols="30"
                  rows="10"
                  value={this.state.inputJson_0}
                  onChange={this.InputJsonChange}
                ></textarea>
          <div className='wrap'
               style={{height: this.state.wrapHeight_0}}
          >
            {Object.keys(this.state.usedJson_0).map((item, index) =>
              <FormComponent
                id={item}
                formId="_0"
                index={index}
                ChangeSelectCase={this.ChangeSelectCase}
                AddComponent={this.AddComponent}
                selectedId={this.state.selectedId}
                value={this.state.usedJson_0[item]}
              />
            )}
          </div>
          <div className='clone-area'
               style={{opacity: this.state.selectedId.formId === '_0' && 1}}
          >
            <input className='clone-num'
                   onChange={this.CloneNumChange}
                   value={this.state.cloneNum}
                   placeholder='在这输入想要的数量'
            ></input>
            <button className='clone-button'
                    onClick={this.Clone}
            >开始克隆
            </button>
          </div>
        </div>
        <div className='right'>
                <textarea
                  id="_1"
                  cols="30"
                  rows="10"
                  value={this.state.inputJson_1}
                  onChange={this.InputJsonChange}
                ></textarea>
          <div className='wrap'
               style={{height: this.state.wrapHeight_1}}
          >
            {Object.keys(this.state.usedJson_1).map((item, index) =>
              <FormComponent
                id={item}
                formId="_1"
                index={index}
                ChangeSelectCase={this.ChangeSelectCase}
                AddComponent={this.AddComponent}
                selectedId={this.state.selectedId}
                value={this.state.usedJson_1[item]}
              />
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default BasicComponent

//-------------静态函数-------------

function JsonAdd(json,addCon,splitCon,ifBefore) {
  let twoJson=json.split(splitCon,2)
  /*console.log('json',json)
  console.log('splitCon',splitCon)*/
  if(ifBefore==='upper'){
    return twoJson[0]+addCon+splitCon+twoJson[1]
  }else{
    return twoJson[0]+splitCon+addCon+twoJson[1]
  }
}