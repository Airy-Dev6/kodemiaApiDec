
const mongoose = require('mongoose')

const url = 'mongodb+srv://airyDev:nomelase@kodemiadbclase.9mxwv.mongodb.net/kodemiaDecGen'

const connect = mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

module.exports = {
    connect
}
