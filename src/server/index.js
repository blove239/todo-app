const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.get('/example.json', cors(corsOptions), (req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.send('{"toDos": [\
        {\
            "noteName": "Groceries",\
            "noteDate": 1598788800,\
            "notifications": [\
                1598988800,\
                1594488800,\
                1599988800\
            ]\
        },\
        {\
            "noteName": "Watch shark week",\
            "noteDate": "20201010",\
            "notifications": []\
        }\
    ]}');
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
app.use(express.static('public'));
