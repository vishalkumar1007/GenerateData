const { faker } = require('@faker-js/faker');
const fs = require('fs');
const path = require('path');
// const companyNameLogo = require('../utils/companyNameLogo.json');
const AllStockDataHead = require('../utils/AllStockDataHead.json');

const stockDataController = (req, res) => {
    try {
        // let { size } = req.query;
        // if (!size) {
        //     size = 1;
        // }

        if(req.query.token !== 'vishalkumarnke93@gmail.com'){
            res.status(401).json({msg:'token required , access denied'});
            return;
        }
        
        const dataArr = [];
        
        for (let i = 0; i < AllStockDataHead.length; i++) {

            const jsonData = {
                stock_id :AllStockDataHead[i].stock_id,
                name :AllStockDataHead[i].name,
                logoUrl :AllStockDataHead[i].logoUrl,
                stockCost :AllStockDataHead[i].stockCost,
                stockCostPerRate :AllStockDataHead[i].stockCostPerRate,
                performance: {
                    todayLow: `${faker.number.float({ min: 10, max: 300, fractionDigits: 2 })}`,
                    todayHigh: `${faker.number.float({ min: 300, max: 2000, fractionDigits: 2 })}`,
                    FTW_low: `${faker.number.float({ min: 10, max: 100, fractionDigits: 2 })}`,
                    FTW_high: `${faker.number.float({ min: 10, max: 100, fractionDigits: 2 })}`,
                    open: `${faker.number.float({ min: 10, max: 1500, fractionDigits: 2 })}`,
                    close: `${faker.number.float({ min: 100, max: 1500, fractionDigits: 2 })}`,
                    volume: `${faker.number.int({ min: 10, max: 99 })},${faker.number.int({ min: 10, max: 99 })},${faker.number.int({ min: 10, max: 100 })}`,
                    totalTradeValue: `${faker.number.float({ min: 10, max: 1000, fractionDigits: 2 })} Cr`,
                    upperCircuit: `${faker.number.float({ min: 10, max: 800, fractionDigits: 2 })}`,
                    lowerCircuit: `${faker.number.float({ min: 10, max: 800, fractionDigits: 2 })}`
                },
                fundamentals: {
                    marketCap: `${faker.number.int({ min: 1, max: 99 })},${faker.number.int({ min: 100, max: 999 })} Cr`,
                    ROE: `${faker.number.float({ min: -100, max: 100, fractionDigits: 2 })}`,
                    PE_ratio: `${faker.number.float({ min: -100, max: 100, fractionDigits: 2 })}`,
                    EPS: `${faker.number.float({ min: -100, max: 100, fractionDigits: 2 })}`,
                    PB_ratio: `${faker.number.float({ min: -100, max: 100, fractionDigits: 2 })}`,
                    dividendYield: `${faker.number.float({ min: 1, max: 100, fractionDigits: 2 })}`,
                    Industry: `${faker.number.float({ min: 1, max: 100, fractionDigits: 2 })}`,
                    bookValue: `${faker.number.float({ min: 1, max: 100, fractionDigits: 2 })}`,
                    debtToEquity: `${faker.number.float({ min: 1, max: 100, fractionDigits: 2 })}`,
                    faceValue: `${faker.number.float({ min: 1, max: 100, fractionDigits: 2 })}`,
                },
                financial: {
                    revenueGraph: {
                        quarterly: {
                            graph1: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.date.month()}'${faker.number.int({ min: 19, max: 24 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                            graph2: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.date.month()}'${faker.number.int({ min: 19, max: 24 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                            graph3: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.date.month()}'${faker.number.int({ min: 19, max: 24 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                            graph4: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.date.month()}'${faker.number.int({ min: 19, max: 24 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                            graph5: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.date.month()}'${faker.number.int({ min: 19, max: 24 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                        },
                        yearly: {
                            graph1: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.number.int({ min: 2019, max: 2024 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                            graph2: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.number.int({ min: 2019, max: 2024 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                            graph3: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.number.int({ min: 2019, max: 2024 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                            graph4: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.number.int({ min: 2019, max: 2024 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                            graph5: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.number.int({ min: 2019, max: 2024 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                        }
                    },
                    profitGraph: {
                        quarterly: {
                            graph1: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.date.month()}'${faker.number.int({ min: 19, max: 24 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                            graph2: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.date.month()}'${faker.number.int({ min: 19, max: 24 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                            graph3: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.date.month()}'${faker.number.int({ min: 19, max: 24 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                            graph4: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.date.month()}'${faker.number.int({ min: 19, max: 24 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                            graph5: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.date.month()}'${faker.number.int({ min: 19, max: 24 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                        },
                        yearly: {
                            graph1: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.number.int({ min: 2019, max: 2024 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                            graph2: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.number.int({ min: 2019, max: 2024 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                            graph3: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.number.int({ min: 2019, max: 2024 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                            graph4: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.number.int({ min: 2019, max: 2024 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                            graph5: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.number.int({ min: 2019, max: 2024 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                        }
                    },
                    netWorthGraph: {
                        quarterly: {
                            graph1: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.date.month()}'${faker.number.int({ min: 19, max: 24 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                            graph2: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.date.month()}'${faker.number.int({ min: 19, max: 24 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                            graph3: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.date.month()}'${faker.number.int({ min: 19, max: 24 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                            graph4: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.date.month()}'${faker.number.int({ min: 19, max: 24 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                            graph5: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.date.month()}'${faker.number.int({ min: 19, max: 24 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                        },
                        yearly: {
                            graph1: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.number.int({ min: 2019, max: 2024 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                            graph2: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.number.int({ min: 2019, max: 2024 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                            graph3: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.number.int({ min: 2019, max: 2024 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                            graph4: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.number.int({ min: 2019, max: 2024 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                            graph5: {
                                rateInCr: `${faker.number.int({ min: -10_000, max: 10_000 })}`,
                                date: `${faker.number.int({ min: 2019, max: 2024 })}`,
                                graphPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                            },
                        }
                    }
                },
                shareHolderPattern: {
                    Day1: {
                        date: `${faker.date.month()}'${faker.number.int({ min: 23, max: 24 })}`,
                        promotersPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                        retailAndOtherPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                        otherDomesticIndustryPercent: `${faker.number.int({ min: 1, max: 100 })}`
                    },
                    Day2: {
                        date: `${faker.date.month()}'${faker.number.int({ min: 23, max: 24 })}`,
                        promotersPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                        retailAndOtherPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                        otherDomesticIndustryPercent: `${faker.number.int({ min: 1, max: 100 })}`
                    },
                    Day3: {
                        date: `${faker.date.month()}'${faker.number.int({ min: 23, max: 24 })}`,
                        promotersPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                        retailAndOtherPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                        otherDomesticIndustryPercent: `${faker.number.int({ min: 1, max: 100 })}`
                    },
                    Day4: {
                        date: `${faker.date.month()}'${faker.number.int({ min: 23, max: 24 })}`,
                        promotersPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                        retailAndOtherPercent: `${faker.number.int({ min: 1, max: 100 })}`,
                        otherDomesticIndustryPercent: `${faker.number.int({ min: 1, max: 100 })}`
                    },
                }
            }
            dataArr.push(jsonData);
        }


        const filePath = path.join(__dirname , '../utils', 'stockData.json');

        fs.writeFile(filePath, JSON.stringify(dataArr), (err) => {
            if (err) {
                console.log('error in stockData generate while creating file', err);
                res.status(500).json({ msg: "error while save data in file" });
            } else {
                console.log(`${AllStockDataHead.length} stockData generate and save`);
                res.status(200).json({ msg: `${AllStockDataHead.length} stock data generate successfully and save in file`, fileLocation: "utils/stockData.json" });
            }
        })
        
    } catch (error) {
        console.log('server error in stockDataController', error);
        res.status(500).json({ msg: 'Internal Server Error' });
    }
}

module.exports = { stockDataController };