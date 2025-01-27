import axios from 'axios'

import config from './conig'

export default ({
   url = '/',
   method= 'get',
   params ={} ,
    data= {},
    headers ={}
}) => {
    if(headers && headers.authorization){
        headers.authorization = config.token;
    }
 return axios({
   url,
   method,
   headers,
   params,
   data
}).catch((error)=>{
    config.errorHandler(error, {url, method, headers, params, data})
    throw error;
 })}
