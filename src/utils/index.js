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
import {SetPosts} from "../redux/postSlice"

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


export const handleFileUpload =async (uploadFile) =>
{
  const formData = new FormData();
  formData.append("file" ,uploadFile);
  formData.append("upload_present","socialmedia");

  try{
    const response =await axios.post(

    )
    return response.data.secure_url;
  }
catch(error)
{
  console.log(error);
}
};


export const fetchPosts =async(token ,dispatch ,url,data)=>
{
try {
    const res =await apiRequest({
      url :url || "/posts",
      token: token,
      method:"POSt",
      data:data || {},
    })

    dispatch(SetPosts(res?.data));
    return;
} catch (error) {
  console.log(error);
}
}

export const likepost =async ({url,token})=>
{
try {
  const res =await apiRequest({
    url:url,
    token :token,
    method:"POSt",
  })
  return res;
} catch (error) {
  console.log(error);
}
}

export const deletePost =async (id,token) => {
  try {
    const res =await apiRequest({
      url: "/posts/" + id,
      token:token,
      method : "DELETE",
    })
    return;
  }catch (error) {
    console.log(error);
  }
}

export const getUserInfo =async (token,id) => {
try {
  const url =id === undefined ? "/users/get-user": "/users/get-user/"
  + id;

  const res =await apiRequest({
    url:url,
    token:token,
    method:"POST,"
  });

  if(res?.message === "Authentication failed") {
    localStorage.removeItem("user");
    window.alert("user session expired, Login again");
    window.location.replace("/login");
  }
  return res?.user;
} catch (error) {
  console.log(error);
}

}

export const sendFriendRequest =async (token ,id) => {
  try {
    const res = await apiRequest ({
      url: "/users/friend-request",
      token:token,
      method: "POST",
      data: { requestTo: id},
    })
    return;
  } catch (error) {
    console.log(error)
  }
}

export const viewUserProfile =async (token,id) => {
  try {
    const res =await apiRequest({
      url: "/users/profile-view",
      token:token,
      method: "POST",
       data: {id},
    })
    return;
  } catch (error) {
    
  }
}