const express = require('express')
const app = express()
const axios = require('axios').default()
const port = 3000
app.get('/', (req, res) => {
    const api_key = 'a51b91d336ef4697ad7a84812b359dac'
    const scopes = 'read_products'
    const redirect_uri = 'http://localhost:3000/sapo'
    const string = `https://planetcosmetic.mysapogo.com/admin/oauth/authorize?client_id=${api_key}&scope=${scopes}&redirect_uri=${redirect_uri}`

    res.redirect(string)
})
app.get('/sapo', async (req, res) => {
  const code = req.params.code
  const response = await axios({
    method: 'post',
    url: 'https://planetcosmetic.mysapogo.com/admin/oauth/access_token',
    data: {
      client_id: 'clientid',
      client_secret: 'client_secret',
      code
    }
  });
  const access_token = response.access_token
  console.log(access_token)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})