import React from "react";

export const ApiServices = () => {
    return function(){
        return <div>

        </div>
    }
}

// const API = process.env.SERVER_API_DEVELOPMENT;

// import axios from "axios";
// import swal from "sweetalert";

// export const API = "http://kardinal-api.herokuapp.com"

// const token = () => localStorage.getItem("token");
// function headers() {
//   return {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     Authorization: `Token ${token()}`
//   };
// }

// function authHeaders() {
//   return {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//     Authorization: `Token ${token()}`
//   }
// }

// function parseResponse(response) {
//   return response?.data
// }

// function queryString(params) {
//   const query = Object.keys(params)
//     .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
//     .join('&');
//   return `${query.length ? '?' : ''}${query}`;
// }

// const api = {
//   fetch(url, params = {}, auth = false) {
//     return axios.get(`${API}${url}${queryString(params)}`, {
//       headers: auth === true ? authHeaders() : headers(),
//       validateStatus: (status) => {
//         return status >= 200 && status < 500 // default
//       }
//     })
//       .then(parseResponse)
//       .catch(err => {
//         console.log(err)
//       })
//   },

//   post(url, data, auth = false) {
//     const body = data;
//     return axios.post(`${API}${url}`, body, {
//       headers: auth ? authHeaders() : headers(),
//     validateStatus: (status) => {
//       return status >= 200 && status < 500 // default
//     }
//     })
//     .then(parseResponse)
//       .catch(err => {
//        console.log(err)
//       })
//   },

//   put(url, data, auth = false) {
//     const body = data;
//     return axios.put(`${API}${url}`, body, {
//       headers: auth ? authHeaders() : headers(),
//       validateStatus: (status) => {
//         return status >= 200 && status < 500 // default
//       }
//     })
//       .then(parseResponse)
//       .catch(err => {
//         swal(err.message)
//       })
//   },

//   patch(url, data, auth = false) {
//     const body = data;
//     return axios.patch(`${API}${url}`, body, {
//       headers: auth ? authHeaders() : headers(),
//       validateStatus: (status) => {
//         return status >= 200 && status < 500 // default
//       }
//     })
//       .then(parseResponse)
//       .catch(err => {
//         console.log(err)
//       })
//   },

//   delete(url, auth = false) {
//     return axios.delete(`${API}${url}`, {
//       headers: auth ? authHeaders() : headers(),
//       validateStatus: (status) => {
//         return status >= 200 && status < 500 // default
//       }
//     })
//       .then(parseResponse)
//       .catch(err => {
//         console.log(err)
//       })
//   }
// };

// export default api;