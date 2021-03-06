'use strict'

var BaseModel = require('capital-models').BaseModel;

module.exports = class StockIn extends BaseModel {
    constructor(source) {
        super('stock-in', '1.0.0');

        // Define properties.
        this.code = '';
        this.reference = '';
        this.storageId = {};
        this.date = new Date();

        this.details = [];

        this.copy(source);
    }
}