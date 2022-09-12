// function ArrSort (arr) {
//   let arrCopy = []
//   for(let i =0 ;i<arr.length;i++){
//     arrCopy.push(arr[i])
//   }
//   let sortedArr = arr.sort((a,b)=>{
//     return a-b
//   })
//   let sortedArr2 = arr.sort((a,b)=>{
//     return b-a
//   })
//   let res = arr.toString().replace(/,/g,'')
//   console.log(res)
//   console.log(sortedArr)
//   if(arrCopy === sortedArr){
//     return 1
//   } else if (arrCopy === sortedArr2){
//     return -1
//   } else{
//     return 0
//   }
// }

// let res = ArrSort([1,2,3])
// console.log(res)

var {a,b,c} = {'c':10,'b':9,'a':8}
console.log(a,b,c)
