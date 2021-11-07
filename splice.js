let arr=[1,2,3,4,5,6];
//deletion by splice & return deleted elements
let rel=arr.splice(1,3);
console.log(arr);
console.log(rel);
//it can be used for replacements also
arr.splice(1,0,2,3,4);
console.log(arr);