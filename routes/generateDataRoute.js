const express = require('express');
const route = express.Router();

const {stockDataController} = require('../controllers/stockDataController');
const {companyNameLogoDataController} = require('../controllers/companyNameLogoDataController');
const {downloadLogo} = require('../controllers/downloadLogo');
const {allStockDataHeadController} = require('../controllers/stockHeadDataController')

route.get('/stock',stockDataController);
route.get('/companyNameLogo',companyNameLogoDataController);
route.get('/downloadLogo',downloadLogo);
route.get('/stockHead',allStockDataHeadController);

module.exports = route;