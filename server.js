const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
// body parser middleware
app.use(bodyParser.json());
// config database
const db = require('./config/key').mongoURI;

// connect to mongo
mongoose.connect(db,{ 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    }).then(()=>console.log('MongoDB connected...'))
    .catch(error=>console.log(error));

const authorRouter = require('./routes/author');
app.use('/author',authorRouter);
app.use('/api',require('./routes/api'));

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,))
    })
}


const port = process.env.PORT || 5000;
app.listen(port,()=> console.log(` Server started on port ${port}`))