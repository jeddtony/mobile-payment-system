import * as localStore from '../helpers/localStorageHelper'

import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL ;
const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    // "Content-Type": "multipart/form-data",
    'Authorization': `Bearer ${localStore.getToken()}`
  }

const instance = axios.create({
    baseURL: apiUrl ,
    timeout: 500000,
    headers
  });

  instance.interceptors.response.use(function (response) {
      response = {...response, status: 200, statusCode: 200};
      return response;
  }, function (error) {
    console.log(error.response.status);
    if(error.response.status === 401){
      return redirectToLogin();
    }
      // console.log(error);
    else if (error.response.status == 422){
     let  response = {message: 'Email or password already exists', status: 422, statusCode: 422};
      return response
    } else {
      return {message: 'Cannot connect to server', status: 500, statusCode: 500}
    }
  });
function redirectToLogin() {
  let publicUrl = process.env.PUBLIC_URL;
        let loginPageUrl = null;
      
          loginPageUrl = publicUrl + '/login';
        
        
        let origin = window.location.origin;
        if (window.location.origin === origin + loginPageUrl) return;
        window.location.href = loginPageUrl;
}


function processResult (response) {
    let {status} = response;
    console.log(response);
    if(status === 200) {
      return {success: true, data: response.data.data, message: response.data.message};
    } else if(status === 500){
      return {success: false, message: 'Cannot connect to the internet'}
    } 
    // console.log(response.data.message);
      return {success: false, message: response.message};
   
    
}


function postLogin(loginData) {


    console.log(process.env.REACT_APP_API_URL);

    return axios.post(apiUrl+'auth/login', loginData)
      .then(res=> {
          let data = res.data;
          console.log(data);
          localStore.setToken(data['access_token']);
          // localStore.setUserId(data.user._id);
        //   localStore.setExpiresAt(data.expiresin);
          localStore.setName(data.user.name);
          localStore.setRole(data.user.is_admin);
          return {statusCode: 200, data: 'Success'}
      }).catch(error => {
          if(error.response) {
            if (error.response.status === 401){
              return {statusCode: 401, data: "Invalid login details"};
            }
             if( error.response.status == 422) {
                 return {statusCode: 422, data: "Email and password does not match any record"}
             }
             else {
              return {statusCode: 500, data: "Error in internet connection"} 
             }
          }else {
              console.log('an error ', error)
              return {statusCode: 500, data: "Error in internet connection"}
      }
  
    });
    }

    async function register(data) {
        let results = await instance.post(apiUrl + "register", data);
        // console.log(results);
        return processResult(results);
    }

    // USER MGT
    async function createUser (data) {
      let results = await instance.post('users/create', data);
      return processResult(results);
    }

    async function topUpWallet (data) {
      let results = await instance.post('wallet/topUp', data);
      return processResult(results);
    }

    async function sendAirtime (data) {
      let results = await instance.post('sendAirtime', data);
      return processResult(results);
    }

    async function sendData (data) {
      let results = await instance.post('sendData', data);
      return processResult(results);
    }

    async function updateBundle (data, id) {
      let results = await instance.patch(`bundles/${id}`, data);
      return processResult(results);
    }

    async function createBundle (data) {
      let results = await instance.post(`bundles`, data);
      return processResult(results);
    }

    async function createVendor (data) {
      let results = await instance.post(`networks`, data);
      return processResult(results);
    }

    async function createComplaint (data) {
      let results = await instance.post(`complaint`, data);
      return processResult(results);
    }

    async function markAsResolved (id) {
      let results = await instance.get(`complaints/markAsResolved/${id}`);
      return processResult(results);
    }

  export {instance, register, postLogin, createUser, topUpWallet, sendAirtime,
  sendData, updateBundle, createBundle, createVendor, createComplaint,
markAsResolved}