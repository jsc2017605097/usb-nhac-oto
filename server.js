const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
// body parser middleware
app.use(bodyParser.json());
app.use(cors());
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
const indexRouter = require('./routes/index.js');
app.use('/author',authorRouter);
app.use('/',indexRouter);

if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }


const port = process.env.PORT || 5000;
app.listen(port,()=> console.log(` Server started on port ${port}`))