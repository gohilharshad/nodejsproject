const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'file');

// console.log(dirpath)

for(i=0;i<4;i++)
{
    fs.writeFileSync(dirpath+'/hello'+i+'.txt','Hello is simple file');
}

fs.readdir(dirpath,(err,data)=>{

    data.forEach((item)=>{
        console.log(item)
    })

})
