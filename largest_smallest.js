let arr=[1,2,3,4,5,6];
let min=9999;
let max=0;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>max)
    {
        max=arr[i];
    }
    if(arr[i]<min)
    {
        min=arr[i];
    }
}
console.log(min);
console.log(max);