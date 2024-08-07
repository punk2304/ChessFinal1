
import { apiConnector } from "../apiconnector";
import { setToken,setUser } from "../../slices/authSlice";




export const seachUserAPI=async(dispatch,navigate,usernameRegx,setSearchItem)=>{
    
try{
   console.log("jane se phele",usernameRegx);
    const response =await apiConnector(
        "POST",
        `${process.env.REACT_APP_BASE_URL}/searchforfriend`,
        {
            usernameRegx
        },
        {
          'Content-Type': 'application/json',
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
  if (error.response) {
    if(error.response.status==401){
       localStorage.clear();
       dispatch(setUser(null));
       dispatch(setToken(null));
       navigate('/login');
       
    }
         }

   console.log("error");

}


}

