import makeRequest from "../makeRequest";


export const users =(data)=> {
    return makeRequest( {
        url: 'https://jsonplaceholder.typicode.com/users',
        method: 'GET',
        data,
        headers: {authorization: false}
    })
}
