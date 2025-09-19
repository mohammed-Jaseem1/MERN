const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://jaseem:ObjoFA175TulCAn5@cluster0.jajw7cw.mongodb.net/student?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log('Connected!'))
    .catch(() => console.log('err'))