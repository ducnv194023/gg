const express = require('express')
const app = express()
const port = 3000
app.get('/', (req, res) => {
    const api_key = 'a51b91d336ef4697ad7a84812b359dac'
    const scopes = 'read_products'
    const redirect_uri = 'http://localhost:3000/sapo'
    const string = `https://planetcosmetic.mysapogo.com/admin/oauth/authorize?client_id=${api_key}&scope=${scopes}&redirect_uri=${redirect_uri}`

    res.redirect(string)
})
app.get('/sapo', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})