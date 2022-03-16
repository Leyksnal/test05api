const fs = require('fs')

const writeFile = (filePath, data) =>{
    fs.writeFileSync(filePath, data, "utf8", (error) =>{
        if(error){
            console.log("Cannot write to this file")
        }
    })
}

module.exports ={
    writeFile
}