import axios from "axios";
// axios.defaults.withCredentials= true;
axios.defaults.baseURL= "http://localhost:8000/api"
const user = JSON.parse(window.localStorage.getItem('user'));
if(user)
{
    axios.defaults.headers.common['Authorization']='Bearer'+ user.token;
}