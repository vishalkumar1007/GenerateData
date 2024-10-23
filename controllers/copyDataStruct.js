// const frontendData = require('../utils/frontendData.json');
const companyUpdatedData = require('../utils/companyData.json');
const fs = require('fs');
const path = require('path');

const copyDataStruct = async (req,res)=>{
    // console.log('length of data before change : ', companyUpdatedData.length);
    // const notUrlData = [];
    const xData = [
        {
            "name": "Ola Electric Mobility",
            "domain": "https://olaelectric.com"
        },
        {
            "name": "GTL Infrastructure",
            "domain": "https://gtlinfra.com"
        },
        {
            "name": "Mazagon Dock Ship",
            "domain": "https://mazagondock.in"
        },
        {
            "name": "Angel One",
            "domain": "https://angelone.in"
        },
        {
            "name": "Divi's Labs",
            "domain": "https://divislabs.com"
        },
        {
            "name": "Varun Beverages",
            "domain": "https://varunbeverages.com"
        },
        {
            "name": "Titan",
            "domain": "https://titan.co.in"
        },
        {
            "name": "SBI Life Insurance",
            "domain": "https://sbilife.co.in"
        },
        {
            "name": "Nykaa",
            "domain": "https://nykaa.com"
        },
        {
            "name": "Patanjali Foods",
            "domain": "https://patanjalifoods.com"
        },
        {
            "name": "Bandhan Bank",
            "domain": "https://bandhanbank.com"
        },
        {
            "name": "Alok Industries",
            "domain": "https://alokind.com"
        },
        {
            "name": "PNB Housing Finance",
            "domain": "https://pnbhousing.com"
        },
        {
            "name": "Century Textiles",
            "domain": "https://centurytextiles.com"
        },
        {
            "name": "Castrol India",
            "domain": "https://castrol.co.in"
        },
        {
            "name": "Dwarikesh Sugar",
            "domain": "https://dwarikesh.com"
        },
        {
            "name": "Geojit Financial Services",
            "domain": "https://geojit.com"
        },
        {
            "name": "Adani",
            "domain": "https://adani.com"
        },
        {
            "name": "Firstsource Soln",
            "domain": "https://firstsource.com"
        },
        {
            "name": "SJVN",
            "domain": "https://sjvn.nic.in"
        },
        {
            "name": "Cholamandalam Invest",
            "domain": "https://cholamandalam.com"
        },
        {
            "name": "Cyient",
            "domain": "https://cyient.com"
        },
        {
            "name": "Gland",
            "domain": "https://glandpharma.com"
        },
        {
            "name": "JWS Energy",
            "domain": "https://jsw.in"
        },
        {
            "name": "Mahanagar Gas",
            "domain": "https://mahanagargas.com"
        }
    ]

    // console.log(' before update companyUpdatedData length : ', companyUpdatedData.length);
    
    // const matchedData = [];
    // const notMatchedData = [];
    // let count  = 0;
    // for(let i=0;i<oldCompanyData.length;i++){
    //     let isAdding = true;
    //     for(let x=0;x<companyUpdatedData.length;x++){
    //         if(oldCompanyData[i].domain===companyUpdatedData[x].domain){
    //             isAdding=false;
    //             count++;
    //             break;
    //         }
            
    //     }
    //     if(isAdding){
    //         notMatchedData.push(oldCompanyData[i]);
    //     }else{
    //         matchedData.push(oldCompanyData[i]);
    //     }
    // }
    
    // console.log('Count : ', count);
    
    
    // for(let c=0 ;c<notMatchedData.length ;c++){
    //     const addingData = {
    //         name:notMatchedData[c].name,
    //         shortNames:[notMatchedData[c].name],
    //         domain:notMatchedData[c].domain
    //     }
    //     companyUpdatedData.push(addingData);
    // }


    //-----------------------------------------------------------


    console.log('before update companyUpdatedData length : ', companyUpdatedData.length);

    // remove duplicates
    const noDuplicateData = [];
    let countData = 0;

    for(let i=0;i<companyUpdatedData.length;i++){
        let isAdd = true;
        for(let x=0;x<noDuplicateData.length;x++){
            if(companyUpdatedData[i].domain === noDuplicateData[x].domain){
                isAdd=false;
            }
        }
        if(isAdd){
            noDuplicateData.push(companyUpdatedData[i]);
            countData++;
        }
    }

    console.log('after update companyUpdatedData length : ', countData);

    const filePath = path.join(__dirname , '../utils', 'companyUpdatedData.json');
    fs.writeFile(filePath , JSON.stringify(noDuplicateData) , (err)=>{
        if (err) {
            console.log('error in copyDataStruct generate while creating file', err);
            res.status(500).json({ msg: "error while save data in file" });
        } else {
            console.log(`${countData} copyDataStruct generate and save`);
            res.status(200).json({ msg: `${countData} stock data generate successfully and save in file`});
        }
    })



    // --------------------------------------------------------




    // for(let i=0;i<frontendData.length;i++){
        //     const cpName = frontendData[i].name;
        //     let isAdding = true;
        //     for(let j=0;j<companyUpdatedData.length;j++){
            //         if(cpName === companyUpdatedData[j].name){
                //             isAdding = false;
                //             break;
                //         }
                //     }
                //     if(isAdding){
                    //         const data = {
                        //             name: frontendData[i].name,
    //             shortNames: [frontendData[i].name],
    //             url: ""
    //         }
    //         companyUpdatedData.push(data);
    //     }
    // }

    // for(let p = 0 ; p<companyUpdatedData.length;p++){
    //     if(companyUpdatedData[p].url === ""){
    //         for(let q=0; q<xData.length;q++){
    //             if(companyUpdatedData[p].name === xData[q].name){
    //                 companyUpdatedData[p].url = xData[q].domain;
    //                 break;
    //             }
    //         }
    //     }
    // }


    // console.log('updated Data : ', updateData);
    // const filePath = path.join(__dirname , '../utils', 'companyUpdatedData.json');
    // fs.writeFile(filePath , JSON.stringify(companyUpdatedData) , (err)=>{
    //     if (err) {
    //         console.log('error in copyDataStruct generate while creating file', err);
    //         res.status(500).json({ msg: "error while save data in file" });
    //     } else {
    //         console.log(`${companyUpdatedData.length} copyDataStruct generate and save`);
    //         res.status(200).json({ msg: `${companyUpdatedData.length} stock data generate successfully and save in file`});
    //     }
    // })

    // console.log('length of data after change : ', companyUpdatedData.length);
    
    // for(let x=0;x<companyUpdatedData.length;x++){
    //     if(companyUpdatedData[x].url===""){
    //         notUrlData.push(companyUpdatedData[x].name);
    //     }
    // }

    res.status(200).json({msg:'success' });
}

module.exports =  {copyDataStruct};