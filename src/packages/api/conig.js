class Config{
    constructor() {
         this.token: 'my-default-token';
    }

    setToken(token){
        this.token = newToken;
    }


    errorHandler (error, {url, method, headers, params, data}){
        return {
            error
        }
    }
}
const config = new Config();
export default config;
