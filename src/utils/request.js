import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'Access-control-allow-origin'}
});
const requestGet=function(api, argument, fn1, fn2) {
  /* 后端需要配置允许跨域 */
  instance.get('http://120.53.227.200:8081/'+api, {params: argument})
    .then(function (response) {
      fn1(response);
    })
    .catch(function (error) {
      fn2(error);
    });
}
const requestPost=function(api, argument, f1, f2) {
  axios.post(`http://120.53.227.200:8081/${api}`,argument)
  .then(function (response) {
    f1(response.data);
  })
  .catch(function (error) {
    f2(error);
  });
}

export default {
  requestGet,
  requestPost
}