// push(element) {
//   const node = new Node(element)
//   let current
//   if (this.head == null) {
//     this.head = node
//   } else {
//     current = this.head
//     while (current.next != null) {
//       current = current.next
//     }
//     current.next = node
//   }
//   this.count ++
// }


// // remove 一个节点
// removeAt (index) {
//   // 检查越界值
//   if (index >= 0 && index < this.count) {
//     let current = this.head
//     // 移除第一项
//     if (index === 0) {
//       this.head = current.next
//     } else {
//       let previous
//       for (let i = 0; i < index; i++){
//         previous = current
//         current = current.next
//       }
//       // 将previous和current的下一项连接起来，通过跳过他，达到移除他
//       previous.next = current.next
//     }
//     this.count --
//     return current.element
//   }
//   return undefined
// }

// // 实现在任意位置插入元素
// insert (element, index) {
//   if (index >= 0 && index <= this.count) {
//     const node = new Node(element)
//     if (index === 0) {
//       // 在第一个位置添加
//       const current = this.head
//       node.next = current
//       this.head = node
//     } else {
//       const previous = this.getElementAt(index - 1)
//       const current = previous.next
//       node.next = current
//       previous.next = node
//     }
//   }
// } 

// var isPerfectSquare =function (num) {
//   let ans = 0
//   for (let i=0;i<=num;i++){
//     if(i*i<=num) {
//       ans = i
//     }
//     else{
//       break
//     }
//   }
//   console.log(ans*ans)
//   return ans * ans === num
// }
// let res = isPerfectSquare(num=1)
// console.log(res)
var myPow = function(x, n) {
  if(n<0) {
      let res = 1 / x
      for (let i=-1;i>n;i--){
         res = res * (1/x)
      }
      return res
  }else if (n=0) {
    return 1
  }else if(n>0) {
    let res = x 
    for (let j=1;j<n;j++){
      res = res * x
    }
    return res
  } else {
    return
  }
};

let res = myPow(3,3)
console.log(res)