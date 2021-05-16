const express = require('express')
const app = express()
const port = 5000
const request = require("request")
var cors = require('cors')

app.use(express.json())
const HtmlTableToJson = require('html-table-to-json');
const {default: axios} = require('axios')


app.use(cors())


app.get('/api', (req, res1) => {

    axios.get("https://api.wazirx.com/api/v2/market-status").then(res => {
        let usdt = res.data.markets.filter(i => i.baseMarket == "usdt")
        res1.send({price: usdt[0].last})
    })


})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)


})
