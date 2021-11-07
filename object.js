let tony={
    name:"Tony",
    lastname:"stark",
    freinds:['steave','bruce','peter'],
    age:45,
    isAvanger:true,
    abc:undefined,
    address:
    {
        state:'afganistan',
        city:'kabul',
    },
    saysHI:function fn()
    {
        console.log("hello");
        return 'function called';
    }
}
console.log(tony);
console.log("first way to print any vales");
console.log(tony.name);
console.log(tony.lastname);
console.log(tony.address.state);
console.log(tony.saysHI);
console.log(tony.saysHI());
console.log("second way to print array");
console.log(tony['name']);
console.log(tony['lastname']);
console.log(tony['address']['state']);
console.log(tony['saysHI']());
let karr=Object.keys(tony);
for(k in tony)
{
    console.log(tony[k]);
}

for(let key in tony)
{
    console.log(key);
}