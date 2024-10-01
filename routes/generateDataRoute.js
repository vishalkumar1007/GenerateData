const express = require('express');
const route = express.Router();

const {stockDataController} = require('../controllers/stockDataController');
const {companyNameLogoDataController} = require('../controllers/companyNameLogoDataController');
const {downloadLogo} = require('../controllers/downloadLogo');

route.get('/stock',stockDataController);
route.get('/companyNameLogo',companyNameLogoDataController);
route.get('/downloadLogo',downloadLogo);

module.exports = route;