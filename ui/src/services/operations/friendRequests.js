import { apiConnector } from "../apiconnector";
export const friendRequestApi=async(email,setData)=>{
 
    try{
       //todo:
        const response = await apiConnector(
            "GET",
            `${process.env.REACT_APP_BASE_URL}/getallfriendrequests/`
          );
        //   console.log(response)
          setData(response.data.data);
      
    }
    catch(error){
    console.log("error");
    
    }
    }
export const acceptRequestApi=async(email,id)=>{
 
    try{
       
        const response = await apiConnector(
            "POST",
            `${process.env.REACT_APP_BASE_URL}/acceptRequest`,
            {
                req_id:id
            }
          );
          console.log(response);      
    }
    catch(error){
    console.log("error");
    
    }
    }
export const rejectRequestApi=async(email,id)=>{
 
    try{
       
        const response = await apiConnector(
            "POST",
            `${process.env.REACT_APP_BASE_URL}/rejectRequest`,
            {
              
                req_id:id
            }
          );
          console.log(response);      
    }
    catch(error){
    console.log("error");
    
    }
    }
