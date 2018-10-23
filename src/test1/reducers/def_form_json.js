export const defFormJson={
  "components": {
    "1537485901664_1": {
      "type": "Skip",
      "dataName": "skip",
      "label": {
        "description": {
          "icon": "",
          "desc": ""
        },
        "title": "样板表单"
      },
      "wrapperStyle": {
        "borderBottom": "1px solid #E1E1E1",
        "marginTop": "20px"
      },
      "style": {
        "width": "auto",
        "height": "auto",
        "background": "#ccfffb"
      },
      "invisible": false,
      "extension": {
        "text": "",
        "url": ""
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1517109649468_2": {
      "type": "Skip",
      "dataName": "skip",
      "label": {
        "description": {
          "icon": "",
          "desc": ""
        },
        "title": "标题设置"
      },
      "wrapperStyle": {
        "borderBottom": "1px solid #E1E1E1",
        "marginTop": "20px"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "text": "",
        "url": ""
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1517109649468_1": {
      "type": "Radio",
      "dataName": "titletype",
      "label": {
        "description": {
          "icon": "",
          "desc": "请选择标题类型"
        },
        "title": "标题类型"
      },
      "wrapperStyle": {
        "paddingBottom": "10px"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "confirm": {},
        "shape": "",
        "size": "large",
        "defaultValue": "text",
        "type": "",
        "dataSource": [
          {
            "label": "文字模式",
            "value": "text"
          },
          {
            "label": "图片模式",
            "value": "pic"
          },
          {
            "label": "隐藏",
            "value": "none"
          }
        ]
      },
      "validateProps": {
        "dataType": "Text",
        "required": false,
        "validate": false
      }
    },
    "1517109649468_3": {
      "type": "Input",
      "dataName": "bigtitle",
      "label": {
        "description": {
          "icon": "",
          "desc": "请输入文字"
        },
        "title": "主标题"
      },
      "wrapperStyle": {
        "paddingBottom": "10px"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "defaultValue": true,
        "useReg": false,
        "multiple": false,
        "placeholder": ""
      },
      "validateProps": {
        "dataType": "Text",
        "required": false,
        "validate": false
      }
    },
    "1517109649468_4": {
      "type": "Input",
      "dataName": "vicetitle",
      "label": {
        "description": {
          "icon": "",
          "desc": "请输入文字"
        },
        "title": "副标题"
      },
      "wrapperStyle": {
        "paddingBottom": "10px"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "defaultValue": true,
        "useReg": false,
        "multiple": false,
        "placeholder": ""
      },
      "validateProps": {
        "dataType": "Text",
        "required": false,
        "validate": false
      }
    },
    "1517109649468_5": {
      "type": "SingleImage",
      "dataName": "titlepic",
      "label": {
        "description": {
          "icon": "",
          "desc": "请选择图片（尺寸：1200*173）"
        },
        "title": "图片标题"
      },
      "wrapperStyle": {
        "border": "1px solid #E1E1E1"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "size": 2,
        "width": 1200,
        "api": {
          "uploadUrl": [
            "//11.162.84.173:7001/v1/image_upload.do",
            "/v1/image_upload.do"
          ]
        },
        "lang": {
          "image": {
            "cancel": "取消",
            "addPhoto": "上传照片"
          },
          "acceptErrMsg": "文件类型错误提示",
          "file": {
            "addPhoto": "上传照片"
          },
          "drag": {
            "dropTips": "可以放手了",
            "dragTips": "直接拖动文件到虚线框内即可上传"
          },
          "crop": {
            "save": "保存并关闭",
            "reset": "重新选择",
            "title": "上传"
          }
        },
        "height": 173
      },
      "validateProps": {
        "dataType": "Image",
        "required": false,
        "validate": false
      }
    },
    "1524880464289_1": {
      "type": "Skip",
      "dataName": "skip",
      "label": {
        "description": {
          "icon": "",
          "desc": ""
        },
        "title": "照片设置"
      },
      "wrapperStyle": {
        "borderBottom": "1px solid #E1E1E1"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "endIcon": "arrow-right",
        "text": "",
        "url": "//www.taobao.com"
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1537336277108_1": {
      "type": "Array",
      "dataName": "card",
      "label": {
        "description": {
          "icon": "",
          "desc": ""
        },
        "title": ""
      },
      "wrapperStyle": {
        "border": "1px solid #E1E1E1"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "defaultValue": true,
        "useReg": false,
        "placeholder": "placeholder"
      },
      "validateProps": {
        "min": 1,
        "max": 12,
        "dataType": "Array",
        "required": false,
        "validate": false
      },
      "components": {
        "1537336277108_2": {
          "type": "Map",
          "dataName": "map",
          "label": {
            "description": {
              "icon": "",
              "desc": ""
            },
            "title": ""
          },
          "wrapperStyle": {
            "border": "1px solid #E1E1E1"
          },
          "style": {
            "width": "auto",
            "height": "auto"
          },
          "invisible": false,
          "extension": {
            "defaultValue": true,
            "useReg": false,
            "placeholder": "placeholder"
          },
          "validateProps": {
            "dataType": "",
            "required": false,
            "validate": false
          },
          "components": {
            "1537336277108_3": {
              "type": "SingleImage",
              "dataName": "singleImage",
              "label": {
                "description": {
                  "icon": "",
                  "desc": "请选择图片（尺寸：300*200）"
                },
                "title": "照片"
              },
              "wrapperStyle": {
                "border": "1px solid #E1E1E1"
              },
              "style": {
                "width": "auto",
                "height": "auto"
              },
              "invisible": false,
              "extension": {
                "size": 2,
                "saveImageSize": false,
                "width": 300,
                "api": {
                  "uploadUrl": "/v1/image_upload.do"
                },
                "lang": {
                  "cropUploadLocale": {
                    "image": {
                      "cancel": "取消",
                      "addPhoto": "上传照片"
                    },
                    "file": {
                      "addPhoto": "上传照片"
                    },
                    "drag": {
                      "dropTips": "可以放手了",
                      "dragTips": "直接拖动文件到虚线框内即可上传"
                    },
                    "crop": {
                      "save": "保存并关闭",
                      "reset": "重新选择",
                      "title": "上传"
                    }
                  },
                  "acceptErrMsg": "不支持该类型的图片，请重新选择",
                  "cropSmallError": "您上传的图片超过大小限制，请重新选择图片",
                  "cropRecommend": "您上传的图片高度或者宽度太小，请选择尺寸足够的图片",
                  "uploadErrMsg": "图片上传失败，请重试"
                },
                "height": 200
              },
              "validateProps": {
                "dataType": "",
                "required": false,
                "validate": false
              }
            },
            "1537336277108_4": {
              "type": "Input",
              "dataName": "title",
              "label": {
                "description": {
                  "icon": "",
                  "desc": "请输入文字"
                },
                "title": "标题"
              },
              "wrapperStyle": {},
              "style": {
                "width": "auto",
                "height": "auto"
              },
              "invisible": false,
              "extension": {
                "defaultValue": true,
                "useReg": false,
                "placeholder": ""
              },
              "validateProps": {
                "dataType": "",
                "required": false,
                "validate": false
              }
            },
            "1537336277108_5": {
              "type": "Input",
              "dataName": "text",
              "label": {
                "description": {
                  "icon": "",
                  "desc": "请输入文字"
                },
                "title": "内容"
              },
              "wrapperStyle": {},
              "style": {
                "width": "auto",
                "height": "auto"
              },
              "invisible": false,
              "extension": {
                "defaultValue": true,
                "useReg": false,
                "multiple": true,
                "placeholder": ""
              },
              "validateProps": {
                "dataType": "",
                "required": false,
                "validate": false
              }
            },
            "1537339836555_1": {
              "type": "Input",
              "dataName": "url",
              "label": {
                "description": {
                  "icon": "",
                  "desc": "输入点击后跳转的地址"
                },
                "title": "链接"
              },
              "wrapperStyle": {},
              "style": {
                "width": "auto",
                "height": "auto"
              },
              "invisible": false,
              "extension": {
                "defaultValue": true,
                "useReg": false,
                "placeholder": ""
              },
              "validateProps": {
                "dataType": "",
                "required": false,
                "validate": false
              }
            }
          },
          "layout": [
            {
              "id": "1537336277108_3",
              "root": true,
              "children": []
            },
            {
              "id": "1537336277108_4",
              "root": true,
              "children": []
            },
            {
              "id": "1537336277108_5",
              "root": true,
              "children": []
            },
            {
              "id": "1537339836555_1",
              "root": true,
              "children": []
            }
          ]
        }
      },
      "layout": [
        {
          "id": "1537336277108_2",
          "root": true,
          "children": []
        }
      ]
    },
    "1524471631021_1": {
      "type": "Skip",
      "dataName": "skip",
      "label": {
        "description": {
          "icon": "",
          "desc": ""
        },
        "title": "样式设置"
      },
      "wrapperStyle": {
        "borderBottom": "1px solid #E1E1E1",
        "marginTop": "20px"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "endIcon": "arrow-right",
        "text": "",
        "url": "//www.taobao.com"
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1525179352263_3": {
      "type": "Input",
      "dataName": "bigtitlefontcolor",
      "label": {
        "description": {
          "icon": "",
          "desc": "请输入颜色值（如：#FFFFFF）"
        },
        "title": "主标题颜色"
      },
      "wrapperStyle": {},
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "defaultValue": true,
        "useReg": false,
        "placeholder": ""
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1525238428263_3": {
      "type": "Input",
      "dataName": "vicetitlefontcolor",
      "label": {
        "description": {
          "icon": "",
          "desc": "请输入颜色值（如：#FFFFFF）"
        },
        "title": "副标题颜色"
      },
      "wrapperStyle": {},
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "defaultValue": true,
        "useReg": false,
        "placeholder": " "
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1525179352263_6": {
      "type": "SingleImage",
      "dataName": "titletextbg",
      "label": {
        "description": {
          "icon": "",
          "desc": "请选择图片（尺寸：1200*173）"
        },
        "title": "标题背景图"
      },
      "wrapperStyle": {
        "border": "1px solid #E1E1E1"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "size": 2,
        "saveImageSize": false,
        "width": 1200,
        "api": {
          "uploadUrl": "/v1/image_upload.do"
        },
        "lang": {
          "cropUploadLocale": {
            "image": {
              "cancel": "取消",
              "addPhoto": "上传照片"
            },
            "file": {
              "addPhoto": "上传照片"
            },
            "drag": {
              "dropTips": "可以放手了",
              "dragTips": "直接拖动文件到虚线框内即可上传"
            },
            "crop": {
              "save": "保存并关闭",
              "reset": "重新选择",
              "title": "上传"
            }
          },
          "acceptErrMsg": "不支持该类型的图片，请重新选择",
          "cropSmallError": "您上传的图片超过大小限制，请重新选择图片",
          "cropRecommend": "您上传的图片高度或者宽度太小，请选择尺寸足够的图片",
          "uploadErrMsg": "图片上传失败，请重试"
        },
        "height": 173
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1537338635907_1": {
      "type": "Input",
      "dataName": "cardtitlecolor",
      "label": {
        "description": {
          "icon": "",
          "desc": "请输入颜色值（如：#FFFFFF）"
        },
        "title": "信息标题颜色"
      },
      "wrapperStyle": {},
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "defaultValue": true,
        "useReg": false,
        "placeholder": " "
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1537338635907_2": {
      "type": "Input",
      "dataName": "cardtextcolor",
      "label": {
        "description": {
          "icon": "",
          "desc": "请输入颜色值（如：#FFFFFF）"
        },
        "title": "信息内容颜色"
      },
      "wrapperStyle": {},
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "defaultValue": true,
        "useReg": false,
        "placeholder": " "
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1537338635907_3": {
      "type": "SingleImage",
      "dataName": "cardbg",
      "label": {
        "description": {
          "icon": "",
          "desc": "请选择图片（尺寸：300*200）"
        },
        "title": "信息背景图（单行）"
      },
      "wrapperStyle": {
        "border": "1px solid #E1E1E1"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "size": 2,
        "saveImageSize": false,
        "width": 300,
        "api": {
          "uploadUrl": "/v1/image_upload.do"
        },
        "lang": {
          "cropUploadLocale": {
            "image": {
              "cancel": "取消",
              "addPhoto": "上传照片"
            },
            "file": {
              "addPhoto": "上传照片"
            },
            "drag": {
              "dropTips": "可以放手了",
              "dragTips": "直接拖动文件到虚线框内即可上传"
            },
            "crop": {
              "save": "保存并关闭",
              "reset": "重新选择",
              "title": "上传"
            }
          },
          "acceptErrMsg": "不支持该类型的图片，请重新选择",
          "cropSmallError": "您上传的图片超过大小限制，请重新选择图片",
          "cropRecommend": "您上传的图片高度或者宽度太小，请选择尺寸足够的图片",
          "uploadErrMsg": "图片上传失败，请重试"
        },
        "height": 200
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1537338635907_4": {
      "type": "SingleImage",
      "dataName": "cardbgeven",
      "label": {
        "description": {
          "icon": "",
          "desc": "请选择图片（尺寸：300*200）"
        },
        "title": "信息背景图（双行）"
      },
      "wrapperStyle": {
        "border": "1px solid #E1E1E1"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "size": 2,
        "saveImageSize": false,
        "width": 300,
        "api": {
          "uploadUrl": "/v1/image_upload.do"
        },
        "lang": {
          "cropUploadLocale": {
            "image": {
              "cancel": "取消",
              "addPhoto": "上传照片"
            },
            "file": {
              "addPhoto": "上传照片"
            },
            "drag": {
              "dropTips": "可以放手了",
              "dragTips": "直接拖动文件到虚线框内即可上传"
            },
            "crop": {
              "save": "保存并关闭",
              "reset": "重新选择",
              "title": "上传"
            }
          },
          "acceptErrMsg": "不支持该类型的图片，请重新选择",
          "cropSmallError": "您上传的图片超过大小限制，请重新选择图片",
          "cropRecommend": "您上传的图片高度或者宽度太小，请选择尺寸足够的图片",
          "uploadErrMsg": "图片上传失败，请重试"
        },
        "height": 200
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1537339086091_1": {
      "type": "Input",
      "dataName": "bdbgcolor",
      "label": {
        "description": {
          "icon": "",
          "desc": "请输入颜色值（如：#FFFFFF）"
        },
        "title": "主体背景色"
      },
      "wrapperStyle": {},
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "defaultValue": true,
        "useReg": false,
        "placeholder": ""
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1524471808179_9": {
      "type": "Input",
      "dataName": "modbgcolor",
      "label": {
        "description": {
          "icon": "",
          "desc": "请输入颜色值（如：#FFFFFF）"
        },
        "title": "模块背景色"
      },
      "wrapperStyle": {},
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "defaultValue": true,
        "useReg": false,
        "placeholder": ""
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1525316108090_1": {
      "type": "SingleImage",
      "dataName": "modbg",
      "label": {
        "description": {
          "icon": "",
          "desc": "请选择图片（尺寸:1920*不限）"
        },
        "title": "模块背景图"
      },
      "wrapperStyle": {
        "border": "1px solid #E1E1E1"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "size": 2,
        "saveImageSize": false,
        "width": 1920,
        "api": {
          "uploadUrl": "/v1/image_upload.do"
        },
        "lang": {
          "cropUploadLocale": {
            "image": {
              "cancel": "取消",
              "addPhoto": "上传照片"
            },
            "file": {
              "addPhoto": "上传照片"
            },
            "drag": {
              "dropTips": "可以放手了",
              "dragTips": "直接拖动文件到虚线框内即可上传"
            },
            "crop": {
              "save": "保存并关闭",
              "reset": "重新选择",
              "title": "上传"
            }
          },
          "acceptErrMsg": "不支持该类型的图片，请重新选择",
          "cropSmallError": "您上传的图片超过大小限制，请重新选择图片",
          "cropRecommend": "您上传的图片高度或者宽度太小，请选择尺寸足够的图片",
          "uploadErrMsg": "图片上传失败，请重试"
        }
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1524471808179_10": {
      "type": "Checkbox",
      "dataName": "hideBottom",
      "label": {
        "description": {
          "icon": "",
          "desc": ""
        },
        "title": ""
      },
      "wrapperStyle": {},
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "defaultValue": true,
        "text": "消除模块默认间距"
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1524471808179_11": {
      "type": "Input",
      "dataName": "modmaring",
      "label": {
        "description": {
          "icon": "",
          "desc": "自定义模块底部间距"
        },
        "title": "模块底部间距"
      },
      "wrapperStyle": {
        "marginTop": "20px"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "defaultValue": true,
        "useReg": false,
        "placeholder": ""
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1524471808179_12": {
      "type": "Checkbox",
      "dataName": "isFluid",
      "label": {
        "description": {
          "icon": "",
          "desc": ""
        },
        "title": ""
      },
      "wrapperStyle": {},
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "defaultValue": true,
        "text": "宽屏（请勿取消）"
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    }
  },
  "layout": [
    {
      "id": "1537485901664_1",
      "root": true,
      "children": []
    },
    {
      "id": "1517109649468_2",
      "root": true,
      "children": []
    },
    {
      "id": "1517109649468_1",
      "root": true,
      "children": []
    },
    {
      "id": "1517109649468_3",
      "root": true,
      "children": []
    },
    {
      "id": "1517109649468_4",
      "root": true,
      "children": []
    },
    {
      "id": "1517109649468_5",
      "root": true,
      "children": []
    },
    {
      "id": "1524880464289_1",
      "root": true,
      "children": []
    },
    {
      "id": "1537336277108_1",
      "root": true,
      "children": []
    },
    {
      "id": "1524471631021_1",
      "root": true,
      "children": []
    },
    {
      "id": "1525179352263_3",
      "root": true,
      "children": []
    },
    {
      "id": "1525238428263_3",
      "root": true,
      "children": []
    },
    {
      "id": "1525179352263_6",
      "root": true,
      "children": []
    },
    {
      "id": "1537338635907_1",
      "root": true,
      "children": []
    },
    {
      "id": "1537338635907_2",
      "root": true,
      "children": []
    },
    {
      "id": "1537338635907_3",
      "root": true,
      "children": []
    },
    {
      "id": "1537338635907_4",
      "root": true,
      "children": []
    },
    {
      "id": "1537339086091_1",
      "root": true,
      "children": []
    },
    {
      "id": "1524471808179_9",
      "root": true,
      "children": []
    },
    {
      "id": "1525316108090_1",
      "root": true,
      "children": []
    },
    {
      "id": "1524471808179_10",
      "root": true,
      "children": []
    },
    {
      "id": "1524471808179_11",
      "root": true,
      "children": []
    },
    {
      "id": "1524471808179_12",
      "root": true,
      "children": []
    }
  ],
  "globalData": {},
  "rules": [
    {
      "condition": "${moduleData.titletype}=='text'",
      "components": {
        "1525237934306_3": {
          "invisible": true
        },
        "1517109649468_5": {
          "invisible": true
        }
      },
      "desc": "titlettype text"
    },
    {
      "condition": "${moduleData.titletype}=='pic'",
      "components": {
        "1525836349983_1": {
          "invisible": true
        },
        "1533721125111_1": {
          "invisible": true
        },
        "1525179352263_6": {
          "invisible": true
        },
        "1525237934306_2": {
          "invisible": true
        },
        "1533195032245_1": {
          "invisible": true
        },
        "1525237934306_1": {
          "invisible": true
        },
        "1517109649468_4": {
          "invisible": true
        },
        "1531983421057_1": {
          "invisible": true
        },
        "1517109649468_3": {
          "invisible": true
        },
        "1534987209494_1": {
          "invisible": true
        },
        "1525238428263_3": {
          "invisible": true
        },
        "1525238428263_2": {
          "invisible": true
        },
        "1533710648395_1": {
          "invisible": true
        },
        "1525832841575_1": {
          "invisible": true
        },
        "1531983421057_2": {
          "invisible": true
        },
        "1525179352263_3": {
          "invisible": true
        },
        "1525238428263_1": {
          "invisible": true
        },
        "1533721380252_1": {
          "invisible": true
        }
      },
      "desc": "titletype pic"
    },
    {
      "condition": "${moduleData.titletype}=='none'",
      "components": {
        "1525836349983_1": {
          "invisible": true
        },
        "1533721125111_1": {
          "invisible": true
        },
        "1525179352263_6": {
          "invisible": true
        },
        "1525237934306_3": {
          "invisible": true
        },
        "1525237934306_2": {
          "invisible": true
        },
        "1533195032245_1": {
          "invisible": true
        },
        "1525237934306_1": {
          "invisible": true
        },
        "1529035133619_2": {
          "invisible": true
        },
        "1517109649468_4": {
          "invisible": true
        },
        "1517109649468_5": {
          "invisible": true
        },
        "1531983421057_1": {
          "invisible": true
        },
        "1517109649468_3": {
          "invisible": true
        },
        "1534987209494_1": {
          "invisible": true
        },
        "1525238428263_3": {
          "invisible": true
        },
        "1525238428263_2": {
          "invisible": true
        },
        "1533710648395_1": {
          "invisible": true
        },
        "1525832841575_1": {
          "invisible": true
        },
        "1531983421057_2": {
          "invisible": true
        },
        "1525179352263_3": {
          "invisible": true
        },
        "1525238428263_1": {
          "invisible": true
        },
        "1533721380252_1": {
          "invisible": true
        }
      },
      "desc": "titletype none"
    },
    {
      "condition": "${moduleData.linenum}==1 && ${moduleData.titletype}!='none'",
      "components": {
        "1524880000002_1": {
          "invisible": true
        },
        "1524880000002_0": {
          "invisible": true
        }
      },
      "desc": "显示一行 && 有标题"
    },
    {
      "condition": "${moduleData.linenum}==1",
      "components": {
        "1524880000003_0": {
          "invisible": true
        },
        "1524880000004_0": {
          "invisible": true
        },
        "1524880000003_1": {
          "invisible": true
        },
        "1524880000007_0": {
          "invisible": true
        },
        "1524880000006_1": {
          "invisible": true
        },
        "1524880000008_0": {
          "invisible": true
        },
        "1524880000007_1": {
          "invisible": true
        },
        "1524880000005_0": {
          "invisible": true
        },
        "1524880000004_1": {
          "invisible": true
        },
        "1524880000006_0": {
          "invisible": true
        },
        "1524880000005_1": {
          "invisible": true
        },
        "1524880000008_1": {
          "invisible": true
        }
      },
      "desc": "显示一行"
    },
    {
      "condition": "${moduleData.linenum}==2 && ${moduleData.titletype}!='none'",
      "components": {
        "1524880000005_0": {
          "invisible": true
        },
        "1524880000005_1": {
          "invisible": true
        }
      },
      "desc": "显示两行 && 有标题"
    },
    {
      "condition": "${moduleData.linenum}==2 ",
      "components": {
        "1524880000006_1": {
          "invisible": true
        },
        "1524880000007_0": {
          "invisible": true
        },
        "1524880000007_1": {
          "invisible": true
        },
        "1524880000008_0": {
          "invisible": true
        },
        "1524880000006_0": {
          "invisible": true
        },
        "1524880000008_1": {
          "invisible": true
        }
      },
      "desc": "显示两行"
    },
    {
      "condition": "${moduleData.linenum}==3 && ${moduleData.titletype}!='none'",
      "components": {
        "1524880000008_0": {
          "invisible": true
        },
        "1524880000008_1": {
          "invisible": true
        }
      },
      "desc": "显示三行 && 有标题"
    },
    {
      "condition": "${moduleData.titletype}=='none'",
      "components": {
        "1524880000002_0": {
          "extension": {
            "width": 1200,
            "height": 173
          },
          "label": {
            "description": {
              "desc": "请选择图片（尺寸:1200*173）"
            }
          }
        },
        "1524880000005_0": {
          "extension": {
            "width": 384,
            "height": 238
          },
          "label": {
            "description": {
              "desc": "请选择图片（尺寸:384*238）"
            }
          }
        }
      },
      "desc": "不显示标题（改变图片尺寸部分）"
    }
  ],
  "moduleData": {
    "titletype": "text",
    "isFluid": true,
    "hideBottom": true,
    "card": [
      ""
    ]
  }
}
export const defFormJson_2={
  "components": {
    "1537485901664_1": {
      "type": "Skip",
      "dataName": "skip",
      "label": {
        "description": {
          "icon": "",
          "desc": ""
        },
        "title": "样板表单"
      },
      "wrapperStyle": {
        "borderBottom": "1px solid #E1E1E1",
        "marginTop": "20px"
      },
      "style": {
        "width": "auto",
        "height": "auto",
        "background": "#ccfffb"
      },
      "invisible": false,
      "extension": {
        "text": "",
        "url": ""
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1517109649468_2": {
      "type": "Skip",
      "dataName": "skip",
      "label": {
        "description": {
          "icon": "",
          "desc": ""
        },
        "title": "标题设置"
      },
      "wrapperStyle": {
        "borderBottom": "1px solid #E1E1E1",
        "marginTop": "20px"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "text": "",
        "url": ""
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1517109649468_1": {
      "type": "Radio",
      "dataName": "titletype",
      "label": {
        "description": {
          "icon": "",
          "desc": "请选择标题类型"
        },
        "title": "标题类型"
      },
      "wrapperStyle": {
        "paddingBottom": "10px"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "confirm": {},
        "shape": "",
        "size": "large",
        "defaultValue": "text",
        "type": "",
        "dataSource": [
          {
            "label": "文字模式",
            "value": "text"
          },
          {
            "label": "图片模式",
            "value": "pic"
          },
          {
            "label": "隐藏",
            "value": "none"
          }
        ]
      },
      "validateProps": {
        "dataType": "Text",
        "required": false,
        "validate": false
      }
    },
    "1517109649468_3": {
      "type": "Input",
      "dataName": "bigtitle",
      "label": {
        "description": {
          "icon": "",
          "desc": "请输入文字"
        },
        "title": "主标题"
      },
      "wrapperStyle": {
        "paddingBottom": "10px"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "defaultValue": true,
        "useReg": false,
        "multiple": false,
        "placeholder": ""
      },
      "validateProps": {
        "dataType": "Text",
        "required": false,
        "validate": false
      }
    },
    "1517109649468_4": {
      "type": "Input",
      "dataName": "vicetitle",
      "label": {
        "description": {
          "icon": "",
          "desc": "请输入文字"
        },
        "title": "副标题"
      },
      "wrapperStyle": {
        "paddingBottom": "10px"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "defaultValue": true,
        "useReg": false,
        "multiple": false,
        "placeholder": ""
      },
      "validateProps": {
        "dataType": "Text",
        "required": false,
        "validate": false
      }
    },
    "1517109649468_5": {
      "type": "SingleImage",
      "dataName": "titlepic",
      "label": {
        "description": {
          "icon": "",
          "desc": "请选择图片（尺寸：1200*173）"
        },
        "title": "图片标题"
      },
      "wrapperStyle": {
        "border": "1px solid #E1E1E1"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "size": 2,
        "width": 1200,
        "api": {
          "uploadUrl": [
            "//11.162.84.173:7001/v1/image_upload.do",
            "/v1/image_upload.do"
          ]
        },
        "lang": {
          "image": {
            "cancel": "取消",
            "addPhoto": "上传照片"
          },
          "acceptErrMsg": "文件类型错误提示",
          "file": {
            "addPhoto": "上传照片"
          },
          "drag": {
            "dropTips": "可以放手了",
            "dragTips": "直接拖动文件到虚线框内即可上传"
          },
          "crop": {
            "save": "保存并关闭",
            "reset": "重新选择",
            "title": "上传"
          }
        },
        "height": 173
      },
      "validateProps": {
        "dataType": "Image",
        "required": false,
        "validate": false
      }
    },
    "1524880464289_1": {
      "type": "Skip",
      "dataName": "skip",
      "label": {
        "description": {
          "icon": "",
          "desc": ""
        },
        "title": "照片设置"
      },
      "wrapperStyle": {
        "borderBottom": "1px solid #E1E1E1"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "endIcon": "arrow-right",
        "text": "",
        "url": "//www.taobao.com"
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1537336277108_1": {
      "type": "Array",
      "dataName": "card",
      "label": {
        "description": {
          "icon": "",
          "desc": ""
        },
        "title": ""
      },
      "wrapperStyle": {
        "border": "1px solid #E1E1E1"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "defaultValue": true,
        "useReg": false,
        "placeholder": "placeholder"
      },
      "validateProps": {
        "min": 1,
        "max": 12,
        "dataType": "Array",
        "required": false,
        "validate": false
      },
      "components": {
        "1537336277108_2": {
          "type": "Map",
          "dataName": "map",
          "label": {
            "description": {
              "icon": "",
              "desc": ""
            },
            "title": ""
          },
          "wrapperStyle": {
            "border": "1px solid #E1E1E1"
          },
          "style": {
            "width": "auto",
            "height": "auto"
          },
          "invisible": false,
          "extension": {
            "defaultValue": true,
            "useReg": false,
            "placeholder": "placeholder"
          },
          "validateProps": {
            "dataType": "",
            "required": false,
            "validate": false
          },
          "components": {
            "1537336277108_3": {
              "type": "SingleImage",
              "dataName": "singleImage",
              "label": {
                "description": {
                  "icon": "",
                  "desc": "请选择图片（尺寸：300*200）"
                },
                "title": "照片"
              },
              "wrapperStyle": {
                "border": "1px solid #E1E1E1"
              },
              "style": {
                "width": "auto",
                "height": "auto"
              },
              "invisible": false,
              "extension": {
                "size": 2,
                "saveImageSize": false,
                "width": 300,
                "api": {
                  "uploadUrl": "/v1/image_upload.do"
                },
                "lang": {
                  "cropUploadLocale": {
                    "image": {
                      "cancel": "取消",
                      "addPhoto": "上传照片"
                    },
                    "file": {
                      "addPhoto": "上传照片"
                    },
                    "drag": {
                      "dropTips": "可以放手了",
                      "dragTips": "直接拖动文件到虚线框内即可上传"
                    },
                    "crop": {
                      "save": "保存并关闭",
                      "reset": "重新选择",
                      "title": "上传"
                    }
                  },
                  "acceptErrMsg": "不支持该类型的图片，请重新选择",
                  "cropSmallError": "您上传的图片超过大小限制，请重新选择图片",
                  "cropRecommend": "您上传的图片高度或者宽度太小，请选择尺寸足够的图片",
                  "uploadErrMsg": "图片上传失败，请重试"
                },
                "height": 200
              },
              "validateProps": {
                "dataType": "",
                "required": false,
                "validate": false
              }
            },
            "1537336277108_4": {
              "type": "Input",
              "dataName": "title",
              "label": {
                "description": {
                  "icon": "",
                  "desc": "请输入文字"
                },
                "title": "标题"
              },
              "wrapperStyle": {},
              "style": {
                "width": "auto",
                "height": "auto"
              },
              "invisible": false,
              "extension": {
                "defaultValue": true,
                "useReg": false,
                "placeholder": ""
              },
              "validateProps": {
                "dataType": "",
                "required": false,
                "validate": false
              }
            },
            "1537336277108_5": {
              "type": "Input",
              "dataName": "text",
              "label": {
                "description": {
                  "icon": "",
                  "desc": "请输入文字"
                },
                "title": "内容"
              },
              "wrapperStyle": {},
              "style": {
                "width": "auto",
                "height": "auto"
              },
              "invisible": false,
              "extension": {
                "defaultValue": true,
                "useReg": false,
                "multiple": true,
                "placeholder": ""
              },
              "validateProps": {
                "dataType": "",
                "required": false,
                "validate": false
              }
            },
            "1537339836555_1": {
              "type": "Input",
              "dataName": "url",
              "label": {
                "description": {
                  "icon": "",
                  "desc": "输入点击后跳转的地址"
                },
                "title": "链接"
              },
              "wrapperStyle": {},
              "style": {
                "width": "auto",
                "height": "auto"
              },
              "invisible": false,
              "extension": {
                "defaultValue": true,
                "useReg": false,
                "placeholder": ""
              },
              "validateProps": {
                "dataType": "",
                "required": false,
                "validate": false
              }
            }
          },
          "layout": [
            {
              "id": "1537336277108_3",
              "root": true,
              "children": []
            },
            {
              "id": "1537336277108_4",
              "root": true,
              "children": []
            },
            {
              "id": "1537336277108_5",
              "root": true,
              "children": []
            },
            {
              "id": "1537339836555_1",
              "root": true,
              "children": []
            }
          ]
        }
      },
      "layout": [
        {
          "id": "1537336277108_2",
          "root": true,
          "children": []
        }
      ]
    },
    "1524471631021_1": {
      "type": "Skip",
      "dataName": "skip",
      "label": {
        "description": {
          "icon": "",
          "desc": ""
        },
        "title": "样式设置"
      },
      "wrapperStyle": {
        "borderBottom": "1px solid #E1E1E1",
        "marginTop": "20px"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "endIcon": "arrow-right",
        "text": "",
        "url": "//www.taobao.com"
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1525179352263_3": {
      "type": "Input",
      "dataName": "bigtitlefontcolor",
      "label": {
        "description": {
          "icon": "",
          "desc": "请输入颜色值（如：#FFFFFF）"
        },
        "title": "主标题颜色"
      },
      "wrapperStyle": {},
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "defaultValue": true,
        "useReg": false,
        "placeholder": ""
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1525238428263_3": {
      "type": "Input",
      "dataName": "vicetitlefontcolor",
      "label": {
        "description": {
          "icon": "",
          "desc": "请输入颜色值（如：#FFFFFF）"
        },
        "title": "副标题颜色"
      },
      "wrapperStyle": {},
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "defaultValue": true,
        "useReg": false,
        "placeholder": " "
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1525179352263_6": {
      "type": "SingleImage",
      "dataName": "titletextbg",
      "label": {
        "description": {
          "icon": "",
          "desc": "请选择图片（尺寸：1200*173）"
        },
        "title": "标题背景图"
      },
      "wrapperStyle": {
        "border": "1px solid #E1E1E1"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "size": 2,
        "saveImageSize": false,
        "width": 1200,
        "api": {
          "uploadUrl": "/v1/image_upload.do"
        },
        "lang": {
          "cropUploadLocale": {
            "image": {
              "cancel": "取消",
              "addPhoto": "上传照片"
            },
            "file": {
              "addPhoto": "上传照片"
            },
            "drag": {
              "dropTips": "可以放手了",
              "dragTips": "直接拖动文件到虚线框内即可上传"
            },
            "crop": {
              "save": "保存并关闭",
              "reset": "重新选择",
              "title": "上传"
            }
          },
          "acceptErrMsg": "不支持该类型的图片，请重新选择",
          "cropSmallError": "您上传的图片超过大小限制，请重新选择图片",
          "cropRecommend": "您上传的图片高度或者宽度太小，请选择尺寸足够的图片",
          "uploadErrMsg": "图片上传失败，请重试"
        },
        "height": 173
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1537338635907_1": {
      "type": "Input",
      "dataName": "cardtitlecolor",
      "label": {
        "description": {
          "icon": "",
          "desc": "请输入颜色值（如：#FFFFFF）"
        },
        "title": "信息标题颜色"
      },
      "wrapperStyle": {},
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "defaultValue": true,
        "useReg": false,
        "placeholder": " "
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1537338635907_2": {
      "type": "Input",
      "dataName": "cardtextcolor",
      "label": {
        "description": {
          "icon": "",
          "desc": "请输入颜色值（如：#FFFFFF）"
        },
        "title": "信息内容颜色"
      },
      "wrapperStyle": {},
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "defaultValue": true,
        "useReg": false,
        "placeholder": " "
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1537338635907_3": {
      "type": "SingleImage",
      "dataName": "cardbg",
      "label": {
        "description": {
          "icon": "",
          "desc": "请选择图片（尺寸：300*200）"
        },
        "title": "信息背景图（单行）"
      },
      "wrapperStyle": {
        "border": "1px solid #E1E1E1"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "size": 2,
        "saveImageSize": false,
        "width": 300,
        "api": {
          "uploadUrl": "/v1/image_upload.do"
        },
        "lang": {
          "cropUploadLocale": {
            "image": {
              "cancel": "取消",
              "addPhoto": "上传照片"
            },
            "file": {
              "addPhoto": "上传照片"
            },
            "drag": {
              "dropTips": "可以放手了",
              "dragTips": "直接拖动文件到虚线框内即可上传"
            },
            "crop": {
              "save": "保存并关闭",
              "reset": "重新选择",
              "title": "上传"
            }
          },
          "acceptErrMsg": "不支持该类型的图片，请重新选择",
          "cropSmallError": "您上传的图片超过大小限制，请重新选择图片",
          "cropRecommend": "您上传的图片高度或者宽度太小，请选择尺寸足够的图片",
          "uploadErrMsg": "图片上传失败，请重试"
        },
        "height": 200
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1537338635907_4": {
      "type": "SingleImage",
      "dataName": "cardbgeven",
      "label": {
        "description": {
          "icon": "",
          "desc": "请选择图片（尺寸：300*200）"
        },
        "title": "信息背景图（双行）"
      },
      "wrapperStyle": {
        "border": "1px solid #E1E1E1"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "size": 2,
        "saveImageSize": false,
        "width": 300,
        "api": {
          "uploadUrl": "/v1/image_upload.do"
        },
        "lang": {
          "cropUploadLocale": {
            "image": {
              "cancel": "取消",
              "addPhoto": "上传照片"
            },
            "file": {
              "addPhoto": "上传照片"
            },
            "drag": {
              "dropTips": "可以放手了",
              "dragTips": "直接拖动文件到虚线框内即可上传"
            },
            "crop": {
              "save": "保存并关闭",
              "reset": "重新选择",
              "title": "上传"
            }
          },
          "acceptErrMsg": "不支持该类型的图片，请重新选择",
          "cropSmallError": "您上传的图片超过大小限制，请重新选择图片",
          "cropRecommend": "您上传的图片高度或者宽度太小，请选择尺寸足够的图片",
          "uploadErrMsg": "图片上传失败，请重试"
        },
        "height": 200
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1537339086091_1": {
      "type": "Input",
      "dataName": "bdbgcolor",
      "label": {
        "description": {
          "icon": "",
          "desc": "请输入颜色值（如：#FFFFFF）"
        },
        "title": "主体背景色"
      },
      "wrapperStyle": {},
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "defaultValue": true,
        "useReg": false,
        "placeholder": ""
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1524471808179_9": {
      "type": "Input",
      "dataName": "modbgcolor",
      "label": {
        "description": {
          "icon": "",
          "desc": "请输入颜色值（如：#FFFFFF）"
        },
        "title": "模块背景色"
      },
      "wrapperStyle": {},
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "defaultValue": true,
        "useReg": false,
        "placeholder": ""
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1525316108090_1": {
      "type": "SingleImage",
      "dataName": "modbg",
      "label": {
        "description": {
          "icon": "",
          "desc": "请选择图片（尺寸:1920*不限）"
        },
        "title": "模块背景图"
      },
      "wrapperStyle": {
        "border": "1px solid #E1E1E1"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "size": 2,
        "saveImageSize": false,
        "width": 1920,
        "api": {
          "uploadUrl": "/v1/image_upload.do"
        },
        "lang": {
          "cropUploadLocale": {
            "image": {
              "cancel": "取消",
              "addPhoto": "上传照片"
            },
            "file": {
              "addPhoto": "上传照片"
            },
            "drag": {
              "dropTips": "可以放手了",
              "dragTips": "直接拖动文件到虚线框内即可上传"
            },
            "crop": {
              "save": "保存并关闭",
              "reset": "重新选择",
              "title": "上传"
            }
          },
          "acceptErrMsg": "不支持该类型的图片，请重新选择",
          "cropSmallError": "您上传的图片超过大小限制，请重新选择图片",
          "cropRecommend": "您上传的图片高度或者宽度太小，请选择尺寸足够的图片",
          "uploadErrMsg": "图片上传失败，请重试"
        }
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1524471808179_10": {
      "type": "Checkbox",
      "dataName": "hideBottom",
      "label": {
        "description": {
          "icon": "",
          "desc": ""
        },
        "title": ""
      },
      "wrapperStyle": {},
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "defaultValue": true,
        "text": "消除模块默认间距"
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1524471808179_11": {
      "type": "Input",
      "dataName": "modmaring",
      "label": {
        "description": {
          "icon": "",
          "desc": "自定义模块底部间距"
        },
        "title": "模块底部间距"
      },
      "wrapperStyle": {
        "marginTop": "20px"
      },
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "defaultValue": true,
        "useReg": false,
        "placeholder": ""
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    },
    "1524471808179_12": {
      "type": "Checkbox",
      "dataName": "isFluid",
      "label": {
        "description": {
          "icon": "",
          "desc": ""
        },
        "title": ""
      },
      "wrapperStyle": {},
      "style": {
        "width": "auto",
        "height": "auto"
      },
      "invisible": false,
      "extension": {
        "defaultValue": true,
        "text": "宽屏（请勿取消）"
      },
      "validateProps": {
        "dataType": "",
        "required": false,
        "validate": false
      }
    }
  },
  "layout": [
    {
      "id": "1537485901664_1",
      "root": true,
      "children": []
    },
    {
      "id": "1517109649468_2",
      "root": true,
      "children": []
    },
    {
      "id": "1517109649468_1",
      "root": true,
      "children": []
    },
    {
      "id": "1517109649468_3",
      "root": true,
      "children": []
    },
    {
      "id": "1517109649468_4",
      "root": true,
      "children": []
    },
    {
      "id": "1517109649468_5",
      "root": true,
      "children": []
    },
    {
      "id": "1524880464289_1",
      "root": true,
      "children": []
    },
    {
      "id": "1537336277108_1",
      "root": true,
      "children": []
    },
    {
      "id": "1524471631021_1",
      "root": true,
      "children": []
    },
    {
      "id": "1525179352263_3",
      "root": true,
      "children": []
    },
    {
      "id": "1525238428263_3",
      "root": true,
      "children": []
    },
    {
      "id": "1525179352263_6",
      "root": true,
      "children": []
    },
    {
      "id": "1537338635907_1",
      "root": true,
      "children": []
    },
    {
      "id": "1537338635907_2",
      "root": true,
      "children": []
    },
    {
      "id": "1537338635907_3",
      "root": true,
      "children": []
    },
    {
      "id": "1537338635907_4",
      "root": true,
      "children": []
    },
    {
      "id": "1537339086091_1",
      "root": true,
      "children": []
    },
    {
      "id": "1524471808179_9",
      "root": true,
      "children": []
    },
    {
      "id": "1525316108090_1",
      "root": true,
      "children": []
    },
    {
      "id": "1524471808179_10",
      "root": true,
      "children": []
    },
    {
      "id": "1524471808179_11",
      "root": true,
      "children": []
    },
    {
      "id": "1524471808179_12",
      "root": true,
      "children": []
    }
  ],
  "globalData": {},
  "rules": [
    {
      "condition": "${moduleData.titletype}=='text'",
      "components": {
        "1525237934306_3": {
          "invisible": true
        },
        "1517109649468_5": {
          "invisible": true
        }
      },
      "desc": "titlettype text"
    },
    {
      "condition": "${moduleData.titletype}=='pic'",
      "components": {
        "1525836349983_1": {
          "invisible": true
        },
        "1533721125111_1": {
          "invisible": true
        },
        "1525179352263_6": {
          "invisible": true
        },
        "1525237934306_2": {
          "invisible": true
        },
        "1533195032245_1": {
          "invisible": true
        },
        "1525237934306_1": {
          "invisible": true
        },
        "1517109649468_4": {
          "invisible": true
        },
        "1531983421057_1": {
          "invisible": true
        },
        "1517109649468_3": {
          "invisible": true
        },
        "1534987209494_1": {
          "invisible": true
        },
        "1525238428263_3": {
          "invisible": true
        },
        "1525238428263_2": {
          "invisible": true
        },
        "1533710648395_1": {
          "invisible": true
        },
        "1525832841575_1": {
          "invisible": true
        },
        "1531983421057_2": {
          "invisible": true
        },
        "1525179352263_3": {
          "invisible": true
        },
        "1525238428263_1": {
          "invisible": true
        },
        "1533721380252_1": {
          "invisible": true
        }
      },
      "desc": "titletype pic"
    },
    {
      "condition": "${moduleData.titletype}=='none'",
      "components": {
        "1525836349983_1": {
          "invisible": true
        },
        "1533721125111_1": {
          "invisible": true
        },
        "1525179352263_6": {
          "invisible": true
        },
        "1525237934306_3": {
          "invisible": true
        },
        "1525237934306_2": {
          "invisible": true
        },
        "1533195032245_1": {
          "invisible": true
        },
        "1525237934306_1": {
          "invisible": true
        },
        "1529035133619_2": {
          "invisible": true
        },
        "1517109649468_4": {
          "invisible": true
        },
        "1517109649468_5": {
          "invisible": true
        },
        "1531983421057_1": {
          "invisible": true
        },
        "1517109649468_3": {
          "invisible": true
        },
        "1534987209494_1": {
          "invisible": true
        },
        "1525238428263_3": {
          "invisible": true
        },
        "1525238428263_2": {
          "invisible": true
        },
        "1533710648395_1": {
          "invisible": true
        },
        "1525832841575_1": {
          "invisible": true
        },
        "1531983421057_2": {
          "invisible": true
        },
        "1525179352263_3": {
          "invisible": true
        },
        "1525238428263_1": {
          "invisible": true
        },
        "1533721380252_1": {
          "invisible": true
        }
      },
      "desc": "titletype none"
    },
    {
      "condition": "${moduleData.linenum}==1 && ${moduleData.titletype}!='none'",
      "components": {
        "1524880000002_1": {
          "invisible": true
        },
        "1524880000002_0": {
          "invisible": true
        }
      },
      "desc": "显示一行 && 有标题"
    },
    {
      "condition": "${moduleData.linenum}==1",
      "components": {
        "1524880000003_0": {
          "invisible": true
        },
        "1524880000004_0": {
          "invisible": true
        },
        "1524880000003_1": {
          "invisible": true
        },
        "1524880000007_0": {
          "invisible": true
        },
        "1524880000006_1": {
          "invisible": true
        },
        "1524880000008_0": {
          "invisible": true
        },
        "1524880000007_1": {
          "invisible": true
        },
        "1524880000005_0": {
          "invisible": true
        },
        "1524880000004_1": {
          "invisible": true
        },
        "1524880000006_0": {
          "invisible": true
        },
        "1524880000005_1": {
          "invisible": true
        },
        "1524880000008_1": {
          "invisible": true
        }
      },
      "desc": "显示一行"
    },
    {
      "condition": "${moduleData.linenum}==2 && ${moduleData.titletype}!='none'",
      "components": {
        "1524880000005_0": {
          "invisible": true
        },
        "1524880000005_1": {
          "invisible": true
        }
      },
      "desc": "显示两行 && 有标题"
    },
    {
      "condition": "${moduleData.linenum}==2 ",
      "components": {
        "1524880000006_1": {
          "invisible": true
        },
        "1524880000007_0": {
          "invisible": true
        },
        "1524880000007_1": {
          "invisible": true
        },
        "1524880000008_0": {
          "invisible": true
        },
        "1524880000006_0": {
          "invisible": true
        },
        "1524880000008_1": {
          "invisible": true
        }
      },
      "desc": "显示两行"
    },
    {
      "condition": "${moduleData.linenum}==3 && ${moduleData.titletype}!='none'",
      "components": {
        "1524880000008_0": {
          "invisible": true
        },
        "1524880000008_1": {
          "invisible": true
        }
      },
      "desc": "显示三行 && 有标题"
    },
    {
      "condition": "${moduleData.titletype}=='none'",
      "components": {
        "1524880000002_0": {
          "extension": {
            "width": 1200,
            "height": 173
          },
          "label": {
            "description": {
              "desc": "请选择图片（尺寸:1200*173）"
            }
          }
        },
        "1524880000005_0": {
          "extension": {
            "width": 384,
            "height": 238
          },
          "label": {
            "description": {
              "desc": "请选择图片（尺寸:384*238）"
            }
          }
        }
      },
      "desc": "不显示标题（改变图片尺寸部分）"
    }
  ],
  "moduleData": {
    "titletype": "text",
    "isFluid": true,
    "hideBottom": true,
    "card": [
      ""
    ]
  }
}
