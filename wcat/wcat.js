let fs=require("fs");
let input=process.argv.slice(2);
console.log(input);
let options=[];
let filePaths=[];
for(let i=0;i<input.length;i++)
{
    if(input[i]=="-s"||input[i]=="-b"||input[i]=="-n")
    {
        options.push(input[i]);
    }
    else
    {
        filePaths.push(input[i]);
    }
}
let data="";
for(let i=0;i<filePaths.length;i++)
{
    let isfilepresent=fs.existsSync(filePaths[i]);
    if(isfilepresent==false)
    {
        console.log(filePaths[i]," file does not exist");
    }
    let dat=fs.readFileSync(filePaths[i]);
    data=data+"\r\n"+dat;
}
console.log(data);
let isSoption=options.includes("-s");
if(isSoption==true)
{
    let contentarr=data.split("\r\n");
    let temparr=[];
    for(let i=0;i<contentarr.length;i++)
    {
        if(contentarr[i]=="")
        {
            continue;
        }
        temparr.push(contentarr[i]);
    }
    data=temparr.join("\r\n");
    console.log(data);
}
if(options.includes("-n"))
{
    let count =1;
    let temparr=[];
    let contentarr=data.split("\r\n");
    for(let i=0;i<contentarr.length;i++)
    {
        temparr.push(count+". "+contentarr[i]);
        count++;
    }
    data=temparr.join("\r\n");
    console.log(data);
}
if(options.includes("-b"))
{
    let count =1;
    let temparr=[];
    let contentarr=data.split("\r\n");
    for(let i=0;i<contentarr.length;i++)
    {
        if(contentarr[i]!="")
        {
            temparr.push(count+". "+contentarr[i]);
            count++;
        }
        else
        {
            temparr.push(contentarr[i]);
        }
    }
    data=temparr.join("\r\n");
    console.log(data);
}