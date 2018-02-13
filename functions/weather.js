import axios from 'axios'

exports.handler = function(event, context, callback) {
  axios.get(`https://beta.dmi.dk/NinJo2DmiDk/ninjo2dmidk?cmd=llj&id=2618425`)
    .then(res => {
      console.log(res.data)
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res.data)
      })
    })
    .catch(err => {
      console.log(err)
      callback({
        statusCode: 408,
        body: JSON.stringify(err)
      }, null)
    })
}
