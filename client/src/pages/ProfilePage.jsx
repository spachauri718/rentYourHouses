import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Navigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PlacesPage from "./PlacesPage";
import axios from "axios";
import AccountNav from "../AccountNav";


export default function ProfilePage() {
  const [redirect, settoRedirect] = useState(null)
  const { ready, user,setUser } = useContext(UserContext);


  let { subpage } = useParams();

  if (subpage == undefined) {
    subpage = "profile";
  }

  async function logout() {
    await axios.post("/logout");

    //logout ke baad home pe redirect 
    setUser(null)
    settoRedirect('/')
  }

  if (!ready) {
    return "user information is loading...";
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  


  if(redirect){
   return  <Navigate to={redirect} />;
  }

  return (
    <>
      <AccountNav />;  

      {subpage === "profile" && (
        <div className="text-center max-w-lg mx-auto">
          Logged in by Username:-{" "}
          <span className=" text-primary font-bold">{user.name} </span> Email :-{" "}
          <span className=" text-primary font-bold">{user.email} </span>
          <br />
          <button onClick={logout} className="bg-primary rounded-full px-3 py-2 text-white mt-2">
            Logout
          </button>
        </div>
      )}

      {subpage == "places" && (
        <PlacesPage />
      )

      }
    </>
  );
}
