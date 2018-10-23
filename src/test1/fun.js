//深拷贝
export const deepCopy=x=> JSON.parse(JSON.stringify(x))

//计算默认列数
export const colNum = () => {
  let colNum = 1
  const width = document.body.clientWidth // 不写成函数不会每次获取窗口宽度
  if (width > 1263 && width < 1828)
    colNum = 2
  else if (width >= 1828)
    colNum = 3
  return colNum
}

//返回数组中指定元素的序号
export const arrItemIdx=(item,arr)=>{
  for (let i=0;i<arr.length;i++){
    if(arr[i]===item)
      return i
  }
  console.error(arr,'数组中没有',item)
}
