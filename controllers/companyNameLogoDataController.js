// const { faker } = require('@faker-js/faker');
const fs = require('fs');
const path = require('path');
const companyData = require('../utils/companyData.json')

const companyNameLogoDataController = (req,res)=>{
    try {
        // console.log(companyData);
        console.log(companyData.length);
        // console.log(companyData[0].name);
        const dataArr = [];

        for(let i=0 ; i<companyData.length ; i++){
            const jsonData = {
                id:i,
                companyName: companyData[i].name,
                logoUrl:`https://img.logo.dev/${companyData[i].domain}?token=pk_eQ5iITCxQ_yUu4cy6NHPwQ`,
            }
            dataArr.push(jsonData);
        }

        const filePath = path.join(__dirname , '../utils', 'companyNameLogo.json');

        fs.writeFile(filePath, JSON.stringify(dataArr), (err) => {
            if (err) {
                console.log('error in company name and logo generate while creating file', err);
                res.status(500).json({ msg: "error while save data in file" });
            } else {
                console.log(`company name and logo generate and save`);
                res.status(200).json({ msg: `company name and logo data generate successfully and save in file`, fileLocation: "utils/stockData.json" });
            }
        })

    } catch (error) {
        console.log('server error in companyNameLogoDataController', error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
}

module.exports = {companyNameLogoDataController}