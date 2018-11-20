const express = require('express');
const app = express();
//set default route to web server
app.get('/', (req, res) => {
    debugger;
    res.send('Response from server');
});
//start server
app.listen(3000, () => console.log('Server is up and running!'));
