import { CircularProgress } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router";
import { setSession } from "../../utils/jwt";
import axiosInstance from "../../utils/AxiosInstance";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { FetchAppData, fetchAppData } from "../pages/AppData";
import { setUserData } from "../../store/SmsSlice";

// For routes that can only be accessed by authenticated team members
function AuthGuard({ children, params }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);

  const setup = async () => {
    try {
    
      const response = await axios.post(
        "http://whatsappbackend.leadowsdev.in:9003/authenticate",
        {},
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        const token = response.data.token;
        setSession(token);
        const appData = await FetchAppData();
        console.log(appData);
        dispatch(setUserData({email:appData.email, unit_type:appData.unit_type}));


        navigate("/campaign");
      } else {
        window.location.href = "http://leadowsdev.in:5000/login";
        return;
      }
      //   }
    } catch (error) {
    } finally {
    }
  };
  useEffect(() => {
    setup();
  }, []);
  return <>{children}</>;
}

export default AuthGuard;
