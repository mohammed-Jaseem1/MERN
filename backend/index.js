const express = require("express")
var cors = require('cors')
require("./connection")
var stumodel = require("./models/student")

const app = express()


app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    res.send("aswin ")
})
app.get('/2', (req, res) => {
    res.send("linto kadayadi")
})

app.post('/add', async (req, res) => {
    try {
        await stumodel(req.body).save()
        res.send("data added")
    } catch (error) {
        console.log(error)

    }
})
app.get('/view', async (req, res) => {
    try {
        const val = await stumodel.find();
        res.send(val)
    } catch (error) {
        console.log(error);
    }
})

app.delete('/remove/:id', async (req, res) => {
    try {
        await stumodel.findByIdAndDelete(req.params.id);
        res.send("data deleted")
    } catch (error) {
        console.log(error);
    }
})

app.put('/update/:id', async (req, res) => {
    try {
        await stumodel.findByIdAndUpdate(
            req.params.id,
            req.body,
        );
        res.send("updatedData", req.body);
    } catch (error) {
        console.log(error);
    }
});
app.listen(3005, () => {
    console.log("port is running at 3005")
})