import React from 'react'
import PropTypes from 'prop-types'

class FormComponent extends React.Component {
  constructor(props) {
    super(props)
    this.changeSelectedId = this.changeSelectedId.bind(this)
    this.addComponent = this.addComponent.bind(this)
  }

  changeSelectedId() {
    this.props.changeSelectedId([this.props.id, this.props.formId])
  }

  // 把选中的组件插入进目前点击的位置
  // 传参为[被插入表单的id,作为位置参考的组件的id,插入于参考组件的上方还是下方]
  addComponent(event) {
    const p = this.props
    p.addComponent([
      p.formId,
      p.id,
      event.target.getAttribute('data-type')
    ])
  }

  render() {
    const p = this.props
    //判断该组件是否被选中
    let selected = false
    if (p.selectedId.formId === p.formId)
      for (let i in p.selectedId.id)
        if (p.selectedId.id.hasOwnProperty(i) && p.selectedId.id[i] === p.id)
          selected = true

    const hoverLayer = (//不知道react怎么拆，知道就拆了
      <div className="editor-component-hover-layer">
        <div className="hover-layer-upper hover-layer-semi"
        >
          <div className="add-component-icon-wrapper">
                        <span className="add-component-icon icon-font"
                              onClick={this.addComponent}
                              data-type="upper"
                        ></span>
          </div>
        </div>
        <div className="hover-layer-lower hover-layer-semi"
        >
          <div className="add-component-icon-wrapper">
                        <span className="add-component-icon icon-font"
                              onClick={this.addComponent}
                              data-type="lower"
                        ></span>
          </div>
        </div>
      </div>
    )

    function ReadType(a) {
      const desc=p.value.label.description.desc &&
        <p className="com-desc">
          {p.value.label.description.icon &&
          <i className={`next-icon next-icon-${p.value.label.description.icon} next-icon-small desc-icon`}/>
          }
          {p.value.label.description.desc}
        </p>
      switch (a) {
        case 'Input':
          return (
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
                  {desc}
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
          return (
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
                  {desc}
                </div>
                <div className="cuk-checkbox-con" style={{width: '100%'}}>
                  <label>
                                    <span className="next-checkbox define-checkbox checked ">
                                        <span className="next-checkbox-inner">
                                            <i
                                              className={`next-icon ${p.value.extension.defaultValue && 'next-icon-select'} next-icon-xs`}/>
                                        </span><input type="checkbox" aria-checked="true" defaultValue="on"/>
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
          return (
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
                  {desc}
                </div>
                <div className="cuk-radio-con" style={{width: '100%'}}>
                  <div className="next-radio-group radio-define null">
                    <label className><span className="next-radio checked "><span
                      className="next-radio-inner press"/><input type="radio" defaultValue={1}
                                                                 aria-checked="true"/></span><span
                      className="next-radio-label">radio1</span></label>
                    <label className><span className="next-radio "><span className="next-radio-inner unpress"/><input
                      type="radio" defaultValue={2} aria-checked="false"/></span><span className="next-radio-label">radio2</span></label>
                  </div>
                </div>
              </div>
              {hoverLayer}
            </div>
          )
        case 'Select':
          return (
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
                  {desc}
                </div>
                <div className="cuk-select-con" style={{width: '100%'}}>
              <span className="next-select medium next-select-def" tabIndex={0}><input type="hidden"
                                                                                       name="select-faker"/><span
                className="next-select-inner">
                  {/* react-text: 12143 */}test+group
                {/* /react-text */}</span><i
                className="next-icon next-icon-arrow-down next-icon-small next-select-arrow"/></span>
                </div>
              </div>
              {hoverLayer}
            </div>
          )
        case 'Skip':
          return (
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
                  {desc}
                </div>
                {p.value.extension.text &&
                <div className="skip-con" style={{width: '100%'}}>
                  <a className="skip-text" href={p.value.extension.url} target="_blank">
                    {p.value.extension.text}
                    <i className={`next-icon next-icon-${p.value.extension.endIcon} next-icon-xs`}/>
                  </a>
                </div>
                }
              </div>
              {hoverLayer}
            </div>
          )
        case 'SingleImage':
          return (
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
                  {desc}
                </div>
                <div className="icbu-single-image" style={{width: '100%'}}>
                  <div id="upload_undefined">
                <span role="upload"><input type="file" accept="image/jpg,image/jpeg,image/png"
                                           style={{display: 'none'}}/>
                  <div className="intl-ptool-one-image-upload ">
                    <span className="image-upload-text"><i className="next-icon next-icon-add next-icon-small"/></span>
                  </div></span>
                    {/* react-empty: 12187 */}
                  </div>
                </div>
              </div>
              {hoverLayer}
            </div>
          )
        case 'VideoSelect':
          return (
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
                  {desc}
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
          return (
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
          return (
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

    return (
      <div className={`form-component${selected ? ' form-component-selected' : ''}`}
           onClick={this.changeSelectedId}
      >
        {ReadType(p.value.type)}
      </div>
    )
  }
}

export default FormComponent
