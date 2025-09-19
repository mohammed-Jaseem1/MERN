const mongoose = require('mongoose')

var schema = mongoose.Schema(
    {
        Name: String,
        Age: Number,
        Dept: String,
        sal:Number
    }
)
var EmployeModel = mongoose.model("kmctemployee", schema)
module.exports = EmployeModel