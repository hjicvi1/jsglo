let num = 123456;
let multiple = num.toString().split('').reduce((accum,item)=>accum *= +item, 1)
console.log(multiple);
console.log(multiple**3)
console.log((multiple**3).toString().slice(0,2))
