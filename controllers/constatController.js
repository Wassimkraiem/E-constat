const factory = require("./handlerFactory");
const Constat = require("./../models/constatModel");

exports.createConstat = factory.createOne(Constat);
exports.getAllConstat = factory.getAll(Constat);
exports.getConstat = factory.getOne(Constat);
exports.updateConstat = factory.updateOne(Constat);
exports.deleteConstat = factory.deleteOne(Constat);
