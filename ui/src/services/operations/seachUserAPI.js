
import { apiConnector } from "../apiconnector";
import { setToken,setUser } from "../../slices/authSlice";




export const seachUserAPI=async(usernameRegx,setSearchItem,token)=>{
    
try{
   console.log("jane se phele",usernameRegx);
    const response = await apiConnector(
        "POST",
        "http://localhost:4000/searchforfriend",
        {
            token,
            usernameRegx
        }
      );

      if (!response.data.success) {
        setSearchItem([]);
        throw new Error("Error");
      }
      console.log("found user",response.data);
      setSearchItem(response.data.users)
      

}
catch(error){
console.log("error");

}



}

