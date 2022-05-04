const mongoose = require('mongoose')
const moment = require('moment')
let Schema = mongoose.Schema

let reservaSchema = new Schema({
    desde: Date,
    hasta: Date,
    bicicleta: {type: mongoose.Schema.Types.ObjectId, ref: 'Bicicleta' },
    usuario: {type: mongoose.Schema.Types.ObjectId, ref: 'Usuario'},
})

reservaSchema.statics.createInstance = function (desde, hasta, bicicleta, usuario) {
    return new this({
        desde: desde,
        hasta: hasta,
        bicicleta: bicicleta,
        usuario: usuario
    })
}

reservaSchema.statics.add = function (aReserve, cb) {
    this.create(aReserve, cb)
}

reservaSchema.methods.diasDeReserva = function() {
    return moment(this.hasta).diff(moment(this.desde), 'days') + 1
}

reservaSchema.statics.removeByCode = function (aCode, cb) {
    return this.deleteOne({ code: aCode }, cb)
}


module.exports = mongoose.model('Reserva', reservaSchema) 

