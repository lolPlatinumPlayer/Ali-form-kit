export default {
    "components": {
        "1527375734453_3": {
            "type": "Input",
            "dataName": "input",
            "label": {
                "title": "Input Title",
                "description": {
                    "desc": "Input description text",
                    "icon": "credit-level-filling"
                }
            },
            "wrapperStyle": {
                "marginTop": "20px",
                "paddingBottom": "20px",
                "borderBottom": "1px solid #E1E1E1"
            },
            "style": {
                "width": "auto",
                "background": "red",
                "opacity": ".5"
            },
            "extension": {
                "placeholder": "placeholder",
                "defaultValue": true,
                "useReg": false
            },
            "validateProps": {
                "required": false,
                "dataType": "",
                "validate": false
            }
        },
        "1527375734453_4": {
            "type": "Checkbox",
            "dataName": "checkbox",
            "label": {
                "title": "Checkbox Title",
                "description": {
                    "desc": "Checkbox description text",
                    "icon": "mobile-phone"
                }
            },
            "wrapperStyle": {
                "marginTop": "20px",
                "paddingBottom": "20px",
                "borderBottom": "1px solid #E1E1E1"
            },
            "style": {
                "width": "auto",
                "height": "auto"
            },
            "extension": {
                "text": "label1111111111111",
                "defaultValue": true
            },
            "validateProps": {
                "required": false,
                "dataType": "",
                "validate": false
            }
        },
        "1527375734453_5": {
            "type": "Radio",
            "dataName": "radio",
            "label": {
                "title": "Title",
                "description": {
                    "desc": "radio description text",
                    "icon": "mobile-phone"
                }
            },
            "wrapperStyle": {},
            "style": {
                "width": "auto",
                "height": "auto"
            },
            "extension": {
                "type": "",
                "shape": "",
                "size": "large",
                "defaultValue": "1",
                "confirm": {},
                "dataSource": [
                    {
                        "value": "1",
                        "label": "radio1"
                    },
                    {
                        "value": "2",
                        "label": "radio2"
                    }
                ]
            },
            "validateProps": {
                "required": false,
                "dataType": "Number",
                "validate": false
            }
        },
        "1527375734453_6": {
            "type": "Select",
            "dataName": "select",
            "label": {
                "title": "Select Title",
                "description": {
                    "desc": "Select description text",
                    "icon": "mobile-phone"
                }
            },
            "wrapperStyle": {
                "marginTop": "20px",
                "paddingBottom": "20px",
                "borderBottom": "1px solid #E1E1E1"
            },
            "style": {
                "width": "auto",
                "height": "auto"
            },
            "extension": {
                "placeholder": "placeholder",
                "defaultValue": 805476889,
                "dataSource": [
                    {
                        "label": "test+group",
                        "value": 805476889
                    },
                    {
                        "label": "good",
                        "value": 803674808
                    }
                ]
            },
            "validateProps": {
                "required": false,
                "dataType": "",
                "validate": false
            }
        },
        "1527375734453_7": {
            "type": "Skip",
            "dataName": "skip",
            "label": {
                "title": "Skip Title",
                "description": {
                    "desc": "Skip description text",
                    "icon": "mobile-phone"
                }
            },
            "wrapperStyle": {},
            "style": {
                "width": "auto",
                "height": "auto"
            },
            "extension": {
                "url": "//www.taobao.com",
                "text": "skipText",
                "endIcon": "arrow-right"
            },
            "validateProps": {
                "required": false,
                "dataType": "",
                "validate": false
            }
        },
        "1527375734453_8": {
            "type": "SingleImage",
            "dataName": "singleImage",
            "label": {
                "title": "SingleImage Title",
                "description": {
                    "desc": "SingleImage description text",
                    "icon": "mobile-phone"
                }
            },
            "wrapperStyle": {
                "border": "1px solid #E1E1E1"
            },
            "style": {
                "width": "auto",
                "height": "auto"
            },
            "extension": {
                "width": 1200,
                "height": 200,
                "size": 2,
                "api": {
                    "uploadUrl": "/v1/image_upload.do"
                },
                "saveImageSize": false,
                "lang": {
                    "cropSmallError": "您上传的图片超过大小限制，请重新选择图片",
                    "cropRecommend": "您上传的图片高度或者宽度太小，请选择尺寸足够的图片",
                    "uploadErrMsg": "图片上传失败，请重试",
                    "acceptErrMsg": "不支持该类型的图片，请重新选择",
                    "cropUploadLocale": {
                        "file": {
                            "addPhoto": "上传照片"
                        },
                        "image": {
                            "cancel": "取消",
                            "addPhoto": "上传照片"
                        },
                        "crop": {
                            "title": "上传",
                            "reset": "重新选择",
                            "save": "保存并关闭"
                        },
                        "drag": {
                            "dragTips": "直接拖动文件到虚线框内即可上传",
                            "dropTips": "可以放手了"
                        }
                    }
                }
            },
            "validateProps": {
                "required": false,
                "dataType": "",
                "validate": false
            }
        },
        "1527375734453_9": {
            "type": "VideoSelect",
            "dataName": "input",
            "label": {
                "title": "Input Title",
                "description": {
                    "desc": "Input description text",
                    "icon": "mobile-phone"
                }
            },
            "wrapperStyle": {
                "border": "1px solid #E1E1E1"
            },
            "style": {
                "width": "auto",
                "height": "auto"
            },
            "extension": {
                "text": "选择视频",
                "url": "/section/selectVideo"
            },
            "validateProps": {
                "required": false,
                "dataType": "",
                "validate": false
            }
        },
        "1527375734453_10": {
            "type": "Array",
            "dataName": "array",
            "label": {
                "title": "array Title",
                "description": {
                    "desc": "array description text",
                    "icon": "mobile-phone"
                }
            },
            "wrapperStyle": {
                "border": "1px solid #E1E1E1"
            },
            "style": {
                "width": "auto",
                "height": "auto"
            },
            "extension": {
                "placeholder": "placeholder",
                "defaultValue": true,
                "useReg": false
            },
            "validateProps": {
                "min": 1,
                "max": 6,
                "required": false,
                "dataType": "Array",
                "validate": false
            }
        },
        "1527375734453_11": {
            "type": "Map",
            "dataName": "map",
            "label": {
                "title": "map Title",
                "description": {
                    "desc": "map description text",
                    "icon": "mobile-phone"
                }
            },
            "wrapperStyle": {
                "border": "1px solid #E1E1E1"
            },
            "style": {
                "width": "auto",
                "height": "auto"
            },
            "extension": {
                "placeholder": "placeholder",
                "defaultValue": true,
                "useReg": false
            },
            "validateProps": {
                "required": false,
                "dataType": "",
                "validate": false
            }
        },
        "1517487251897_6": {
            "type": "Skip",
            "dataName": "skip1",
            "label": {
                "description": {
                    "icon": "",
                    "desc": ""
                },
                "title": "类目设置"
            },
            "wrapperStyle": {
                "borderBottom": "1px solid #E1E1E1",
                "marginTop": "20px"
            },
            "style": {
                "width": "auto",
                "height": "auto"
            },
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
        "1525246910541_2": {
            "type": "Checkbox",
            "dataName": "catepicshow",
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
            "extension": {
                "defaultValue": true,
                "text": "类目图片显示"
            },
            "validateProps": {
                "dataType": "",
                "required": false,
                "validate": false
            }
        },
        "1526520678215_2": {
            "type": "Checkbox",
            "dataName": "rowlineshow",
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
            "extension": {
                "defaultValue": true,
                "text": "行分割线显示"
            },
            "validateProps": {
                "dataType": "",
                "required": false,
                "validate": false
            }
        },
        "1518180709693_7": {
            "type": "Radio",
            "dataName": "catetype",
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
            "extension": {
                "confirm": {},
                "shape": "",
                "size": "large",
                "defaultValue": "auto",
                "type": "",
                "dataSource": [
                    {
                        "label": "自动",
                        "value": "auto"
                    },
                    {
                        "label": "自定义设置",
                        "value": "manually"
                    }
                ]
            },
            "validateProps": {
                "dataType": "Bool",
                "required": false,
                "validate": false
            }
        },
        "1518180709693_1": {
            "type": "Array",
            "dataName": "catearray",
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
            "extension": {
                "defaultValue": true,
                "useReg": false,
                "placeholder": "placeholder"
            },
            "validateProps": {
                "min": 5,
                "max": 20,
                "dataType": "Array",
                "required": false,
                "validate": false
            },
            "components": {
                "1525396626798_1": {
                    "type": "Map",
                    "dataName": "map1",
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
                        "1525396626798_2": {
                            "type": "SingleImage",
                            "dataName": "pic",
                            "label": {
                                "description": {
                                    "icon": "",
                                    "desc": "请选择图片（尺寸：150*150）"
                                },
                                "title": "类目图片"
                            },
                            "wrapperStyle": {
                                "border": "1px solid #E1E1E1"
                            },
                            "style": {
                                "width": "auto",
                                "height": "auto"
                            },
                            "extension": {
                                "size": 2,
                                "saveImageSize": false,
                                "width": 150,
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
                                "height": 150
                            },
                            "validateProps": {
                                "dataType": "Image",
                                "required": false,
                                "validate": false
                            }
                        },
                        "1525396626798_3": {
                            "type": "Input",
                            "dataName": "url",
                            "label": {
                                "description": {
                                    "icon": "",
                                    "desc": "请输入类目的链接"
                                },
                                "title": "类目链接"
                            },
                            "wrapperStyle": {},
                            "style": {
                                "width": "auto",
                                "height": "auto"
                            },
                            "extension": {
                                "defaultValue": true,
                                "useReg": false,
                                "placeholder": ""
                            },
                            "validateProps": {
                                "dataType": "Link",
                                "required": false,
                                "validate": false
                            }
                        },
                        "1525396626798_4": {
                            "type": "Input",
                            "dataName": "groupName",
                            "label": {
                                "description": {
                                    "icon": "",
                                    "desc": "请输入文字"
                                },
                                "title": "类目名称"
                            },
                            "wrapperStyle": {},
                            "style": {
                                "width": "auto",
                                "height": "auto"
                            },
                            "extension": {
                                "defaultValue": true,
                                "useReg": false,
                                "placeholder": "category"
                            },
                            "validateProps": {
                                "dataType": "Text",
                                "required": false,
                                "validate": false
                            }
                        }
                    },
                    "layout": [
                        {
                            "id": "1525396626798_2",
                            "root": true,
                            "children": []
                        },
                        {
                            "id": "1525396626798_3",
                            "root": true,
                            "children": []
                        },
                        {
                            "id": "1525396626798_4",
                            "root": true,
                            "children": []
                        }
                    ]
                }
            },
            "layout": [
                {
                    "id": "1525396626798_1",
                    "root": true,
                    "children": []
                }
            ]
        },
        "1519463147164_4": {
            "type": "Array",
            "dataName": "catpicarray",
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
            "extension": {
                "defaultValue": true,
                "useReg": false,
                "placeholder": "placeholder"
            },
            "validateProps": {
                "min": 1,
                "max": 20,
                "dataType": "Array",
                "required": false,
                "validate": false
            },
            "components": {
                "1519463147164_5": {
                    "type": "SingleImage",
                    "dataName": "ampic",
                    "label": {
                        "description": {
                            "icon": "",
                            "desc": "请选择图片（尺寸：150*150）"
                        },
                        "title": "类目图片"
                    },
                    "wrapperStyle": {
                        "border": "1px solid #E1E1E1"
                    },
                    "style": {
                        "width": "auto",
                        "height": "auto"
                    },
                    "extension": {
                        "size": 2,
                        "width": 150,
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
                        "height": 150
                    },
                    "validateProps": {
                        "dataType": "Image",
                        "required": false,
                        "validate": false
                    }
                }
            },
            "layout": [
                {
                    "id": "1519463147164_5",
                    "root": true,
                    "children": []
                }
            ]
        },
        "1518153990225_2": {
            "type": "Skip",
            "dataName": "skip3",
            "label": {
                "description": {
                    "icon": "",
                    "endIcon": "arrow-double-right",
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
        "1525938766853_3": {
            "type": "SingleImage",
            "dataName": "itembg",
            "label": {
                "description": {
                    "icon": "",
                    "desc": "请选择图片（尺寸：150*43）"
                },
                "title": "类目信息背景"
            },
            "wrapperStyle": {
                "border": "1px solid #E1E1E1"
            },
            "style": {
                "width": "auto",
                "height": "auto"
            },
            "extension": {
                "size": 2,
                "saveImageSize": false,
                "width": 150,
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
                "height": 43
            },
            "validateProps": {
                "dataType": "",
                "required": false,
                "validate": false
            }
        },
        "1525938766853_4": {
            "type": "SingleImage",
            "dataName": "actitembg",
            "label": {
                "description": {
                    "icon": "",
                    "desc": "请选择图片（尺寸：150*43）"
                },
                "title": "选中类目信息背景"
            },
            "wrapperStyle": {
                "border": "1px solid #E1E1E1"
            },
            "style": {
                "width": "auto",
                "height": "auto"
            },
            "extension": {
                "size": 2,
                "saveImageSize": false,
                "width": 150,
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
                "height": 43
            },
            "validateProps": {
                "dataType": "",
                "required": false,
                "validate": false
            }
        },
        "1518180709693_5": {
            "type": "Input",
            "dataName": "catetextcolor",
            "label": {
                "description": {
                    "icon": "",
                    "desc": "请输入颜色色值 （如：#FFFFFF）"
                },
                "title": "类目颜色"
            },
            "wrapperStyle": {},
            "style": {
                "width": "auto",
                "height": "auto"
            },
            "extension": {
                "defaultValue": true,
                "useReg": false,
                "placeholder": "#FFFFFF"
            },
            "validateProps": {
                "dataType": "Text",
                "required": false,
                "validate": false
            }
        },
        "1525938766853_1": {
            "type": "Input",
            "dataName": "actcatetextcolor",
            "label": {
                "description": {
                    "icon": "",
                    "desc": "请输入颜色色值 （如：#FFFFFF）"
                },
                "title": "选中类目颜色"
            },
            "wrapperStyle": {},
            "style": {
                "width": "auto",
                "height": "auto"
            },
            "extension": {
                "defaultValue": true,
                "useReg": false,
                "placeholder": "#FFFFFF"
            },
            "validateProps": {
                "dataType": "Text",
                "required": false,
                "validate": false
            }
        },
        "1526529145393_1": {
            "type": "Input",
            "dataName": "bordercolor",
            "label": {
                "description": {
                    "icon": "",
                    "desc": "请输入颜色色值 （如：#FFFFFF）"
                },
                "title": "类目边框颜色"
            },
            "wrapperStyle": {},
            "style": {
                "width": "auto",
                "height": "auto"
            },
            "extension": {
                "defaultValue": true,
                "useReg": false,
                "placeholder": "#FFFFFF"
            },
            "validateProps": {
                "dataType": "",
                "required": false,
                "validate": false
            }
        },
        "1526529145393_2": {
            "type": "Input",
            "dataName": "actbordercolor",
            "label": {
                "description": {
                    "icon": "",
                    "desc": "请输入颜色色值 （如：#FFFFFF）"
                },
                "title": "选中类目边框颜色"
            },
            "wrapperStyle": {},
            "style": {
                "width": "auto",
                "height": "auto"
            },
            "extension": {
                "defaultValue": true,
                "useReg": false,
                "placeholder": "#FFFFFF"
            },
            "validateProps": {
                "dataType": "",
                "required": false,
                "validate": false
            }
        },
        "1526520678215_3": {
            "type": "Input",
            "dataName": "rowlinecolor",
            "label": {
                "description": {
                    "icon": "",
                    "desc": "请输入颜色色值 （如：#FFFFFF）"
                },
                "title": "行分割线颜色"
            },
            "wrapperStyle": {},
            "style": {
                "width": "auto",
                "height": "auto"
            },
            "extension": {
                "defaultValue": true,
                "useReg": false,
                "placeholder": "#FFFFFF"
            },
            "validateProps": {
                "dataType": "Text",
                "required": false,
                "validate": false
            }
        },
        "1525397386195_2": {
            "type": "Input",
            "dataName": "bdbgcolor",
            "label": {
                "description": {
                    "icon": "",
                    "desc": "请输入颜色色值 （如：#FFFFFF）"
                },
                "title": "主体背景色"
            },
            "wrapperStyle": {},
            "style": {
                "width": "auto",
                "height": "auto"
            },
            "extension": {
                "defaultValue": true,
                "useReg": false,
                "placeholder": "#FFFFFF"
            },
            "validateProps": {
                "dataType": "Text",
                "required": false,
                "validate": false
            }
        },
        "1525248492546_1": {
            "type": "Input",
            "dataName": "modbgcolor",
            "label": {
                "description": {
                    "icon": "",
                    "desc": "请输入颜色色值 （如：#FFFFFF）"
                },
                "title": "模块背景色"
            },
            "wrapperStyle": {},
            "style": {
                "width": "auto",
                "height": "auto"
            },
            "extension": {
                "defaultValue": true,
                "useReg": false,
                "placeholder": "#FFFFFF"
            },
            "validateProps": {
                "dataType": "Text",
                "required": false,
                "validate": false
            }
        },
        "1525397386195_1": {
            "type": "SingleImage",
            "dataName": "modbg",
            "label": {
                "description": {
                    "icon": "",
                    "desc": "请选择图片（尺寸：1920*不限）"
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
                "dataType": "Image",
                "required": false,
                "validate": false
            }
        },
        "1518153990225_3": {
            "type": "Checkbox",
            "dataName": "hideBottom",
            "label": {
                "description": {
                    "icon": "",
                    "desc": ""
                },
                "title": "模块底部间距"
            },
            "wrapperStyle": {},
            "style": {
                "width": "auto",
                "height": "auto"
            },
            "extension": {
                "defaultValue": true,
                "text": "消除模块默认间距"
            },
            "validateProps": {
                "dataType": "Bool",
                "required": false,
                "validate": false
            }
        },
        "1518153990225_4": {
            "type": "Input",
            "dataName": "modmaring",
            "label": {
                "description": {
                    "icon": "",
                    "desc": "自定义模块底部间距"
                },
                "title": ""
            },
            "wrapperStyle": {},
            "style": {
                "width": "auto",
                "height": "auto"
            },
            "extension": {
                "defaultValue": true,
                "useReg": false,
                "placeholder": ""
            },
            "validateProps": {
                "dataType": "Number",
                "required": false,
                "validate": false
            }
        },
        "1525247697625_1": {
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
            "id": "1527375734453_3",
            "root": true,
            "children": []
        },
        {
            "id": "1527375734453_4",
            "root": true,
            "children": []
        },
        {
            "id": "1527375734453_5",
            "root": true,
            "children": []
        },
        {
            "id": "1527375734453_6",
            "root": true,
            "children": []
        },
        {
            "id": "1527375734453_7",
            "root": true,
            "children": []
        },
        {
            "id": "1527375734453_8",
            "root": true,
            "children": []
        },
        {
            "id": "1527375734453_9",
            "root": true,
            "children": []
        },
        {
            "id": "1527375734453_10",
            "root": true,
            "children": []
        },
        {
            "id": "1527375734453_11",
            "root": true,
            "children": []
        },
        {
            "id": "1517487251897_6",
            "root": true,
            "children": []
        },
        {
            "id": "1525246910541_2",
            "root": true,
            "children": []
        },
        {
            "id": "1526520678215_2",
            "root": true,
            "children": []
        },
        {
            "id": "1518180709693_7",
            "root": true,
            "children": []
        },
        {
            "id": "1518180709693_1",
            "root": true,
            "children": []
        },
        {
            "id": "1519463147164_4",
            "root": true,
            "children": []
        },
        {
            "id": "1518153990225_2",
            "root": true,
            "children": []
        },
        {
            "id": "1525938766853_3",
            "root": true,
            "children": []
        },
        {
            "id": "1525938766853_4",
            "root": true,
            "children": []
        },
        {
            "id": "1518180709693_5",
            "root": true,
            "children": []
        },
        {
            "id": "1525938766853_1",
            "root": true,
            "children": []
        },
        {
            "id": "1526529145393_1",
            "root": true,
            "children": []
        },
        {
            "id": "1526529145393_2",
            "root": true,
            "children": []
        },
        {
            "id": "1526520678215_3",
            "root": true,
            "children": []
        },
        {
            "id": "1525397386195_2",
            "root": true,
            "children": []
        },
        {
            "id": "1525248492546_1",
            "root": true,
            "children": []
        },
        {
            "id": "1525397386195_1",
            "root": true,
            "children": []
        },
        {
            "id": "1518153990225_3",
            "root": true,
            "children": []
        },
        {
            "id": "1518153990225_4",
            "root": true,
            "children": []
        },
        {
            "id": "1525247697625_1",
            "root": true,
            "children": []
        }
    ],
    "globalData": {},
    "rules": [
        {
            "condition": "${moduleData.titletype}=='text'",
            "components": {
                "1517487251897_5": {
                    "invisible": true
                }
            },
            "desc": "titletext rule"
        },
        {
            "condition": "${moduleData.titletype}=='pic'",
            "components": {
                "1517487251897_3": {
                    "invisible": true
                },
                "1517487251897_4": {
                    "invisible": true
                },
                "1525248325592_1": {
                    "invisible": true
                },
                "1525399812016_1": {
                    "invisible": true
                },
                "1525248193359_1": {
                    "invisible": true
                }
            },
            "desc": "titlepic rule"
        },
        {
            "condition": "${moduleData.titletype}=='none'",
            "components": {
                "1517487251897_3": {
                    "invisible": true
                },
                "1517487251897_4": {
                    "invisible": true
                },
                "1517487251897_5": {
                    "invisible": true
                },
                "1525248325592_1": {
                    "invisible": true
                },
                "1525399812016_1": {
                    "invisible": true
                },
                "1525248193359_1": {
                    "invisible": true
                }
            },
            "desc": "titlehid rule"
        },
        {
            "condition": "${moduleData.catetype}=='auto'",
            "components": {
                "1518180709693_1": {
                    "invisible": true
                }
            },
            "desc": "catetyperule"
        },
        {
            "condition": "${moduleData.catetype}=='manually' ",
            "components": {
                "1519463147164_4": {
                    "invisible": true
                }
            },
            "desc": "catetyperule2"
        },
        {
            "condition": "${moduleData.rowlineshow}==false",
            "components": {
                "1526520678215_3": {
                    "invisible": true
                }
            },
            "desc": "rowlineshow false"
        }
    ],
    "moduleData": {
        "catetype": "manually",
        "catetype ": "manually",
        "bdbg": "",
        "hideBottom": true,
        "catearray": [
            "",
            "",
            "",
            "",
            ""
        ],
        "productlineshow": true,
        "viewmoreshow": true,
        "rowlineshow": false,
        "catpicarray": [
            ""
        ],
        "titletype": "text",
        "catepicshow": true,
        "array": [
            "",
            ""
        ],
        "lineshow": true,
        "isFluid": true,
        "rjicoshow": true
    }
}