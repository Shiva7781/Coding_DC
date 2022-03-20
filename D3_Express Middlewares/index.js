const express = require("express")

const app = express()

app.use(logger); // logger()  logger

app.get("/user", (req, res) => {
    return res.send({ route: "/users", role: req.role })
})

app.get("/students", (req, res) => {
    return res.send({ route: "/students", role: req.role })
})

app.get("/admin", (req, res) => {
    return res.send({ route: "/admin", role: req.role })
})

function logger(req, res, next) {
    if (req.path === "/users") {
        req.role = "user"
    }
    else if (req.path === "/admin") {
        req.role = "admin"
    }
    else {
        req.role = "somebody   "
    }
    next()
}

app.listen(5000, () => {
    console.log("listening on port 5000");
})
