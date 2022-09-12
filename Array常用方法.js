// array常用方法
// 1、遍历数组
let arr = [1,2,3,4,55,6,7]
arr.forEach(function(item,index,arr){
  // console.log(item,index)
})

// 将元素添加到末尾
let newLength = arr.push('99')
console.log(arr)

// 将数组末尾元素删除
let last = arr.pop()
console.log(last)

// 删除数组头部元素
let first = arr.shift()
console.log(first)

