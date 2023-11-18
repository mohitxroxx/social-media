// import axios from "axios";

// const API_URL="http://Localhost:5100";


// export const  API =axios.create({
//     baseURL : API_URL,
//     responseType: "json",
// });

// export const apiRequest =async ({url,token,data,method}) =>
// {
//     try {
        
//    const result = await API(url,
//     {
//         method : method || "GET",
//         data:data,
//         headers: {
//             "content-type":"application/json",
//             Authorization:token ? `Bearer ${token}` : "",
//         }
//     })
//            return result?.data;
//     } catch (error) {
//         const err = error.response.data;
//         console.log(err);
//     return { status:err.sucess ,message:error.message};
//     }
// }
import axios from "axios";

const API_URL = "http://localhost:5100";

export const API = axios.create({
  baseURL: API_URL,
  responseType: "json",
});

export const apiRequest = async ({ url, token, data = {}, method }) => {
  try {
    const config = {
      method: method || "GET",
      url,
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    };

    if (method === "POST" || method === "PUT" || method === "PATCH") {
      config.data = data;
    } else if (method === "GET") {
      config.params = data;
    }

    const result = await API(config);
    return result?.data;
  } catch (error) {
    const err = error.response?.data;
    console.log(err);
    return { status: err?.success, message: error.message };
  }
};
