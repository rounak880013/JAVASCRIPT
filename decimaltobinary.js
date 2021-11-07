function foo(num)
{
    if(num==0)
    {
        console.log(0);
        return;
    }
    foo(Math.floor(num/2));
    console.log(num%2);
}
let a=26;
foo(a); 