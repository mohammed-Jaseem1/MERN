const mongoose = require('mongoose')

var schema = mongoose.Schema(
    {
        Name: String,
        Age: Number,
        Course:String,
        Dept: String
        
    }
)
var EmployeModel = mongoose.model("students", schema)
module.exports = EmployeModel