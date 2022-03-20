// express alway looking for method + route

const express = require("express");
// console.log('express:', express)

const app = express();
// console.log('app:', app)

// REST APIs => Representational State Transfer
/*
    get => getting data from server
    post => add some data to server
    put / patch => update some data on the server
    delete => remove some data from server
*/

app.listen(4000, () => {
    console.log("listening on port 4000");
})

app.get("/users", function (req, res) {
    // console.log("Hello Shiva");

    res.send("Response Hello Shiva");

})

app.get("/users1", function (req, res) {
    // console.log("Hello Mahi");


    res.send("Response Hello Mahi");

})

