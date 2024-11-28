const express = require("express")

const app = express()

app.get('/', (req, resp) => {

    fetch('https://api.github.com/users/Grs2080w')
    .then(res => {
        res.json()      // text() e json() também são uma Promise
            .then(json => resp.send(json))
    })
    .catch(err => {console.log(err)})
})

app.listen(1212, ()=>{console.log('Server Listen on Port 1212')})