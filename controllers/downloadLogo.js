const fs = require('fs');
const axios = require('axios');
const path = require('path');
const companyNameLogo = require('../utils/companyNameLogo.json');

const downloadLogo = async(req,res)=>{
    try {
        const fetchImage = async(url,imageName)=>{
            const writer = fs.createWriteStream(path.resolve(__dirname, 'images' , imageName));
            const response = await axios({url , method:'GET' , responseType:'stream'});
    
            response.data.pipe(writer);
            return new Promise((resolve,reject)=>{
                writer.on('finish',resolve);
                writer.on('error',reject);
            });
        }
    
        if(!fs.existsSync(path.resolve(__dirname,'images'))){
            fs.mkdirSync(path.resolve(__dirname,'images'));
        }
    
        for(let i=207 ; i<companyNameLogo.length ; i++){
            const cp_name = companyNameLogo[i].companyName;
            const cp_url = companyNameLogo[i].logoUrl;
            const cp_file_name = cp_name.replaceAll(" ", "-");
            const fileName = `${cp_file_name}_img_${i}.jpg`;
    
            try {
                await fetchImage(cp_url,fileName);
                console.log(`Downloaded: ${fileName}`);
            } catch (error) {
                console.error(`Failed to download ${cp_url}:`, error);
            }
    
        }
    
        res.status(200).json({msg:'all image download and save in folder'});

    } catch (error) {
        console.log('server error', error);
        res.status(500).json({msg:'error to download image and save in folder'});
    }
}

module.exports = {downloadLogo};