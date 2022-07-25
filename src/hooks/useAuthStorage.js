/**
 * not in use
 */

import { useContext, useEffect, useState } from "react";
import AuthContext from "../utils/AuthContext";

const useAuthStorage = () => {
  const auth = useContext(AuthContext);
  const [loading, setLoading] = useState("false");
  const [result, setResult] = useState([]);
  
  const reload = async() => {
    try {
      setLoading("true");
      const token = await auth.getAccessToken();
      setResult(token);

    } catch(e) {
      setLoading("null");
    }
  };

  useEffect(()=>{
    const fetchData = async() => {
      try {
        setLoading("true");
        const token = await auth.getAccessToken();
        setResult(token);
  
      } catch(e) {
        setLoading("null");
      }
    };

    fetchData();
  },[]);

  return [result, loading, reload];
};

export default useAuthStorage;