const axios = require('axios');

module.exports = (req, res) => {
  const api = req.query.api;
  axios.get(`${api}`)
    .then(response => {
      // レスポンスのデータとステータスを出力
      console.log(response.data);
      console.log(response.status);
    });
}
