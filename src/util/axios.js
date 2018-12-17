import Vue from 'vue'
import axios from 'axios'

const api = '/api'

Vue.prototype.$post = (ajax) => {
  axios.post(api + ajax.url, ajax.data).then((response) => {
    ajax.success(response)
  }).catch((error) => {
    console.log(error)
    ajax.fail()
  })
}
