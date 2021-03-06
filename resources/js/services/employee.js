const baseUrl="http://127.0.0.1:8000/api/employee";
import axios from "axios";
const employee={};

employee.list= async ()=>{
    const urlList= baseUrl+"/list"
    const res= await axios.get(urlList)
        .then(response=>{return response.data;})
        .catch(error=>{return error;})
    return res;
}
employee.save =async (data) =>{
    const urlSave = baseUrl + "/create"
    const res = await axios.post(urlSave,data)
        .then(response=>{return response.data;})
        .catch(error=>{return error;})
    return res;
}

export default employee
