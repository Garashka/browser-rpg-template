// import axios from "axios";

// export default async ({ Vue, store, router }) => {
//   const apiCall = axios.create({
//     baseURL: process.env.API_URL
//   });

//   apiCall.interceptors.request.use(
//     config => {
//       const c = config;
//       if (store.getters["auth/isAuthenticated"]) {
//         c.headers.Authorization = `Bearer ${store.getters["auth/token"]}`;
//       }
//       return c;
//     },
//     error => {
//       Promise.reject(error);
//     }
//   );

//   function handleSuccess(response) {
//     return { data: response.data };
//   }

//   function handleError(error) {
//     if (error.response.status === 401) {
//       store.dispatch("auth/authLogout").then(router.push("/"));
//     }
//     return Promise.reject(error);
//   }

//   apiCall.interceptors.response.user(handleSuccess, handleError);

//   Vue.prototype.$axios = apiCall;
// };
