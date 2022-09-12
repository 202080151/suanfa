// array常用方法
// 1、遍历数组
let arr = [1,2,3,4,55,6,7]
arr.forEach(function(item,index,arr){
  // console.log(item,index)
})

// 将元素添加到末尾
let newLength = arr.push('99')
console.log(newLength)

// 将数组末尾元素删除
let last = arr.pop()
console.log(last)

// 删除数组头部元素
let first = arr.shift()
console.log(first)

// 添加元素到数组头部  返回值添加后 数组的长度
let newLength2 = arr.unshift('zc')
console.log(arr)

// 找出某个元素在数组中的索引
arr.push('dying','zccc')
console.log(arr)
let pos = arr.indexOf('zccc')
console.log(pos)


// 通过索引删除某个元素
let removeIndex = arr.splice(pos,1)

// 从一个索引位置删除多个元素
let vegetables = ['cabbage','yurnip','radish','carrot']
console.log(vegetables)

pos = 2
let n = 2

let removeItems = vegetables.splice(pos,n)
console.log(removeItems)

