
const arr = Array(3).fill("채워");
const arr2 = [].fill.call({length:3},"call로 채워")
console.log(arr, typeof arr);
console.log(arr2, typeof arr2);

const newArr = Array(3);
console.log(newArr)