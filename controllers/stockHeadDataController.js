const { faker } = require('@faker-js/faker');
const fs = require('fs');
const path = require('path');
const companyNameLogo = require('../utils/companyNameLogo.json');

const allStockDataHeadController = (req, res) => {
    try {

        if(req.query.token !== 'vishalkumarnke93@gmail.com'){
            res.status(401).json({msg:'token required , access denied'});
            return;
        }
        
        const dataArr = [];
        
        for (let i = 0; i < companyNameLogo.length; i++) {
            const name = companyNameLogo[i].companyName;
            const stock_id = `${name.replaceAll(" ","-")}-ltd`;
            const logoUrl = companyNameLogo[i].logoUrl;

            const jsonData = {
                stock_id,
                name,
                logoUrl,
                stockCost: `${faker.number.float({ min: 10, max: 2000, fractionDigits: 2 })}`,
                stockCostPerRate: `${faker.number.float({ min: 0, max: 10, fractionDigits: 2 })} (${faker.number.float({ min: 0, max: 10, fractionDigits: 2 })}%)`,
            }
            dataArr.push(jsonData);
        }


        const filePath = path.join(__dirname , '../utils', 'AllStockDataHead.json');

        fs.writeFile(filePath, JSON.stringify(dataArr), (err) => {
            if (err) {
                console.log('error in AllStockDataHead generate while creating file', err);
                res.status(500).json({ msg: "error while save data in file" });
            } else {
                console.log(`${companyNameLogo.length} AllStockDataHead generate and save`);
                res.status(200).json({ msg: `${companyNameLogo.length} stock data generate successfully and save in file`, fileLocation: "utils/stockData.json" });
            }
        })
        
    } catch (error) {
        console.log('server error in AllStockDataHeadController', error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
}

module.exports = { allStockDataHeadController };