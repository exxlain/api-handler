import makeRequest from "../makeRequest";


export const login =(data)=>{
    return makeRequest({
        url: '/api/authorization/login',
        method: 'POST',
        data,
    })
}
