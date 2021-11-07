let fs=require('fs');
let path=require('path');
let extensions={
    "Images":['.img','.jpg','.jpeg','.gif'],
    "Audio":['.mp3'],
    "Document":['.pdf','.txt','.doc'],
    'Compressed':['.zip','.rar'],
    'video':['.mkv','.mp4']
}
let input=process.argv.slice(2);
let folderPath=input[0];
console.log(input[0]);
let extFolderPath=folderPath;
function checkFolder(extension,folderPath)
{
    for(let key in extensions)
    {
        let arr=extensions[key];
        let eon=arr.includes(extension);
        if(eon==true)
        {
            console.log(key);
            extFolderPath=path.join();
            console.log(extFolderPath);
            break;
        }
    }
    return fs.existsSync(extFolderPath); 
}
let content=fs.readdirSync(folderPath);
for(let i=0;i<content.length;i++)
{
    let extensionName=path.extname(content[i]);
    let extensionFolderExist=checkFolder(extensionName,folderPath);
    console.log(path.extname(content[i]));
}